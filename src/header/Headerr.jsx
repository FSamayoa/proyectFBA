import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "../header/Header.module.css";
import { BDImages } from "../helpers/baseImages";

const Encabezado = () => {
  const [partidos, setPartidos] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(26); // Posición inicial

  useEffect(() => {
    const currentDate = new Date();
    // Realizar la solicitud a la API al montar el componente
    fetch("https://proyect-fba.vercel.app/api/")
      .then((response) => response.json())
      .then((data) => {
        // Ordenar los partidos por fecha y luego por hora
        const sortedPartidos = data.sort((a, b) => {
          // Parsear las fechas
          const dateAComponents = a.fecha.split("/");
          const dateBComponents = b.fecha.split("/");
          const timeAComponents = a.hora.split(":");
          const timeBComponents = b.hora.split(":");
          const dateA = new Date(
            `${dateAComponents[1]}/${dateAComponents[0]}/${dateAComponents[2]}`
          );
          const dateB = new Date(
            `${dateBComponents[1]}/${dateBComponents[0]}/${dateBComponents[2]}`
          );

          // Comparar por fecha
          if (dateA < dateB) return -1;
          if (dateA > dateB) return 1;

          // Si las fechas son iguales, comparar por hora
          if (parseInt(timeAComponents[0]) < parseInt(timeBComponents[0]))
            return -1;
          if (parseInt(timeAComponents[0]) > parseInt(timeBComponents[0]))
            return 1;
          if (parseInt(timeAComponents[1]) < parseInt(timeBComponents[1]))
            return -1;
          if (parseInt(timeAComponents[1]) > parseInt(timeBComponents[1]))
            return 1;

          return 0;
        });
        // Buscar el índice del partido con la fecha más grande que tenga live2 igual a 3
        let maxDateIndex = -1;
        for (let i = sortedPartidos.length - 1; i >= 0; i--) {
          if (sortedPartidos[i].live2 === 3) {
            maxDateIndex = i + 3;
            break;
          }
        }

        // Establecer currentIndex en el índice encontrado o en 0 si no se encuentra ninguno
        setCurrentIndex(maxDateIndex !== -1 ? maxDateIndex : 0);

        setPartidos(sortedPartidos);
      })
      .catch((error) => console.error("Error al obtener partidos:", error));
  }, []);

  const handleScroll = (direction) => {
    const container = document.getElementById("encabezadoContainer");
    if (container) {
      const scrollAmount = 300; // Cantidad de píxeles a desplazar
      const newIndex =
        direction === "right" ? currentIndex + 1 : currentIndex - 1;
      setCurrentIndex(Math.max(1, Math.min(newIndex, partidos.length))); // Mantén el índice dentro del rango válido
      container.scrollBy({
        left: direction === "right" ? scrollAmount : -scrollAmount,
        behavior: "smooth", // Hace que el desplazamiento sea suave
      });
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
        <button
          className={`${styles.navButton} ${styles.leftButton}`}
          onClick={() => handleScroll("left")}
        >
          {"<"}
        </button>
        <button
          className={`${styles.navButton} ${styles.rightButton}`}
          onClick={() => handleScroll("right")}
        >
          {">"}
        </button>
      </div>
      <div className={styles.encabezadoContainer} id="encabezadoContainer">
        {partidos.map((partido, index) => {
          const visible =
            index >= currentIndex - 3 && index <= currentIndex + 3; // Mostrar solo las cards dentro del rango visible
          return (
            visible && (
              <Link key={partido.id} className={styles.partidoBarra}>
                <div className={styles.card}>
                  <table>
                    <tbody>
                      <tr>
                        <td colSpan="3" className={styles.detalles}>
                          {partido.liga} - {partido.categoria} - {partido.fase}
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <img
                            src={obtenerImagen(partido.list_locales?.nom_local)}
                            alt={partido.list_locales?.nom_local}
                          />
                        </td>
                        <td>{partido.list_locales?.nom_local}</td>
                        <td>{partido.res_local}</td>
                        <td>
                          {partido.live2 === 1 ? null : partido.live2 === 2 ? (
                            <img
                              src="https://i.imgur.com/eT5tuUt.gif"
                              alt="Live"
                            />
                          ) : (
                            "Final"
                          )}
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <img
                            src={obtenerImagen(partido.list_visita?.nom_visita)}
                            alt={partido.list_visita?.nom_visita}
                          />
                        </td>
                        <td>{partido.list_visita?.nom_visita}</td>
                        <td>{partido.res_visita}</td>
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
            )
          );
        })}
      </div>
      <hr className={styles.hr}></hr>
    </div>
  );
};

export default Encabezado;
