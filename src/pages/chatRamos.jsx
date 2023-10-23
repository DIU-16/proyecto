import React from 'react';
import "../css/Chat.css";

function ChatRamosPage() {
  return (
    <div className="container">
      <div className="chat-list">
        <div className="chat-box">
          <img src="../assets/user1.jpg" alt="Usuario 1" className="userImage" />
          <div className="user-info">
            <h3>diseño de interfaces</h3>
            <p>que es una interfas amigable</p>
          </div>
        </div>
        <div className="chat-box">
          <img src="../assets/user2.jpg" alt="Usuario 2" className="userImage" />
          <div className="user-info">
            <h3>Computacion Cientifica</h3>
            <p>la tarea es trivial</p>
          </div>
        </div>
        <div className="chat-box">
          <img src="../assets/user3.jpg" alt="Usuario 3" className="userImage" />
          <div className="user-info">
            <h3>Sistemas operativos</h3>
            <p>depende del contexto</p>
          </div>
        </div>
        {/* Agrega más chat-box según sea necesario */}
      </div>
    </div>
  );
}

export default ChatRamosPage;