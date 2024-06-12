  import React, { useState, useEffect } from "react";
  import { Link } from "react-router-dom";
  import styles from "../calendario/calendar.module.css";

  const Calendario = () => {
    const urlApi = "https://proyect-fba.vercel.app/api/";

    const [partidos,setPartidos] = useState ([]);

    async function consulta (){
      try{
      const response = await fetch(urlApi);
      const calendar = await response.json()
      console.log("este es el calendar ",calendar);
      setPartidos(calendar);
      console.log("hay muchos partidos en ",partidos);

      }
      catch (error){
        console.log("Hay un error ", error);
      }
    }

    useEffect(()=>{
      consulta();
      console.log("aqui estoy");
    },[])

    return (
      <div>
      <h1>hey</h1>
      <span>{partidos}</span>
      </div>
    )
  };

  export default Calendario;
