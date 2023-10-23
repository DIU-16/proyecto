import React from 'react';
import "../css/Chat.css";
import userImage1 from '../assets/user1.jpg';
import userImage2 from '../assets/user2.jpg';
import userImage3 from '../assets/user3.jpg';

function ChatRamosPage() {
  return (
    <div className="container">
      <div className="chat-list">
        <div className="chat-box">
          <img src={userImage1} alt="Usuario 1" className="userImage" />
          <div className="user-info">
            <h3>FIS130 - Física 130</h3>
            <p>Recordar que el control N°5 se realizará en los bloques 13-14 el día viernes 13 de octubre.</p>
          </div>
        </div>
        <div className="chat-box">
          <img src={userImage2} alt="Usuario 2" className="userImage" />
          <div className="user-info">
            <h3>INF256 - Redes de Computadores</h3>
            <p>Para la tarea 1, ¿Se puede trabajar solo?</p>
          </div>
        </div>
        <div className="chat-box">
          <img src={userImage3} alt="Usuario 3" className="userImage" />
          <div className="user-info">
            <h3>INF280 - Estadística Computacional</h3>
            <p>No entiendo para que se y cuándo se utiliza la distribución beta, ayuda!!</p>
          </div>
        </div>
        {/* Agrega más chat-box según sea necesario */}
      </div>
    </div>
  );
}

export default ChatRamosPage;