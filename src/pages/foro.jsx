import React from 'react';

export const ForoPage = () => {
    return(
        <div>
            <h1>Foro de Discusión</h1>

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
    );
};

const data = [
    {
        id: 1,
        titulo: 'recordatorio',
        comenzadoPor: 'profesor Juan',
        ultimoMensaje: '21 de Octubre, 2023'    
    },
    {
        id: 2,
        titulo: 'duda tarea 1',
        comenzadoPor: 'Sabastian',
        ultimoMensaje: '5 de Octubre, 2023'
    },
    {
        id: 3,
        titulo: 'duda tema 5',
        comenzadoPor: 'Ganasis',
        ultimoMensaje: '11 de Octubre, 2023'
    }
]