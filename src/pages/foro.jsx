import React from 'react';
import Header from '../components/header'
import "../css/course.css";

export const ForoPage = () => {
    return(
        <div class="background">
            <Header/>
            <div class="square">
				<div class="name">
                    <h1>Foro de Discusión</h1>
				</div>
			</div>
            <div class="square">
                <table border="1">
                    <thead>
                        <tr>
                            <th>Título del Debate</th>
                            <th>Comenzado por</th>
                            <th>Último Mensaje</th>
                        </tr>
                    </thead>
                    <tbody>
                    {data.map((debate) => (
                        <tr key={debate.id}>
                        <td>
                            <a href={`debate${debate.id}.html`}>{debate.titulo}</a>
                        </td>
                        <td>{debate.comenzadoPor}</td>
                        <td>{debate.ultimoMensaje}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

const data = [
    {
        id: 1,
        titulo: 'Recordatorio',
        comenzadoPor: 'Profesor Juan',
        ultimoMensaje: '21 de Octubre, 2023'    
    },
    {
        id: 2,
        titulo: 'Duda tarea 1',
        comenzadoPor: 'Sebastián',
        ultimoMensaje: '5 de Octubre, 2023'
    },
    {
        id: 3,
        titulo: 'Duda tema 5',
        comenzadoPor: 'Génesis',
        ultimoMensaje: '11 de Octubre, 2023'
    }
]