import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCodeBranch, faCodeCommit,
  faCodeCompare, faCodeFork,
  faCodeMerge,
  faCodePullRequest
} from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

const Timeline = () => {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Experiencia laboral</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="2022 - actualidad"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faCodeMerge} />}
          >
            <h3 className="vertical-timeline-element-title">Full Stack Developer</h3>
            <h4 className="vertical-timeline-element-subtitle">MRM McCann</h4>
            <p>
              Desarrollo de formularios para GM LATAM.
              <br/>
              Desarrollo de Web Page autoadministrable para Coca Cola Arg.
              <br/>
              Sistema autoadministrable para vendedores de concesionarias Chevrolet Brasil.
              <br/>
              Rediseño y armado de web para Avalian Argentina.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2023 - 2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faCodeCompare} />}
          >
            <h3 className="vertical-timeline-element-title">Full Stack Developer</h3>
            <h4 className="vertical-timeline-element-subtitle">Andromeda LATAM</h4>
            <p>
              Migración tecnológica para Correo Argentino, Proyecto "Mi Correo".
              <br/>
              Creación de sitio de juegos online “Niza”.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2022 - 2023"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faCodePullRequest} />}
          >
            <h3 className="vertical-timeline-element-title">Full Stack Developer</h3>
            <h4 className="vertical-timeline-element-subtitle">Kineo Latam</h4>
            <p>
              Adaptación de sistemas LMS “Totara” basados en Moodle
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2021 - 2022"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faCodeBranch} />}
          >
            <h3 className="vertical-timeline-element-title">Project Manager & Teach Lead Developer</h3>
            <h4 className="vertical-timeline-element-subtitle">Tecnología y Desarrollo Informático (TDI)</h4>
            <p>
              Administración y gestión del equipo a cargo del desarrollo del sistema tributario para la Agencia Tributaria Misiones (ATM).
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2018 - 2021"
              iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
              icon={<FontAwesomeIcon icon={faCodeFork} />}
          >
            <h3 className="vertical-timeline-element-title">Analista & Full Stack Developer</h3>
            <h4 className="vertical-timeline-element-subtitle">Tecnología y Desarrollo Informático (TDI)</h4>
            <p>
              Desarrollo de sistema tributario para la provincia de Misiones.
              <br/>
              Análisis y desarrollo de sistema tributario para municipios de la provincia de Santa Cruz.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2017 - 2018"
              iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
              icon={<FontAwesomeIcon icon={faCodeCommit} />}
          >
            <h3 className="vertical-timeline-element-title">Web Developer</h3>
            <h4 className="vertical-timeline-element-subtitle">Instituto Privado de Estudios Superiores de Misiones (IPESMi)</h4>
            <p>
              Desarrollo de sistema de alumnado para el nivel terciario.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
