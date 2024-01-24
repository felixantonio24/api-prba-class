import { useState, useEffect } from "react";
import axios from "axios";


const Countries = () =>{

    const [contri, setContri]= useState([])


    useEffect( () =>{
                    
        axios
        .get("https://restcountries.com/v3.1/all")
        .then(respuesta => {
            setContri(respuesta.data)

            console.log(respuesta.data)
        })
        .catch(error =>(console.error(error)))


    }, [])


    return (
        <>
     <ul>
  {contri.map((user, index) => (
    <li className="users" key={index}>
      <h3 className="h3_name">{user.name?.official}</h3>
      <h2 className="h2_name">{user.name?.common}</h2>
      {user.demonyms && (
        <p>{user.demonyms?.flag || "Flag not available"}</p>
      )}
    </li>
  ))}
</ul>
 {/*       <ul>
            {
                contri.map(users => (

           hacemos esto parea renderizar las listas q funcionan con la api y q esta pegada en la etiqueta (className) como lo esta users , ponemos un key con un valor unico es decir que no se repita la cual es users, podria ser email o cualquier palabra q no se repita.Si NOS SALE UNDEFINE LUEGO DE HACER SINIGICA QUE DEBMOS QUE PONER EL "?." para que pueda correr. 
            <li className="users" key={users.name}>
                <h3 className="h3_name">{users.name?.official}</h3>
                <h2 className="h2_name">{users.name?.common}</h2>
            </li>
            
            ))}
                </ul>*/}
        </>
    )
}

export default Countries