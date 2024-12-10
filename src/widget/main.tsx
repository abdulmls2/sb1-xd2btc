// src/widget/main.tsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import ChatbotWidget from './ChatbotWidget'; 
import '../index.css'; 

interface InitOptions {
  target: HTMLElement;
  config?: {
    domainId: string;
  };
}

export const init = ({ target, config }: InitOptions) => {
  const root = createRoot(target);
  root.render(
    <React.StrictMode>
      <ChatbotWidget domainId={config?.domainId || ''} /> 
    </React.StrictMode>
  );
};