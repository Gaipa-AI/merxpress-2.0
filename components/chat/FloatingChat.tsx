// FloatingChat.tsx
'use client'
import { useState } from 'react';
import Chat from './Chat';
import {Sparkles} from "lucide-react";

export default function FloatingChat() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-4 right-4 bg-primary text-white p-3 shadow-lg hover:shadow-indigo-500 rounded-full "
      >
        <Sparkles className="h-6 w-6" fill='currentColor' />
      </button>
      {open && (
        <div className="fixed bottom-20 right-4 w-80 shadow-xl  z-50">
          <Chat />
        </div>
      )}
    </>
  );
}
// FloatingChat.tsx