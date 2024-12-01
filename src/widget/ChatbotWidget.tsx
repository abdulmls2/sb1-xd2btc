import React, { useState, useEffect } from 'react';
import { Send, Paperclip, X } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface ChatbotConfig {
  chatbotName: string;
  greetingMessage: string;
  color: string;
  headerTextColor: string;
}

export default function ChatbotWidget({ domainId }: { domainId: string }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [message, setMessage] = useState('');
  const [config, setConfig] = useState<ChatbotConfig>({
    chatbotName: 'Chatbot',
    greetingMessage: 'Hello! How can I help you today?',
    color: '#FF6B00', 
    headerTextColor: '#000000'
  });

  useEffect(() => {
    const fetchConfig = async () => {
      try {
        const { data, error } = await supabase
          .from('domain_settings')
          .select('*')
          .eq('domain_id', domainId)
          .single();

        if (error) throw error;
        if (data) {
          setConfig({
            chatbotName: data.chatbot_name,
            greetingMessage: data.greeting_message || 'Hello! How can I help you today?',
            color: data.primary_color || '#FF6B00',
            headerTextColor: data.header_text_color || '#000000'
          });
        }
      } catch (error) {
        console.error('Error fetching chatbot config:', error);
      }
    };

    if (domainId) {
      fetchConfig();
    }
  }, [domainId]);

  const buttonStyle = {
    backgroundColor: config.color,
  };

  const headerStyle = {
    backgroundColor: config.color,
    color: config.headerTextColor,
  };

  return (
    <div className="fixed bottom-6 right-6 flex flex-col items-end z-[9999]">
      {isExpanded && (
        <div className="mb-4 w-[380px] h-[600px] bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden transition-all duration-300 flex flex-col">
          <div className="p-4 border-b flex items-center gap-3" style={headerStyle}>
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                <span className="text-lg">🤖</span>
                </div>
                <div className="absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white" style={buttonStyle}></div>
              </div>
              <div>
                <h3 className="font-medium">{config.chatbotName}</h3>
                <p className="text-sm opacity-90">Online</p>
              </div>
          </div>

          <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
            <div className="flex gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-gray-100 flex-shrink-0 flex items-center justify-center">
                🤖
              </div>
              <div className="bg-white p-3 rounded-lg shadow-sm max-w-[80%]">
                <p className="text-sm">{config.greetingMessage}</p>
                <span className="text-xs text-gray-500 mt-1 block">
                  {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </span>
              </div>
            </div>
          </div>

          <div className="p-4 border-t bg-white">
            <div className="space-y-4">
              <div className="flex-1 relative">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-2 pr-10 focus:border-transparent transition-all duration-200"
                  style={{ '--tw-ring-color': config.color } as React.CSSProperties}
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-gray-400 hover:text-gray-600">
                  <Paperclip className="h-5 w-5" />
                </button>
              </div>
              <div className="flex items-center justify-center gap-4">
                <a 
                  href="https://corinna.ai" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-sm text-gray-600 hover:text-gray-700"
                >
                  Powered by Corinna.ai
                </a>
                <button 
                  className="p-2 rounded-full text-white flex items-center justify-center transition-transform hover:scale-105 absolute right-4 top-4"
                  style={buttonStyle}
                >
                  <Send className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <button
        className="w-14 h-14 rounded-full text-white flex items-center justify-center shadow-lg transition-transform hover:scale-105"
        style={buttonStyle}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? '×' : '💬'}
      </button>
    </div>
  );
}