import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "../header/Header.module.css";

const Encabezado = () => {
  const [partidos, setPartidos] = useState([]);

  useEffect(() => {
    // Realizar la solicitud a la API al montar el componente
    fetch("https://proyect-fba.vercel.app/api/")
      .then((response) => response.json())
      .then((data) => setPartidos(data))
      .catch((error) => console.error("Error al obtener partidos:", error));
  }, []);

  return (
    <div className={styles.row}>
      {partidos.map((partido) => (
        <Link key={partido.id} className={styles.partidoBarra}>
          <div className={styles.card}>
            <p>
              {partido.equipos_locales.nom_equipo_local} {partido.res_local}
            </p>
            <p>
              {partido.equipos_visitantes.nom_equipo_visitante} {partido.res_visita}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Encabezado;


// import { BDPartidos } from "./partidos";
// import { BDImages } from "../helpers/baseImages";
// import {Link, useLocation} from 'react-router-dom'
// import styles from "../header/Header.module.css"


// const findImageURL = (teamName) => {
//   const team = BDImages.find((item) => item.equipo === teamName);
//   return team ? team.imagen : ''; 
// };

// const Encabezado = () => {

//   return (
//     <div className={styles.row}>
//       {BDPartidos.map((partido) => (
//         <Link className={styles.partidoBarra}>
//           <div key={partido.P} className={styles.card}>
//             <p>
//             <img className={styles.ima} src={findImageURL(partido.local)} alt={partido.local} />  <span style={{ marginRight: '10px',display: 'inline-block', width:'133px'}}>{partido.local}</span><span style={{ verticalAlign: 'top'}}>{partido.ResLocal}</span> {partido.live ? <img className={styles.live} src="https://i.imgur.com/eT5tuUt.gif" alt="Live" /> : ""}
//             </p>
//             <p>
//             <img className={styles.ima} src={findImageURL(partido.visita)} alt={partido.visita} />  <span style={{marginRight: '10px',display: 'inline-block', width:'133px' }}>{partido.visita}</span><span style={{verticalAlign: 'top' }}>{partido.ResVisita}</span> 
//             </p>
//             <p></p>
//           </div>
//           </Link>
//       ))}
//     </div>
//   );
// };

// export default Encabezado;
