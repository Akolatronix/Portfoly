'use client';

import { useEffect, useState } from 'react';
import styles from '../../public/styles/form.module.css';

export default function Contact() {
        const [isMounted, setIsMounted] = useState(false);
        useEffect(() => {
            setIsMounted(true);
        }, []);      
    return (
        <div className={styles.container}>
            <form className={`${styles.form} ${isMounted ? styles.visible : ''}`}>
                <h1>Formulario de Contacto</h1>
                <div className={styles.inputGroup}>
                    <input className={styles.input} type="text" id="name" name="name" placeholder='nombre' required />
                    <input className={styles.input} type="tel" id="email" name="email" placeholder='Apellido' required />
                </div>
                <div className={styles.inputGroup}>
                    <input className={styles.input} type="text" id="name" name="name" placeholder='Telefono' required />
                </div>
                <div className={styles.inputGroup}>
                    <input className={styles.input} type="email" id="name" name="name" placeholder='Correo' required />
                </div>
                <div className={styles.inputGroup}>
                    <textarea className={styles.input} id="message" name="message" placeholder='Tu mensaje' required></textarea>
                </div>
                <div className={styles.inputButton}>
                    <button className={styles.button} type="submit">Enviar</button>
                </div>
            </form>
        </div>
    )
}