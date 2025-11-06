'use client'
import { useState } from 'react';
import { Send } from "lucide-react";

export default function Chat() {
  const [messages, setMessages] = useState<{ sender: string; text: string }[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { sender: 'user', text: input }];
    setMessages(newMessages);
    setInput('');
    setLoading(true);

    const response: Response = await fetch('/api', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: input }),
    });

    const data = await response.json();
    setMessages([...newMessages, { sender: 'bot', text: data.reply }]);
    setLoading(false);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 border border-indigo-500/100 rounded shadow">
      <div className="h-64 overflow-y-auto mb-4 bg-zinc-700 rounded p-2">
        {messages.map((msg, i) => (
          <div key={i} className={`mb-2 text-${msg.sender === 'user' ? 'right' : 'left'}`}>
            <span className="inline-block px-3 py-2 rounded  bg-teal-500">
              <strong className='text-zinc-100'>{msg.sender === 'user' ? 'You' : 'Bot'}:</strong> {msg.text}
            </span>
          </div>
        ))}
        {loading && <p className="text-zinc-400 italic">Bot is typing...</p>}
      </div>
      <div className="flex space-x-2">
        <form onSubmit={(e) => {
          e.preventDefault();
          sendMessage();
        }}>
          <input
            className="flex-1 p-2 border border-gray-100 focus:border-indigo-500 rounded"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about the company..."
          />
          <button className="bg-primary text-zinc-100 px-3 py-2 rounded ml-4" type="submit" >
            <Send className="inline-block h-5 w-5" />
          </button>
        </form>
      </div>
    </div>
  );
}
