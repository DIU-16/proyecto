import React from 'react';
import logo from '../assets/usm_name.png';
import '../css/course.css'
import { useState } from 'react'

const createTable = (content) => {
	const table = [];

	let currentType = null;

	content.forEach((row, i) => {
		const type = row[0];

		if (type !== currentType) {
			currentType = type;
			if (type !== '') {
				table.push(
					<tr key={i} className="type-header">
						<td colSpan={4}>
							<strong>{type}</strong>
						</td>
					</tr>
				);
			}
		}

		table.push(
			<tr key={i}>
				{row.slice(1).map((cell, j) => (
					<td key={j}>
						{cell}
					</td>
				))}
			</tr>
		);
	});

	return table;
};

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
        <img src={logo} alt="Logo de la Universidad" />
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
					{item.title === 'Calificaciones y Fechas' ? (
						<table>
							<thead>
								<tr>
									{item.content.slice(0,4).map((header, j) => (
										<th key = {j}>
											{header}
										</th>
									))}
								</tr>
							</thead>
							<tbody>
								{createTable(item.content.slice(4))}
							</tbody>
						</table>
					) : (
						item.content.map((line, j) => (
							<p key={j}>
								{line}
							</p>
						))
					)}
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
        ],
        links: [ // Links vinculados al content.
            'NoticiasyAvisos',
            'consultas_200',
            'consultas_201',
        ],
    },
	{
		title: 'Calificaciones y Fechas',
		content: [
			'Evaluaciones', 'Calificación', 'Fecha', 'Retroalimentación',
			['Certámenes', 'C1', 49, '29-09-2023 15:50', '(...)'],
			['Certámenes', 'C2', '-', '24-11-2023 15:50', '(...)'],
			['Proyecto', 'Informe 1', 40, '21-10-2023 15:50', '(...)'],
		],
	},
]

export default CoursePage;