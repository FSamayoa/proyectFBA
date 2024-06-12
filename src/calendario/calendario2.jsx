import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "../calendario/calendar.module.css";

const Calendario = () => {
  const [partidosGeneral, setPartidosGeneral] = useState([]);
  const [filtroLiga, setFiltroLiga] = useState(null);
  const [filtroSemana, setFiltroSemana] = useState(1);
  const [filtroCategoria, setFiltroCategoria] = useState("Intermedia");

  useEffect(() => {
    // Realizar la solicitud a la API al montar el componente
    fetch("https://proyect-fba.vercel.app/api/")
      .then((response) => response.json())
      .then((data) => {
        // Filtrar por liga si hay un filtro seleccionado
        let partidosFiltrados = data.filter(partido => partido.liga === filtroLiga);
        // Filtrar por semana si hay un filtro seleccionado
        if (filtroSemana) {
          partidosFiltrados = partidosFiltrados.filter(partido => partido.semana === filtroSemana);
        }
        // Filtrar por categoría si la liga seleccionada es ONEFA y hay un filtro seleccionado
        if (filtroLiga === 'ONEFA' && filtroCategoria) {
          partidosFiltrados = partidosFiltrados.filter(partido => partido.categoria === filtroCategoria);
        }
        // Ordenar por fecha y luego por hora
        partidosFiltrados.sort((a, b) => {
          // Convertir las fechas al formato "aaaa-mm-dd" para ordenar correctamente
          const fechaA = new Date(a.fecha.split('/').reverse().join('-') + ` ${a.hora}`);
          const fechaB = new Date(b.fecha.split('/').reverse().join('-') + ` ${b.hora}`);
          // Ordena por fecha
          if (fechaA < fechaB) return -1;
          if (fechaA > fechaB) return 1;
          // Si las fechas son iguales, ordena por hora
          const horaA = parseInt(a.hora.split(':')[0]);
          const horaB = parseInt(b.hora.split(':')[0]);
          return horaA - horaB;
        });
        setPartidosGeneral(partidosFiltrados);
      })
      .catch((error) => console.error("Error al obtener partidos:", error));
  }, [filtroLiga, filtroSemana, filtroCategoria]);

  const handleFiltrarPorLiga = (liga) => {
    setFiltroLiga(liga);
    // Por defecto, selecciona la categoría "Intermedia" para ONEFA
    if (liga === "Onefa") {
      setFiltroCategoria("Intermedia");
    } else {
      setFiltroCategoria(null); // Reinicia el filtro de categoría si no es ONEFA
    }
    // Reinicia el filtro de semana
    setFiltroSemana(null);
  };

  const handleFiltrarPorSemana = (semana) => {
    setFiltroSemana(semana);
  };

  const handleFiltrarPorCategoria = (categoria) => {
    setFiltroCategoria(categoria);
  };

  return (
    <div className={styles.column}>
      {/* Botones de filtro por liga */}
      <div>
        <button onClick={() => handleFiltrarPorLiga("Onefa")}>ONEFA</button>
        <button onClick={() => handleFiltrarPorLiga("LFA")}>LFA</button>
        <button onClick={() => handleFiltrarPorLiga("IFA")}>IFA</button>
        <button onClick={() => handleFiltrarPorLiga("NFL")}>NFL</button>
      </div>

      {/* Etiqueta para mostrar la semana */}
      {filtroSemana && <p>Semana {filtroSemana}</p>}

      {/* Botones de filtro por semana */}
      <div>
        {/* Botón para ver la semana anterior */}
        <button onClick={() => handleFiltrarPorSemana(filtroSemana - 1)}>Semana Anterior</button>
        {/* Botón para ver la semana siguiente */}
        <button onClick={() => handleFiltrarPorSemana(filtroSemana + 1)}>Semana Siguiente</button>
      </div>

      {/* Botones de filtro por categoría (solo si la liga seleccionada es ONEFA) */}
      {filtroLiga === "Onefa" && (
        <div>
          <button onClick={() => handleFiltrarPorCategoria("Intermedia")}>Intermedia</button>
          <button onClick={() => handleFiltrarPorCategoria("Liga Mayor")}>Liga Mayor</button>
        </div>
      )}

      {/* Tabla para mostrar los partidos */}
      <table className={styles.tableCalendar}>
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
            <tr key={partido.id} className={styles.rowCalendar}>
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
