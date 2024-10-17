import styles from "@/styles/IdeaGenerationFour/ChatBox.module.css"; // Correct import

import React, { useState } from 'react'

const ChatBox = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userMessage = { role: 'user', content: input };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput('');

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ messages: newMessages }),
      });
      const data = await response.json();
      setMessages([...newMessages, data.result]);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className={`flex h-screen bg-chat-bg w-[1180px] ${styles.sidebar}`}>
      {/* Main chat area */}
      <div className="flex-1 flex flex-col">
        <div className="flex-1 overflow-y-auto p-4">
          {messages.map((msg, index) => (
            <div key={index} className={`mb-4 rounded-[30px] p-1 ${msg.role === 'user' ? 'text-right' : 'text-left'}`}>
              <span className={`inline-block p-2 text-white rounded-lg ${msg.role === 'user' ? styles.sendButton : styles.sidebar}`}>
                {msg.content}
              </span>
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit} className={styles.inputBoxWrapper}>
          <div className="flex">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className={styles.inputBox}
              placeholder="Type your message here..."
            />
            <button type="submit" className={styles.sendButton}>
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChatBox;
