import React, { useState, useEffect, useRef } from 'react';
import { Send, Paperclip, X, Archive, MessageSquare, MessageSquarePlus, ChevronLeft, RefreshCw } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { format } from 'date-fns';
import { useConversationStore } from '../lib/store/conversationStore';
import { useChatbotStore } from '../lib/store/chatbotStore';

const SESSION_KEY = 'chatbot_session_id';
const CONVERSATION_EXPIRY_DAYS = 180; // 6 months default expiry

interface ChatbotConfig {
  chatbotName: string;
  greetingMessage: string;
  color: string;
  headerTextColor: string;
}

interface Message {
  id: string;
  content: string;
  sender_type: 'user' | 'bot';
  created_at: string;
}

interface Conversation {
  id: string;
  created_at: string;
  status: 'active' | 'archived';
  last_message_at: string;
}

export default function ChatbotWidget({ domainId }: { domainId: string }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [view, setView] = useState<'history' | 'chat'>('history');
  const [conversationId, setConversationId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [processedMessageIds] = useState(new Set<string>());
  const [error, setError] = useState<string | null>(null);
  const [sessionId, setSessionId] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [isArchived, setIsArchived] = useState(false);
  const notificationSound = useRef<HTMLAudioElement | null>(null);
  const { sendMessage: chatbotSendMessage } = useChatbotStore();

  // Add this helper function at the top of the component
  const isMessageDuplicate = (newMsg: Message, existingMessages: Message[]) => {
    return existingMessages.some(msg => 
      // Check for exact ID match
      msg.id === newMsg.id ||
      // Check for temp ID being replaced by real ID
      (msg.id.startsWith('temp-') && msg.content === newMsg.content && msg.sender_type === newMsg.sender_type) ||
      // Check for exact content match within a small time window (2 seconds)
      (msg.content === newMsg.content && 
       msg.sender_type === newMsg.sender_type && 
       Math.abs(new Date(msg.created_at).getTime() - new Date(newMsg.created_at).getTime()) < 2000)
    );
  };

  // Subscribe to new conversations
  useEffect(() => {
    if (!sessionId) return;

    const channel = supabase
      .channel('new-conversations')
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'conversations',
          filter: `session_id=eq.${sessionId}`,
        },
        (payload) => {
          if (payload.eventType === 'INSERT') {
            const newConversation = payload.new as Conversation;
            setConversations(prevConversations => [newConversation, ...prevConversations]);
          }
        }
      )
      .subscribe();

    return () => {
      channel.unsubscribe();
    };
  }, [sessionId]);

  // Subscribe to conversation updates
  useEffect(() => {
    if (!sessionId) return;

    const channel = supabase
      .channel('conversations-updates')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'conversations',
          filter: `session_id=eq.${sessionId}`,
        },
        (payload) => {
          if (payload.eventType === 'UPDATE') {
            // Update the conversation in the list
            setConversations(prevConversations => 
              prevConversations.map(conv => 
                conv.id === payload.new.id ? { ...conv, ...payload.new } : conv
              )
            );

            // If this is the current conversation, update archived status
            if (payload.new.id === conversationId) {
              setIsArchived(payload.new.status === 'archived');
            }
          }
        }
      )
      .subscribe();

    return () => {
      channel.unsubscribe();
    };
  }, [sessionId, conversationId]);

  useEffect(() => {
    if (isExpanded) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isExpanded]);

  // Load conversation history
  const loadConversationHistory = async () => {
    if (!sessionId) return;
    
    try {
      const { data, error } = await supabase
        .from('conversations')
        .select('*')
        .eq('session_id', sessionId)
        .order('last_message_at', { ascending: false });

      if (error) throw error;
      setConversations(data || []);
    } catch (error) {
      console.error('Error loading conversation history:', error);
    }
  };

  useEffect(() => {
    if (sessionId) {
      loadConversationHistory();
    }
  }, [sessionId]);

  const handleStartNewConversation = async () => {
    setMessages([]);
    setConversationId(null);
    setIsArchived(false);
    setView('chat');
  };

  const handleBackToHistory = () => {
    setView('history');
    setMessages([]);
    setConversationId(null);
    setIsArchived(false);
  };

  const handleSelectConversation = async (conversation: Conversation) => {
    try {
      setConversationId(conversation.id);
      setIsArchived(conversation.status === 'archived');
      
      const { data: messages } = await supabase
        .from('messages')
        .select('*')
        .eq('conversation_id', conversation.id)
        .order('created_at', { ascending: true });

      if (messages) {
        setMessages(messages);
        processedMessageIds.clear();
        messages.forEach(msg => processedMessageIds.add(msg.id));
      }
      
      setView('chat');
    } catch (error) {
      console.error('Error loading conversation:', error);
    }
  };

  // Subscribe to conversation status changes
  useEffect(() => {
    if (!conversationId) return;

    const channel = supabase
      .channel(`conversation-status:${conversationId}`)
      .on(
        'postgres_changes',
        {
          event: 'UPDATE',
          schema: 'public',
          table: 'conversations',
          filter: `id=eq.${conversationId}`,
        },
        (payload) => {
          if (payload.new.status === 'archived') {
            setIsArchived(true);
            playNotificationSound();
          } else {
            setIsArchived(false);
          }
        }
      )
      .subscribe();

    return () => {
      channel.unsubscribe();
    };
  }, [conversationId]);

  // Initialize notification sound
  useEffect(() => {
    notificationSound.current = new Audio('https://assets.mixkit.co/active_storage/sfx/2354/2354-preview.mp3');
  }, []);

  const playNotificationSound = () => {
    if (notificationSound.current) {
      notificationSound.current.currentTime = 0; // Reset sound to start
      notificationSound.current.play().catch(error => {
        console.log('Error playing notification:', error);
      });
    }
  };

  // Add real-time subscription for messages
  useEffect(() => {
    if (!conversationId) {
      console.log('No conversation ID yet, skipping subscription');
      return;
    }

    console.log('Setting up subscription for conversation:', conversationId);

    const channel = supabase.channel(`messages-${conversationId}`)
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'messages',
          filter: `conversation_id=eq.${conversationId}`
        },
        (payload) => {
          console.log('Received real-time event:', payload);
          
          if (payload.eventType === 'INSERT') {
            const newMessage = payload.new as Message;
            console.log('New message:', newMessage);

            setMessages(prevMessages => {
              // Use the enhanced duplicate detection
              if (isMessageDuplicate(newMessage, prevMessages)) {
                console.log('Message already exists, skipping');
                return prevMessages;
              }

              // If this is a real message replacing a temp message, remove the temp message
              const updatedMessages = prevMessages.filter(msg => 
                !(msg.id.startsWith('temp-') && 
                  msg.content === newMessage.content && 
                  msg.sender_type === newMessage.sender_type)
              );

              // Add message ID to processed set
              processedMessageIds.add(newMessage.id);

              // Play sound for all bot messages, regardless of widget state
              if (newMessage.sender_type === 'bot') {
                playNotificationSound();
              }

              console.log('Adding new message to state');
              return [...updatedMessages, newMessage];
            });
          }
        }
      );

    channel.subscribe((status) => {
      console.log('Subscription status:', status);
    });

    return () => {
      console.log('Cleaning up subscription for conversation:', conversationId);
      channel.unsubscribe();
    };
  }, [conversationId, isExpanded]);

  useEffect(() => {
    // Initialize session and load existing conversation
    const initializeSession = async () => {
      let currentSessionId = localStorage.getItem(SESSION_KEY);
      
      if (!currentSessionId) {
        // Use the global crypto object
        currentSessionId = window.crypto.randomUUID();
        localStorage.setItem(SESSION_KEY, currentSessionId);
      }
      
      setSessionId(currentSessionId);
      await loadExistingConversation(currentSessionId);
    };

    initializeSession();
  }, []);

  const loadExistingConversation = async (currentSessionId: string) => {
    try {
      // First check if there are any conversations
      const { data: conversations, error: fetchError } = await supabase
        .from('conversations')
        .select('*')
        .eq('session_id', currentSessionId)
        .eq('status', 'active')
        .order('last_message_at', { ascending: false })
        .limit(1);

      if (fetchError) throw fetchError;
      
      // If no conversations found, return early
      if (!conversations || conversations.length === 0) {
        console.log('No active conversations found for this session');
        return;
      }

      const conversation = conversations[0];

      // Check if conversation has expired
      const expiryDate = new Date();
      expiryDate.setDate(expiryDate.getDate() - CONVERSATION_EXPIRY_DAYS);
      
      if (new Date(conversation.last_message_at) < expiryDate) {
        // Conversation has expired, archive it
        await supabase
          .from('conversations')
          .update({ status: 'archived' })
          .eq('id', conversation.id);
        return;
      }

      setConversationId(conversation.id);

      // Load existing messages
      const { data: existingMessages } = await supabase
        .from('messages')
        .select('*')
        .eq('conversation_id', conversation.id)
        .order('created_at', { ascending: true });

      if (existingMessages) {
        const uniqueMessages = existingMessages.filter(msg => {
          if (processedMessageIds.has(msg.id)) {
            return false;
          }
          processedMessageIds.add(msg.id);
          return true;
        });
        setMessages(uniqueMessages);
      }
    } catch (error) {
      // Only log actual errors, not "no results" cases
      if (error instanceof Error && !error.message.includes('no rows returned')) {
        console.error('Error loading existing conversation:', error);
        setError('Failed to load conversation history');
      }
    }
  };

  const createConversation = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      
      // If no user, create anonymous session
      if (!user) {
        await supabase.auth.signInAnonymously();
        const { data: { user: anonUser } } = await supabase.auth.getUser();
        if (!anonUser) throw new Error('Failed to create anonymous session');
        
        const { data, error } = await supabase
          .from('conversations')
          .insert({
            domain_id: domainId,
            user_id: anonUser.id,
            session_id: sessionId,
            last_message_at: new Date().toISOString(),
            status: 'active'
          })
          .select()
          .single();

        if (error) throw error;
        return data.id;
      }

      // If user exists, proceed with user.id
      const { data, error } = await supabase
        .from('conversations')
        .insert({
          domain_id: domainId,
          user_id: user.id,
          session_id: sessionId,
          last_message_at: new Date().toISOString(),
          status: 'active'
        })
        .select()
        .single();

      if (error) throw error;
      return data.id;
    } catch (error) {
      console.error('Error creating conversation:', error);
      throw error;
    }
  };

  const sendMessage = async (content: string) => {
    try {
      setIsLoading(true);
      setError(null);

      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        await supabase.auth.signInAnonymously();
      }
      
      // Create a new conversation if one doesn't exist
      const currentConversationId = conversationId || await createConversation();
      if (!conversationId) {
        setConversationId(currentConversationId);
      }

      // Create a temporary message object for immediate display
      const tempMessage: Message = {
        id: `temp-${Date.now()}`,
        content: content,
        sender_type: 'user',
        created_at: new Date().toISOString(),
      };

      // Add to messages only if it's not a duplicate
      setMessages(prevMessages => {
        if (isMessageDuplicate(tempMessage, prevMessages)) {
          return prevMessages;
        }
        return [...prevMessages, tempMessage];
      });

      // Send message through chatbot store which will handle OpenAI integration
      await chatbotSendMessage(content, currentConversationId);

      setMessage('');
    } catch (error) {
      console.error('Error sending message:', error);
      setError('Failed to send message. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim() || isLoading) return;
    await sendMessage(message.trim());
  };

  useEffect(() => {
    const fetchConfig = async () => {
      try {
        const { data } = await supabase
          .from('domain_settings')
          .select('*')
          .eq('domain_id', domainId)
          .single();

        if (data) {
          setConfig({
            chatbotName: data.chatbot_name,
            greetingMessage: data.greeting_message || 'Hello! How can I help you today?',
            color: data.primary_color || '#FF6B00',
            headerTextColor: data.header_text_color || '#000000'
          });
        } else {
          // Use default config if no settings exist
          setConfig({
            chatbotName: 'Friendly Assistant',
            greetingMessage: 'Hello! How can I help you today?',
            color: '#FF6B00',
            headerTextColor: '#000000'
          });
        }
      } catch (error) {
        console.error('Error fetching chatbot config:', error);
        // Use default config on error
        setConfig({
          chatbotName: 'Friendly Assistant',
          greetingMessage: 'Hello! How can I help you today?',
          color: '#FF6B00',
          headerTextColor: '#000000'
        });
      }
    };

    if (domainId) {
      fetchConfig();
    }
  }, [domainId]);

  const [config, setConfig] = useState<ChatbotConfig>({
    chatbotName: 'Chatbot',
    greetingMessage: 'Hello! How can I help you today?',
    color: '#FF6B00', 
    headerTextColor: '#000000'
  });

  const buttonStyle = {
    backgroundColor: config.color,
  };

  // Add this function near your other handler functions
  const handleRefreshChat = async () => {
    if (conversationId) {
      try {
        // Clear current messages
        setMessages([]);
        processedMessageIds.clear();
        
        // Reload messages for current conversation
        const { data: messages } = await supabase
          .from('messages')
          .select('*')
          .eq('conversation_id', conversationId)
          .order('created_at', { ascending: true });

        if (messages) {
          setMessages(messages);
          messages.forEach(msg => processedMessageIds.add(msg.id));
        }
      } catch (error) {
        console.error('Error refreshing chat:', error);
        setError('Failed to refresh chat');
      }
    }
  };

  return (
    <div className="fixed bottom-6 right-6 flex flex-col items-end z-[9999]">
      {isExpanded && (
        <div className="mb-4 w-[380px] bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden">
          {/* Header */}
          <div className="p-4 border-b flex items-center gap-3" style={{ backgroundColor: config.color }}>
            <div className="relative flex-shrink-0">
              <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                <span className="text-lg">🤖</span>
              </div>
              <div className="absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white" style={buttonStyle}></div>
            </div>
            <div className="flex-1">
              <h3 className="font-medium" style={{ color: config.headerTextColor }}>{config.chatbotName}</h3>
              <p className="text-sm" style={{ color: config.headerTextColor }}>from {config.chatbotName}</p>
            </div>
            {view === 'chat' && (
              <div className="flex items-center gap-2">
                <button
                  onClick={handleRefreshChat}
                  className="flex items-center gap-1 px-3 py-1.5 bg-white/20 rounded-lg text-sm"
                  style={{ color: config.headerTextColor }}
                  title="Refresh chat"
                >
                  <RefreshCw className="h-4 w-4" />
                </button>
                <button
                  onClick={handleBackToHistory}
                  className="flex items-center gap-1 px-3 py-1.5 bg-white/20 rounded-lg text-sm"
                  style={{ color: config.headerTextColor }}
                >
                  <MessageSquare className="h-4 w-4" />
                </button>
              </div>
            )}
          </div>

          {/* Chat Area */}
          <div className="h-[400px] overflow-y-auto p-4 bg-gray-50 relative">
            {view === 'history' ? (
              <div className="space-y-4 h-full">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-medium text-gray-900">Conversation History</h3>
                  <button
                    onClick={handleStartNewConversation}
                    className="flex items-center gap-2 px-3 py-1.5 bg-orange-500 text-white text-sm rounded-lg hover:bg-orange-600"
                  >
                    <MessageSquarePlus className="h-4 w-4" />
                    Start New Chat
                  </button>
                </div>
                {conversations.map((conv) => (
                  <button
                    key={conv.id}
                    onClick={() => handleSelectConversation(conv)}
                    className="w-full text-left p-4 rounded-lg hover:bg-gray-100 transition-colors border border-gray-200"
                  >
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-medium text-gray-900">
                        {format(new Date(conv.created_at), 'PPP')}
                      </span>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        conv.status === 'archived' 
                          ? 'bg-gray-100 text-gray-600' 
                          : 'bg-green-100 text-green-600'
                      }`}>
                        {conv.status === 'archived' ? 'Archived' : 'Active'}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">
                      Last message: {format(new Date(conv.last_message_at), 'p')}
                    </p>
                  </button>
                ))}
                {conversations.length === 0 && (
                  <div className="flex flex-col items-center justify-center h-full text-center">
                    <p className="mb-4">No previous conversations found</p>
                  </div>
                )}
              </div>
            ) : (
            <div className="space-y-4">
              {/* Welcome Message */}
              {/* Always show greeting message in chat view */}
              {view === 'chat' && (
                <div className="flex gap-2">
                <div className="w-8 h-8 rounded-full bg-gray-100 flex-shrink-0 flex items-center justify-center">
                  🤖
                </div>
                <div className="bg-white p-3 rounded-lg shadow-sm max-w-[80%]">
                  <p className="text-sm">{config.greetingMessage}</p>
                  <span className="text-xs text-gray-500 mt-1 block">
                    {format(new Date(), 'h:mm a')}
                  </span>
                </div>
              </div>
              )}
              
              {/* Messages */}
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex gap-2 ${msg.sender_type === 'user' ? 'justify-end' : ''}`}
                >
                  {msg.sender_type === 'bot' && (
                    <div className="w-8 h-8 rounded-full bg-gray-100 flex-shrink-0 flex items-center justify-center">
                      🤖
                    </div>
                  )}
                  <div 
                    className={`p-3 rounded-lg max-w-[80%] ${
                      msg.sender_type === 'user' 
                        ? 'bg-orange-500 text-white ml-auto' 
                        : 'bg-white shadow-sm'
                    }`}
                  >
                    <p className="text-sm">{msg.content}</p>
                    <span className={`text-xs mt-1 block ${
                      msg.sender_type === 'user' ? 'text-orange-100' : 'text-gray-500'
                    }`}>
                      {format(new Date(msg.created_at), 'h:mm a')}
                    </span>
                  </div>
                  {msg.sender_type === 'user' && (
                    <div className="w-8 h-8 rounded-full bg-orange-100 flex-shrink-0 flex items-center justify-center">
                      👤
                    </div>
                  )}
                </div>
              ))}
              {isArchived && (
                <div className="flex justify-center">
                  <div className="bg-gray-100 rounded-lg px-4 py-3 flex items-center gap-2 text-gray-600">
                    <Archive className="h-4 w-4" />
                    <span className="text-sm">This conversation has been archived</span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
            )}
          </div>

          {/* Input Area */}
          {view === 'chat' && <form onSubmit={handleSubmit} className="p-4 border-t bg-white">
            <div className="flex gap-2">
              <div className="flex-1 relative">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-2 pr-10 disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{ '--tw-ring-color': config.color } as React.CSSProperties}
                  disabled={isLoading || isArchived} />
              </div>
              <button 
                type="submit"
                disabled={!message.trim() || isLoading || isArchived}
                className="p-2 rounded-full text-white flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                style={buttonStyle}
              >
                {isLoading ? (
                  <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <Send className="h-5 w-5" />
                )}
              </button>
            </div>
            <div className="text-center mt-2">
              <a 
                href="https://dashboard.ai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-gray-600 hover:text-gray-700"
              >
                Powered by Dashboard.ai
              </a>
            </div>
          </form>}
        </div>
      )}

      {/* Toggle Button */}
      <button
        className="w-14 h-14 rounded-full text-white flex items-center justify-center shadow-lg"
        style={buttonStyle}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? '×' : '💬'}
      </button>
    </div>
  );
}