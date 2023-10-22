import React from 'react';
import logo from '../assets/usm_name.png';
import '../css/course.css'
import { useState } from 'react'

export const CoursePage = () => {
    const [selected, setSelected] = useState(null)
    const toggle = (i) => {
        if (selected == i) {
            return setSelected(null)
        }
        setSelected(i)
    }
  return (
    <div>
      <a href="/">
        <img src={logo} alt="Logo de la Universidad Santa María" />
      </a>
      <div className='accordion'>
        {data.map((item, i) => (
            <div className = 'item'>
                <div className = 'title' onClick = {() => toggle(i)}>
                    <h2>
                        {item.title}
                    </h2>
                    <span>{selected === i ? '-' : '+'}</span>
                </div>
                <div className={selected === i ? 'content show' : 'content'}>
                    {item.content.map((line, j) => (
                        <p key={j}>{line.trim()}</p>
                    ))}
                </div>
            </div>
        ))}
      </div>
    </div>
  );
};

const data = [
    {
        title: 'Información y descripción',
        content: [
            'Nombre de la asignatura: Diseño de Interfaces Usuarias',
            'SIGLA: INF322',
            'Departamento que lo imparte: Informática',
            'Semestre que se dicta: Par',
            'Dedicación de tiempo (SCT): 150 horas cronológicas',
            'Descripción de la asignatura:  El estudiante comprende los conceptos generales asociados a la interacción entre personas y computadores. Evalúa la complejidad de dichas interacciones y desarrolla la habilidad de diseñar interfaces de sistemas interactivos, aplicando la metodología centrada en el usuario. Realiza análisis de requerimientos, diseño de prototipos, revisión y mantención de las interfaces. Utiliza guías para el diseño de diferentes estilos de interacción, tales como: sitios de internet, redes sociales y aplicaciones móviles, entre otras.',
        ]
            
    },
    {
        title: 'Noticias y consultas',
        content: [
            'Noticias y avisos',
            'Consultas (paralelo 200)',
            'Consultas (paralelo 201)',
        ]
    },
    {
        title: 'Calificaciones y Fechas',
        content: [
            'Evaluaciones, Calificación, Fecha, Retroalimentación',
        ]
    }
]

export default CoursePage;
