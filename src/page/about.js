import style from '../../public/styles/about.module.css';
export default function About(){
    return (
        <div className={style.container}>
            <div className={style.subcontainer}>
                <div className={style.column}>
                    <div className={style.card}>
                        <h4>UX/UI diseñador</h4>
                        <p>¿Qué tal si le añadimos un toque de color a ese diseño para que destaque aún más?</p>
                    </div>
                    <div className={style.card}>
                        <h4>Diseñador web</h4>
                        <p>¿Qué te parece si utilizamos colores vibrantes y llamativos para darle personalidad al sitio?</p>
                    </div>
                    <div className={style.card}>
                        <h4>Programador de Aplicaciones mobiles</h4>
                        <p>¡Las posibilidades son infinitas! ¿Tienes alguna idea emocionante en mente para tu próxima app?</p>
                    </div>
                </div>
                <div className={style.aboutme}>
                    <h4>Introduccion</h4>
                    <h5>Hola soy Roberto Gallardo</h5>
                    <h6>No importa que se vea bien, si no cumple su función, ¿verdad?</h6>
                    <p>Me considero un amante de los desafíos que busca constantemente superar mis propias habilidades. Cada proyecto es una oportunidad para aprender algo nuevo y mejorar mis capacidades. ¡El aprendizaje continuo es la clave de mi crecimiento en esta área tan emocionante!</p>
                </div>
            </div>
        </div>
    )
}