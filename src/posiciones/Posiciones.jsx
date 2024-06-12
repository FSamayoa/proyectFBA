import { useState, useEffect } from "react";

const Posiciones = ()=>{
    const [vat, setVat] = useState (0);
    const [comments,setComments] = useState([]);


    const handleClick = function (){
        console.log("hey mi primer boton bien hecho")
        setVat(vat + 5);
  
    };
    const handleClick2 = function (){
        console.log("este es el boton 2")

    };

    useEffect(()=>{
        console.log("se monto el componente");
        setVat(-15)
        apis();
    },[])

   async function apis (){
    try{
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data);
    setComments(data);
    }
    catch (error){
        console.log(`error de: ${error}`);
    }
   }

    return(
        <div>
            prueba de posiciones

            <button id="but" onClick={handleClick}>hola</button>
            <button id="but2" onClick={handleClick2}>mostrar comentarios</button>
            <p>aqui hay texto y el valor de vat es {vat}</p>
            <ul>
                {comments.map(comment => {
                    return(
                    <li key={comment.id}>
                        <p>Email: {comment.email}</p>
                        <p>Nombre: {comment.name}</p>
                        <p>Comentario: {comment.website}</p>
                        <p>Id: {comment.phone}</p>
                    </li>
                    );
                })}
            </ul>
        </div>
    )
}

export default Posiciones