import React from "react";
import logo from "../assets/usm_name.png";
import Header from '../components/header'
import "../css/course.css";
import { useState } from "react";

export const CoursePage = () => {
    const [selected, setSelected] = useState(null);
    const toggle = (i) => {
        if (selected == i) {
            return setSelected(null);
        }
        setSelected(i);
    };
    return (
        <div class="background">
            <Header />
            {/* <nav> 

                <label for="" class="brand">
                    <a href="/">
                        <img src={logo} alt="Logo de la Universidad" />
                    </a>
                </label>
            </nav> */}
			{/* Cuadro con el nombre */}
			<div class="square">
				<div class="name">
					<h1>
						(202302)(INF322) DISEÑO DE INTERFACES USUARIAS|Paralelos:200/201
					</h1>
				</div>
			</div>
			<div class="square">
				<div class="navbar">
					<a href="#" class="nav-item active">Información General</a>
					{/* <a href="#" class="nav-item">Información Adicional</a> */}
				</div>
				<div className="accordion">
					{data.map((item, i) => (
						<div className="item">
							<div className="title" onClick={() => toggle(i)}>
								<h2>{item.title}</h2>
								<span>{selected === i ? "-" : "+"}</span>
							</div>
							<div
								className={
									selected === i ? "content show" : "content"
								}
							>
								{item.title === "Calificaciones y Fechas" ? (
									<table className="left-aligned-table">
										<thead>
											<tr>
												{item.content
													.slice(0, 4)
													.map((header, j) => (
														<th key={j}>{header}</th>
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
											{item.links && item.links[j] ? (
												<a href={item.links[j]}>{line}</a>
											) : (
												line.trim()
											)}
										</p>
									))
								)}
							</div>
						</div>
					))}
				</div>
			</div>
        </div>
    );
};

const createTable = (evaluations) => {
    const table = [];

    evaluations.forEach((section, j) => {
        // Agrega solo una fila de encabezado por tipo
        table.push(
            <tr key={j} className="type-header">
                <p colSpan={4}>
                    <strong>{section.type}</strong>
                </p>
            </tr>
        );

        section.evaluations.forEach((evaluation, i) => {
            const evaluationWithLabel = [...evaluation];

            table.push(
                <tr key={i}>
                    {evaluationWithLabel.map((cell, k) => (
                        <td key={k}>{cell}</td>
                    ))}
                </tr>
            );
        });
    });

    return table;
};

const data = [
    {
        title: "Información y descripción",
        content: [
            "Nombre de la asignatura: Diseño de Interfaces Usuarias",
            "SIGLA: INF322",
            "Departamento que lo imparte: Informática",
            "Semestre que se dicta: Par",
            "Dedicación de tiempo (SCT): 150 horas cronológicas",
            "Descripción de la asignatura:  El estudiante comprende los conceptos generales asociados a la interacción entre personas y computadores. Evalúa la complejidad de dichas interacciones y desarrolla la habilidad de diseñar interfaces de sistemas interactivos, aplicando la metodología centrada en el usuario. Realiza análisis de requerimientos, diseño de prototipos, revisión y mantención de las interfaces. Utiliza guías para el diseño de diferentes estilos de interacción, tales como: sitios de internet, redes sociales y aplicaciones móviles, entre otras.",
        ],
    },
    {
        title: "Noticias y consultas",
        content: [
            "Noticias y avisos",
            "Consultas (paralelo 200)",
            "Consultas (paralelo 201)",
        ],
        links: [
            // Links vinculados al content.
            // "NoticiasyAvisos",
            // "consultas_200",
            // "consultas_201",
            "chat",
            "chat",
            "chat",
        ],
    },
    {
        title: "Calificaciones y Fechas",
        content: [
            "Evaluaciones",
            "Calificación",
            "Fecha",
            "Retroalimentación",
            {
                type: "Certámenes",
                evaluations: [
                    ["C1", 49, "29-09-2023 15:50", "(...)"],
                    ["C2", "-", "24-11-2023 15:50", "(...)"],
                ],
            },
            {
                type: "Proyecto",
                evaluations: [
					["Informe 1", 40, "15-09-2023 15:50", "(...)"]

				],
            },
			{
				type: "Tareas",
				evaluations: [
					["T1: Facilidad de Uso", 85, "", "(...)"],
					["T2: Personas", 85, "", "(...)"],
					["T4: Metas, Funciones e Hipotesis", 38, "", "(...)"],
					["T5: Pautas Web y Test con usuarios", 88, "", "(...)"],
					["T6: Test de prototipo (P201)", 80, "08-09-2023 23:59", "(...)"],
					["T7: Entrega Menú CLC (P201)", 58, "06-10-2023 23:59", "(...)"],
					["Tarea 8 (P201) - 22 octubre", "-", "22-10-2023 23:59", "(...)"]
				],
			},
        ],
    },
];

export default CoursePage;