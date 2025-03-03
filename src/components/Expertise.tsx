import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faReact, faDocker, faPython, faLaravel} from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "React",
    "Next JS",
    "TypeScript",
    "JavaScript",
    "JQuery",
    "HTML5",
    "CSS3",
    "SASS",
    "Bootstrap",
    "Tailwind"
];

const labelsSecond = [
    "PHP",
    "Laravel",
    "Codeigniter",
    "Moodle",
    "Strapi"
];

const labelsThird = [
    "SQL",
    "SQL Server",
    "PostgreSQL",
    "Oracle",
    "MySql",
    "Git",
    "Docker",
];
export const Expertise = ()=> {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Habilidades</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Frontend</h3>
                    <p>Con un enfoque mobile first y siempre priorizando la experiencia del usuario, llevé adelante el desarrollo de múltiples proyectos de gran escala.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faLaravel} size="3x"/>
                    <h3>Backend</h3>
                    <p>Tengo conocimiento en diversos frameworks de backend especialmente en aquellos basados en PHP.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>Data Base & DevOps</h3>
                    <p>Poseo fuertes conocimentos en bases de datos y PLSQL, para el armado de consultas y procesos almacenados en los motores de DB más populares del mercado. <br/>
                    Además, puedo optimizar aplicaciones, mejorando el versionado y despliegue de las mismas.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;
