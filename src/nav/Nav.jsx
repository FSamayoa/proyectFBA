import {Link, useLocation} from 'react-router-dom'
import styles from "../nav/nav.module.css"

const Nav = () => {
    const location = useLocation();
  return (
    <div>
        {/* <div className={styles.logoContainer}>
        <Link to="/LigaMayorOnefa" className={`${styles.navigation} ${location.pathname === '/LigaMayorOnefa' ? styles.selected : ''}`}>Liga Mayor Onefa</Link>
        <Link to="/IntermediaOnefa" className={`${styles.navigation} ${location.pathname === '/IntermediaOnefa' ? styles.selected : ''}`}>Intermedia Onefa</Link>
        <Link to="/lfa" className={`${styles.navigation} ${location.pathname === '/lfa' ? styles.selected : ''}`}>LFA</Link>
        <Link to="/ifa" className={`${styles.navigation} ${location.pathname === '/ifa' ? styles.selected : ''}`}>IFA</Link>
        <Link to="/nfl" className={`${styles.navigation} ${location.pathname === '/nfl' ? styles.selected : ''}`}>NFL</Link>
        </div> */}

    <div className={styles.navContainer}>
    <div className={styles.linksContainer}>
    <div className={styles.logoContainer}>
        <Link to="/home" ><img className={styles.image} src="https://i.imgur.com/e3YODr9.png"></img></Link>
        </div>
        {/* <Link to="/resultados" className={`${styles.navigation} ${location.pathname === '/resultados' ? styles.selected : ''}`}>Resultados</Link> */}
        <Link to="/calendario" className={`${styles.navigation} ${location.pathname === '/calendario' ? styles.selected : ''}`}><span>Calendario</span></Link>
        <Link to="/posiciones" className={`${styles.navigation} ${location.pathname === '/posiciones' ? styles.selected : ''}`}><span>Posiciones</span></Link>
        <Link to="/estadisticas" className={`${styles.navigation} ${location.pathname === '/estadisticas' ? styles.selected : ''}`}><span>Estadisticas</span></Link>
        <Link to="/equipos" className={`${styles.navigation} ${location.pathname === '/equipos' ? styles.selected : ''}`}><span>Equipos</span></Link>
        <Link to="/videos" className={`${styles.navigation} ${location.pathname === '/videos' ? styles.selected : ''}`}><span>Videos</span></Link>
        {/* <Link to="/comunidad" className={`${styles.navigation} ${location.pathname === '/comunidad' ? styles.selected : ''}`}><span>Comunidad</span></Link> */}
        <Link to="/contacto" className={`${styles.navigation} ${location.pathname === '/contacto' ? styles.selected : ''}`}><span>Contacto</span></Link>
        {/* <Link to="/historia" className={`${styles.navigation} ${location.pathname === '/historia' ? styles.selected : ''}`}><span>Historia</span></Link> */}
        {/* <Link to="/tienda" className={`${styles.navigation} ${location.pathname === '/tienda' ? styles.selected : ''}`}><span>Tienda</span></Link> */}
        {/* <Link to="/aprende" className={`${styles.navigation} ${location.pathname === '/aprende' ? styles.selected : ''}`}><span>Aprende de FBA</span></Link> */}
        <Link to="/aprende" className={`${styles.navigation} ${location.pathname === '/aprende' ? styles.selected : ''}`}><span>Iniciar sesion</span></Link>
     
    </div>
    </div>
    </div>
  );
};

export default Nav;
