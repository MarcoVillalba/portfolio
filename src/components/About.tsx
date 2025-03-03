import React from "react";
import '../assets/styles/About.scss';

const About = () => {
    return(
    <div className="about-container" id="about">
        <h1>Acerca de Mi</h1>
        <div className="me">
            <p>Hola! me presento, mi nombre es Marco Villalba, soy <strong>Analista de Sistemas</strong>, completé mis estudios en el año 2018 y desde entonces me dedico al desarrollo de sistemas web basado en tecnologías modernas.<br/>
                Tengo manejo y conocimiento del idioma inglés al igual que el español. <br/>
                Me gusta investigar y aprender nuevas cosas sobre tecnología para aplicarla a mis proyectos y las empresas para las cuales trabajé.
            </p>
        </div>
        <div className="me-skills">
            <p>
                <strong>
                    He contruído una gran diversidad de aplicaciones web de principio a fin utilizando una variedad de tecnologías modernas. Me especializo en el desarrollo tanto frontend como backend con un amplio conocimiento en bases de datos.
                </strong>
            </p>
        </div>
    </div>
    );
}

export default About;
