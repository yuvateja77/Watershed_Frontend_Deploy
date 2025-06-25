import React, { useState, useRef, useEffect } from 'react';
import { FaRobot, FaTimes, FaPaperPlane, FaFileAlt, FaSpinner, FaRegCopy } from 'react-icons/fa';

function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    // Add user message
    const userMessage = {
      type: 'user',
      content: message,
      timestamp: new Date().toISOString()
    };
    setMessages(prev => [...prev, userMessage]);
    setMessage('');
    setIsLoading(true);

    try {
      // Call the backend API
      const response = await fetch('http://localhost:5000/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: message,
          context: messages.map(msg => msg.content) // Send conversation history for context
        }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      
      // Add bot response
      const botMessage = {
        type: 'bot',
        content: data.response,
        sources: data.sources || [], // References to documents
        timestamp: new Date().toISOString()
      };
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Error:', error);
      // Add error message
      setMessages(prev => [...prev, {
        type: 'error',
        content: 'Sorry, I encountered an error while processing your request. Please try again.',
        timestamp: new Date().toISOString()
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  // Copy the bot response to clipboard
  const handleCopy = (text) => {
    if (navigator && navigator.clipboard) {
      navigator.clipboard.writeText(text);
    }
  };

  const renderMessage = (message) => {
    switch (message.type) {
      case 'user':
        return (
          <div className="flex items-end justify-end space-x-2">
            <div className="bg-blue-500 text-white rounded-lg p-3 max-w-[80%] overflow-x-hidden">
              <p>{message.content}</p>
            </div>
          </div>
        );
      case 'bot':
        return (
          <div className="flex items-start space-x-2">
            <div className="bg-sky-100 rounded-lg p-3 max-w-[80%] relative overflow-x-hidden">
              <p className="text-sky-800">{message.content}</p>
              {message.sources && message.sources.length > 0 && (
                <div className="mt-2 text-xs text-sky-600">
                  <p className="font-semibold">Sources:</p>
                  <ul className="list-disc list-inside">
                    {message.sources.map((source, index) => (
                      <li key={index} className="flex items-center">
                        <FaFileAlt className="mr-1" />
                        {source}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {/* Inbuilt Logo Copy Button */}
              <button
                onClick={() => handleCopy(message.content)}
                className="absolute bottom-2 right-2 bg-white rounded-full p-1 shadow hover:shadow-md border border-gray-200 hover:bg-gray-100 transition"
                title="Copy response"
              >
                <FaRegCopy className="w-6 h-6 text-sky-500" />
              </button>
            </div>
          </div>
        );
      case 'error':
        return (
          <div className="flex items-start space-x-2">
            <div className="bg-red-100 rounded-lg p-3 max-w-[80%] overflow-x-hidden">
              <p className="text-red-800">{message.content}</p>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-96 h-[600px] bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden">
          {/* Chat Header */}
          <div className="bg-gradient-to-r from-sky-500 to-blue-600 p-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <FaRobot className="h-5 w-5 text-white" />
              <h3 className="text-white font-semibold">Water Resources Assistant</h3>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-200 transition-colors"
            >
              <FaTimes className="h-5 w-5" />
            </button>
          </div>

          {/* Chat Messages */}
          <div className="h-[calc(100%-8rem)] overflow-y-auto overflow-x-hidden p-4 space-y-4">
            {messages.length === 0 && (
              <div className="flex items-start space-x-2">
                <div className="bg-sky-100 rounded-lg p-3">
                  <p className="text-sky-800">
                    How can we help you?​
                    <br /><br />
                    <strong>Capabilities</strong>
                    <br />
                    The current version of experimental Gen AI model<br />
                    is trained on ~900 publicly available reports and<br />
                    articles.​<br /><br />
                    For precise results, please add as many details<br />
                    as possible and state questions clearly and<br />
                    without ambiguity. ​<br /><br />
                    This version is conversational, does not have<br />
                    access to real-time data, and cannot perform<br />
                    calculations.
                  </p>
                </div>
              </div>
            )}
            {messages.map((msg, index) => (
              <div key={index}>
                {renderMessage(msg)}
              </div>
            ))}
            {isLoading && (
              <div className="flex items-start space-x-2">
                <div className="bg-sky-100 rounded-lg p-3">
                  <div className="flex items-center space-x-2">
                    <FaSpinner className="animate-spin" />
                    <p className="text-sky-800">Searching documents...</p>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Chat Input */}
          <form onSubmit={handleSubmit} className="absolute bottom-0 left-0 right-0 p-4 bg-white border-t">
            <div className="flex space-x-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Ask about water resources..."
                className="flex-1 px-4 py-2 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                disabled={isLoading}
              />
              <button
                type="submit"
                className="bg-sky-500 text-white p-2 rounded-lg hover:bg-sky-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isLoading}
              >
                <FaPaperPlane className="h-5 w-5" />
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-gradient-to-r from-sky-500 to-blue-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center"
      >
        <FaRobot className="h-6 w-6" />
      </button>
    </div>
  );
}

export default ChatBot;