import React, { useState, useEffect } from 'react';
import {faArrowUp} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.pageYOffset > 300); // Mostrar el botón si el scroll supera 300px
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll); // Limpieza del evento
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    // Devuelve null si el botón no debe ser visible
    return isVisible ? (
        <button
            onClick={scrollToTop}
            style={{
                position: 'fixed',
                bottom: '20px',
                right: '20px',
                padding: '10px 15px',
                fontSize: '15px',
                backgroundColor: '#5000ca',
                color: 'rgb(39, 40, 34)',
                border: 'none',
                borderRadius: '25px',
                cursor: 'pointer',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            }}
        >
            <FontAwesomeIcon icon={faArrowUp} />
        </button>
    ) : null;
};

export default BackToTop;
