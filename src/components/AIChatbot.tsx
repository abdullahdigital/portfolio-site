"use client";

import React, { useState, useRef, useEffect } from "react";
import { FaTimes, FaPaperPlane } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import toast from "react-hot-toast";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  action?: {
    type: "contact";
    label: string;
  };
}

let messageIdCounter = 0;

const AIChatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      role: "assistant",
      content:
        "Hi! 👋 I am Abdullah's AI assistant. Ask me about his projects, skills, cybersecurity work, web development, or how to work with him.",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Ensure component only renders on client
  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleSendMessage = async () => {
    const trimmedInput = input.trim();

    if (!trimmedInput || isLoading) return;

    if (trimmedInput.length > 1000) {
      toast.error("Message is too long (max 1000 characters)");
      return;
    }

    const userMessage: Message = {
      id: `msg-${++messageIdCounter}`,
      role: "user",
      content: trimmedInput,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: messages
            .concat(userMessage)
            .slice(-10)
            .map((m) => ({
              role: m.role,
              content: m.content,
            })),
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to get response");
      }

      const data = await response.json();

      const assistantMessage: Message = {
        id: `msg-${++messageIdCounter}`,
        role: "assistant",
        content: data.message,
        ...(data.action && { action: data.action }),
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "An error occurred";
      toast.error(errorMessage);

      setMessages((prev) => [
        ...prev,
        {
          id: `msg-${++messageIdCounter}`,
          role: "assistant",
          content: `Sorry, I encountered an error: ${errorMessage}. Please try again.`,
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleContactClick = () => {
    setIsOpen(false);
    const contactElement = document.getElementById("contact");
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey && !isLoading) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  // Only render on client to prevent hydration mismatch
  if (!mounted) {
    return null;
  }

  return (
    <>
      {/* Floating Chat Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-16 sm:right-12 w-14 h-14 rounded-full shadow-lg z-40 flex items-center justify-center transition-all duration-300 ${
          isOpen
            ? "bg-red-500 hover:bg-red-600"
            : "bg-emerald-500 hover:bg-emerald-600"
        } text-white`}
        aria-label={isOpen ? "Close chat" : "Open chat"}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        {isOpen ? (
          <FaTimes size={20} />
        ) : (
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
          </svg>
        )}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-16 w-96 max-h-[600px] bg-gray-800 rounded-lg shadow-2xl z-40 flex flex-col border border-gray-700 overflow-hidden md:w-96 sm:w-80 sm:bottom-20 sm:right-12"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 p-4 text-white flex justify-between items-center">
              <h3 className="font-semibold">Abdullah&apos;s AI Assistant</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-emerald-700 rounded-full p-1 transition-colors"
                aria-label="Close chat"
              >
                <FaTimes size={16} />
              </button>
            </div>

            {/* Messages Container */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-800">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className={`flex ${
                    message.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-xs px-4 py-2 rounded-lg ${
                      message.role === "user"
                        ? "bg-emerald-600 text-white rounded-br-none"
                        : "bg-gray-700 text-gray-100 rounded-bl-none"
                    }`}
                  >
                    <p className="text-sm whitespace-pre-wrap">
                      {message.content}
                    </p>
                    {message.action && message.role === "assistant" && (
                      <button
                        onClick={handleContactClick}
                        className="mt-2 w-full bg-white text-emerald-600 hover:bg-gray-100 px-3 py-1 rounded text-xs font-semibold transition-colors"
                      >
                        {message.action.label}
                      </button>
                    )}
                  </div>
                </motion.div>
              ))}

              {isLoading && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="bg-gray-700 text-gray-100 px-4 py-2 rounded-lg rounded-bl-none">
                    <div className="flex gap-2">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div
                        className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0.2s" }}
                      ></div>
                      <div
                        className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0.4s" }}
                      ></div>
                    </div>
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="border-t border-gray-700 p-4 bg-gray-800">
              <div className="flex gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me anything..."
                  disabled={isLoading}
                  className="flex-1 bg-gray-700 text-white placeholder-gray-400 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-label="Chat message input"
                />
                <button
                  onClick={handleSendMessage}
                  disabled={isLoading || !input.trim()}
                  className="bg-emerald-500 hover:bg-emerald-600 disabled:bg-gray-600 text-white rounded-lg p-2 transition-colors disabled:cursor-not-allowed"
                  aria-label="Send message"
                >
                  <FaPaperPlane size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIChatbot;
