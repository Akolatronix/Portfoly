"use client";
import { useState, useEffect } from 'react';
import { library } from '../libs/fontawesome.js'; // Importa la biblioteca de Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons'; // Importa el icono faCoffee
library.add(faCoffee);
import style from '../../public/styles/navbar.module.css';
export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    /* ESTE USEEFFECT se encarga de cambiar mi estado al realizar scroll */
    useEffect(() => {
        const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 50) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
    }, []);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    /*El navbar se encontraria en Z-INDEX: 3 */
    return (
        <div className={`${style.navbar} ${scrolled ? style.scrolled : ''}`}>
            <div>
                <h1><span>R</span>oberto<span>Desarrollador Full-Stack</span></h1>
            </div>
                
            <div className={style.menu}>
                <button onClick={toggleMenu}> <FontAwesomeIcon icon={faCoffee} />
                </button>
                <div className={`${style.menuCollapse} ${menuOpen ? style.open : ''}`}>
                    <ul>
                        <li><a>Inicio</a></li>
                        <li><a>Sobre mi</a></li>
                        <li><a>Servicios</a></li>
                        <li><a>Contratame</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}  