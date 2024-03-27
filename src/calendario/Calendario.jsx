import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "../header/Header.module.css";

const Calendario = () => {
  const [partidosGeneral, setPartidosGeneral] = useState([]);

  useEffect(() => {
    // Realizar la solicitud a la API al montar el componente
    fetch("https://proyect-fba.vercel.app/api/")
      .then((response) => response.json())
      .then((data) => setPartidosGeneral(data))
      .catch((error) => console.error("Error al obtener partidos:", error));
  }, []);

  return (
    <div className={styles.column}>
    <table>
      <thead>
        <tr>
          <th>Fecha y Hora</th>
          <th>Local</th>
          <th>Resultado</th>
          <th>VS</th>
          <th>Resultado</th>
          <th>Visita</th>
          <th>Estadio</th>
        </tr>
      </thead>
      <tbody>
        {partidosGeneral.map((partido) => (
          <tr key={partido.id}>
            <td>{partido.fecha} {partido.hora}</td>
            <td>{partido.list_locales?.nom_local}</td>
            <td>{partido.res_local}</td>
            <td>-</td>
            <td>{partido.res_visita}</td>
            <td>{partido.list_visita?.nom_visita}</td>
            <td>{partido.estadio}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
};

export default Calendario;

