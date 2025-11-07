'use client';

import { useState, useEffect } from 'react';
import Chatbot from './Chatbot';

export default function ChatbotWrapper() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasAutoOpened, setHasAutoOpened] = useState(false);
  
  useEffect(() => {
    // Auto-open chatbot after 3 seconds on first visit
    if (!hasAutoOpened) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        setHasAutoOpened(true);
      }, 3000);
      
      return () => clearTimeout(timer);
    }
  }, [hasAutoOpened]);
  
  return <Chatbot isOpen={isOpen} onToggle={() => setIsOpen(!isOpen)} />;
}
