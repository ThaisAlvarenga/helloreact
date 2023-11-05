// Este componente lo escribí yo

// PASO 1: escribe rfc para que VS te de la estructura del componente
// PADO 2: agrega ,{useState} al import despues de React
import React,{useState} from 'react'

export default function Micomponent() {
  // propiedad asociada con este cambio de estado
    // text seria la variable y setText lo que le sucede en el event
    const [text, setText] = useState()
    //updatedText es la variable
    const [updatedText, setUpdated] = useState()
    //Paso 3: escribe enf para una funcion de flecha
    // funcion que asigna valor a text basado en el input
    const textOnChange = (event) => {
        setText(event.target.value)
    }
    //funcion que asigna el valor de text a variable updatedText cuando se presiona el botón
    const buttonOnClick = () => {
        setUpdated(text)
    }

    return (
    <div>Mi componente
        <br></br>
        <input type="text" value={text} onChange={textOnChange}/>
        <br></br>
        <button onClick={buttonOnClick}>Actualizar</button>

        <p>Texto en input: {text} </p>
        <p>Texto actualizado: {updatedText}</p>
    </div>
    )
}
