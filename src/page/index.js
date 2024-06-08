import style from '../../public/styles/index.module.css';
export default function Index() {
    return (
        <div className={style.container}>
            <div className={style.background}>
                <div className={style.backgroundColor}>
                <div className={style.txtContainer}>
                    <h1>Soy Roberto Gallardo Soto</h1>
                    <div>
                        <h2>Desarrollador Full Stack</h2>
                        <h4>Esta posición me ha permitido combinar mis habilidades en el diseño web y la programación para crear soluciones integrales.</h4>

                    </div>
                    <div className={style.btnIndex}>
                        <button>Descargar CV</button>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
}  