import React from 'react';
import "../css/Chat.css";
import userImage1 from '../assets/user1.jpg';
import userImage2 from '../assets/user2.jpg';
import userImage3 from '../assets/user3.jpg';

function ChatPersonasPage() {
  return (
    <div className="container">
      <div className="chat-list">
        <div className="chat-box">
          <img src={userImage1} alt="Usuario 1" className="userImage" />
          <div className="user-info">
            <h3>Usuario 1</h3>
            <p>¡Hola! ¿Cómo estás?</p>
          </div>
        </div>
        <div className="chat-box">
          <img src={userImage2} alt="Usuario 2" className="userImage" />
          <div className="user-info">
            <h3>Usuario 2</h3>
            <p>¿Viste la tarea de ayer?</p>
          </div>
        </div>
        <div className="chat-box">
          <img src={userImage3} alt="Usuario 3" className="userImage" />
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

export default ChatPersonasPage;