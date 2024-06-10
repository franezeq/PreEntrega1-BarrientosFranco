// AddToCart.js
/* eslint-disable react/prop-types */
import { useContext } from "react";
import { ListCartContext } from "./CartContext";
import ItemCount from "./ItemCount"; // Importar el componente ItemCount

const AddToCart = ({ id }) => {
    const { agregar } = useContext(ListCartContext);

    const handleClick = (quantity) => { // Modificar la función para aceptar una cantidad
        agregar(id, quantity); // Llamar a la función agregar con el id y la cantidad
    };

    return (
        <div>
            <ItemCount onIncrement={() => handleClick(1)} onDecrement={() => handleClick(-1)} />
            <button onClick={() => handleClick(1)}>Agregar al carrito</button>
        </div>
    );
};

export default AddToCart;