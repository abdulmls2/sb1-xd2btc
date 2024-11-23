import React, { useState, useRef } from 'react';
import { Mail, Clock, ChevronDown, Star, Trash2, Eye, EyeOff, Tag as TagIcon } from 'lucide-react';
import ConversationList from '../components/conversations/ConversationList';
import MessageList from '../components/conversations/MessageList';
import MessageInput from '../components/conversations/MessageInput';
import TagSelector from '../components/conversations/TagSelector';
import { useClickOutside } from '../hooks/useClickOutside';
import { useConversationStore } from '../lib/store/conversationStore';
import { toast } from 'react-hot-toast';
import TagManager from '../components/conversations/TagManager';

const initialFilters = [
  { icon: Mail, label: 'Unread', id: 'unread' },
  { icon: Mail, label: 'All', id: 'all' },
  { icon: Clock, label: 'Expired', id: 'expired' },
];

export default function Conversations() {
  const [showTagManager, setShowTagManager] = useState(false);
  const [activeFilter, setActiveFilter] = useState('unread');
  const [selectedConversationId, setSelectedConversationId] = useState<string | null>(null);
  const { updateConversation, currentConversation } = useConversationStore();

  // Refs for dropdown menus
  const tagManagerRef = useRef<HTMLDivElement>(null);

  // Use click outside hook
  useClickOutside(tagManagerRef, () => setShowTagManager(false));

  const handleDeleteConversation = async () => {
    if (!selectedConversationId) return;
    
    // Simple confirmation dialog
    if (!window.confirm('Delete this conversation?')) {
      return;
    }

    try {
      await updateConversation(selectedConversationId, { status: 'deleted' });
      setSelectedConversationId(null);
      toast.success('Conversation deleted successfully');
    } catch (error) {
      toast.error('Failed to delete conversation');
    }
  };

  const handleReadToggle = async () => {
    if (!selectedConversationId || !currentConversation) return;
    try {
      await updateConversation(selectedConversationId, { 
        is_read: !currentConversation.is_read 
      });
      toast.success(`Conversation marked as ${currentConversation.is_read ? 'unread' : 'read'}`);
    } catch (error) {
      toast.error('Failed to update conversation');
    }
  };

  const handleStarToggle = async () => {
    if (!selectedConversationId || !currentConversation) return;
    try {
      await updateConversation(selectedConversationId, { 
        is_starred: !currentConversation.is_starred 
      });
    } catch (error) {
      toast.error('Failed to update conversation');
    }
  };

  return (
    <div className="flex h-[calc(100vh-4rem)]">
      {/* Left Panel */}
      <div className="w-96 border-r border-gray-200 flex flex-col">
        <div className="p-4 border-b border-gray-200">
          <div className="flex gap-4 mb-4">
            {initialFilters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm ${
                  activeFilter === filter.id
                    ? 'bg-gray-900 text-white'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <filter.icon className="h-4 w-4" />
                {filter.label}
              </button>
            ))}
          </div>
          
          <div className="relative" ref={tagManagerRef}>
            <button
              onClick={() => setShowTagManager(!showTagManager)}
              className="flex items-center gap-2 px-2 py-1.5 rounded-lg text-xs bg-gray-300 text-black-600 hover:bg-gray-200 w-auto"
            >
              <TagIcon className="h-3 w-3" />
              <span>Tags</span>
              <ChevronDown className="h-3 w-3 ml-auto" />
            </button>

            {showTagManager && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-10 p-4">
                <TagManager />
              </div>
            )}
          </div>
        </div>
        
        <ConversationList
          onSelectConversation={setSelectedConversationId}
          selectedId={selectedConversationId}
        />
      </div>

      {/* Right Panel */}
      <div className="flex-1 flex flex-col">
        {selectedConversationId ? (
          <>
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <h1 className="text-2xl font-bold">
                  {currentConversation?.title || 'New Conversation'}
                </h1>
                <div className="flex items-center gap-3">
                  <button
                    onClick={handleReadToggle}
                    className={`p-2 rounded-lg hover:bg-gray-100 ${
                      currentConversation?.is_read ? 'text-gray-400' : 'text-blue-500'
                    }`}
                    title={currentConversation?.is_read ? 'Mark as unread' : 'Mark as read'}
                  >
                    {currentConversation?.is_read ? (
                      <Eye className="h-5 w-5" />
                    ) : (
                      <EyeOff className="h-5 w-5" />
                    )}
                  </button>
                  <button
                    onClick={handleStarToggle}
                    className={`p-2 rounded-lg hover:bg-gray-100 ${
                      currentConversation?.is_starred ? 'text-yellow-500' : 'text-gray-400'
                    }`}
                    title={currentConversation?.is_starred ? 'Remove from favorites' : 'Add to favorites'}
                  >
                    <Star className={`h-5 w-5 ${currentConversation?.is_starred ? 'fill-current' : ''}`} />
                  </button>
                  <button
                    onClick={handleDeleteConversation}
                    className="p-2 rounded-lg text-red-500 hover:bg-red-50"
                    title="Delete conversation"
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>
              </div>

              <TagSelector conversationId={selectedConversationId} />
            </div>

            <MessageList conversationId={selectedConversationId} />
            <MessageInput conversationId={selectedConversationId} />
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center text-gray-500">
            Select a conversation to start chatting
          </div>
        )}
      </div>
    </div>
  );
}