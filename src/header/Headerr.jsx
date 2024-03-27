// Encabezado.jsx

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "../header/Header.module.css";
import { BDImages } from "../helpers/baseImages";

const Encabezado = () => {
  const [partidos, setPartidos] = useState([]);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    // Realizar la solicitud a la API al montar el componente
    fetch("https://proyect-fba.vercel.app/api/")
      .then((response) => response.json())
      .then((data) => setPartidos(data))
      .catch((error) => console.error("Error al obtener partidos:", error));
  }, []);

  const handleScroll = (direction) => {
    const container = document.getElementById("encabezadoContainer");
    if (container) {
      const newPosition = scrollPosition + (direction === "right" ? 300 : -300);
      container.scrollLeft = newPosition;
      setScrollPosition(newPosition);
    }
  };

  // Función para obtener la URL de la imagen correspondiente al nombre del equipo
  const obtenerImagen = (nombreEquipo) => {
    const equipo = BDImages.find((equipo) => equipo.equipo === nombreEquipo);
    return equipo ? equipo.imagen : null;
  };

  return (
    <div>
    <div className={styles.buttonContainer}>
    <button className={`${styles.navButton} ${styles.leftButton}`} onClick={() => handleScroll("left")}>
      {"<"}
    </button>
    <button className={`${styles.navButton} ${styles.rightButton}`} onClick={() => handleScroll("right")}>
      {">"}
    </button>
  </div>
    <div className={styles.encabezadoContainer} id="encabezadoContainer">
      {partidos.map((partido) => (
        <Link key={partido.id} className={styles.partidoBarra}>
          <div className={styles.card}>
            <table>
              <tbody>
                <tr>
                  <td>
                    <img src={obtenerImagen(partido.list_locales?.nom_local)} alt={partido.list_locales?.nom_local} />
                  </td>
                  <td>
                    {partido.list_locales?.nom_local}
                  </td>
                  <td>
                    {partido.res_local}
                  </td>
                  <td>
                    {partido.live}
                  </td>
                </tr>
                <tr>
                  <td>
                    <img src={obtenerImagen(partido.list_visita?.nom_visita)} alt={partido.list_visita?.nom_visita} />
                  </td>
                  <td>
                    {partido.list_visita?.nom_visita}
                  </td>
                  <td>
                    {partido.res_visita}
                  </td>
                </tr>
                <tr>
                  <td colSpan="3" className={styles.detalle}>
                    {partido.fecha} {partido.hora}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Link>
      ))}
   
    </div>
      <hr className={styles.hr}></hr>
    </div>
  );
};

export default Encabezado;
