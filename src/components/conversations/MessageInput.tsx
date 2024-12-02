import React, { useState, useRef, useEffect } from 'react';
import { Send } from 'lucide-react';
import { useConversationStore } from '../../lib/store/conversationStore';
import { toast } from 'react-hot-toast';
import { supabase } from '../../lib/supabase';
import { useAuthStore } from '../../store/authStore';

interface MessageInputProps {
  conversationId: string;
}

export default function MessageInput({ conversationId }: MessageInputProps) {
  const [message, setMessage] = useState('');
  const { sendMessage, isLoading } = useConversationStore();
  const { user } = useAuthStore();
  const typingTimeoutRef = useRef<NodeJS.Timeout>();
  const [channel, setChannel] = useState<ReturnType<typeof supabase.channel> | null>(null);
  const [isTyping, setIsTyping] = useState(false);

  // Initialize channel on mount
  useEffect(() => {
    if (!user) return;

    const typingChannel = supabase.channel(`typing:${conversationId}`, {
      config: {
        broadcast: { self: false }
      }
    });

    typingChannel.subscribe();
    setChannel(typingChannel);

    return () => {
      typingChannel.unsubscribe();
    };
  }, [conversationId, user]);

  const handleTyping = async () => {
    if (!user || !channel) return;
    
    setIsTyping(true);

    // Clear existing timeout
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }

    // Send typing status
    await channel.send({
      type: 'broadcast',
      event: 'typing',
      payload: {
        user_id: user.id,
        username: 'User',
        typing: true,
        is_bot: false
      }
    });

    // Set timeout to clear typing status
    typingTimeoutRef.current = setTimeout(async () => {
      setIsTyping(false);
      if (channel) {
        await channel.send({
        type: 'broadcast',
        event: 'typing',
        payload: {
          user_id: user.id,
          username: 'User',
          typing: false,
          is_bot: false
        }
      });
      }
    }, 2000);
  };

  useEffect(() => {
    return () => {
      if (typingTimeoutRef.current) {
        clearTimeout(typingTimeoutRef.current);
      }
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim() || isLoading) return;

    try {
      await sendMessage(message.trim(), conversationId);
      setMessage('');
    } catch (error: any) {
      toast.error('Failed to send message');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border-t border-gray-200">
      <div className="flex gap-2">
        <input
          type="text"
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
            handleTyping();
          }}
          placeholder="Type your message..."
          className="flex-1 p-3 bg-gray-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
          disabled={isLoading}
        />
        <button
          type="submit"
          disabled={!message.trim() || isLoading}
          className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? (
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
          ) : (
            <Send className="h-5 w-5" />
          )}
          Send
        </button>
      </div>
    </form>
  );
}