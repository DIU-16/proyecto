import React, { useState } from 'react';
import "../css/Chat.css";
import ChatPersonasPage from './chatPersonas';
import ChatRamosPage from './chatRamos';

function ChatPage() {
  const [activeTab, setActiveTab] = useState('tab1'); // Pista: Inicialmente seleccionamos la primera función.

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="navbar">
      <button
        className={activeTab === 'tab1' ? 'active' : ''}
        onClick={() => handleTabClick('tab1')}
      >
        ramos
        <ChatRamosPage />
      </button>
      <button
        className={activeTab === 'tab2' ? 'active' : ''}
        onClick={() => handleTabClick('tab2')}
      >
        personas
        <ChatPersonasPage />
      </button>
    </div>
  );
}

export default ChatPage;