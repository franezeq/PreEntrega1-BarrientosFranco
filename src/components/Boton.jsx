/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
import './Boton.css'


export default function Boton({ nombre }) {
    const handleClick = () => {
        console.log('estas en la seccion '+ nombre);

    };
    return( <button onClick={handleClick} className="botones"><p className='TextoBoton'>{nombre}</p></button>)

}