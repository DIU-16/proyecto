import React from 'react';
import "../css/Chat.css";

function ChatPage() {
  return (
    <div className="container">
      <div className="header">
        <button>Personas</button>
        <button>Ramos</button>
        <input type="text" className="searchBar" placeholder="Buscar" />
      </div>
      <div className="chat-list">
        <div className="chat-box">
          <img src="../assets/user1.jpg" alt="Usuario 1" className="userImage" />
          <div className="user-info">
            <h3>Usuario 1</h3>
            <p>¡Hola! ¿Cómo estás?</p>
          </div>
        </div>
        <div className="chat-box">
          <img src="../assets/user2.jpg" alt="Usuario 2" className="userImage" />
          <div className="user-info">
            <h3>Usuario 2</h3>
            <p>¿Viste la tarea de ayer?</p>
          </div>
        </div>
        <div className="chat-box">
          <img src="../assets/user3.jpg" alt="Usuario 3" className="userImage" />
          <div className="user-info">
            <h3>Usuario 3</h3>
            <p>¡Claro! Fue muy difícil.</p>
          </div>
        </div>
        {/* Agrega más chat-box según sea necesario */}
      </div>
    </div>
  );
}

export default ChatPage;