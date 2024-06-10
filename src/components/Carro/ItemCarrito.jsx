/* eslint-disable react/prop-types */
import { useContext } from "react";
import { ListCartContext } from "../CartContext";
import "./ItemCarrito.css"

const ItemCarrito = ({ id, titulo, precio, cantidad, imagen, alt }) => {
    const { remove } = useContext(ListCartContext);

    const handleRemove = () => {
        remove(id);
    };

    const subtotal = cantidad * precio;

    return (
        <div className="itemCarrito" key={id}>
            <div className="itemCarritoDiv">
                <img src={imagen} alt={alt} className="imgcarrito" />
            </div>
            <div className="Cantidad itemCarritoDiv">
                <span className="titulo">{titulo}</span>
                <span className="cantidad">{`Cantidad: ${cantidad}`}</span>
            </div>
            <div className="Precio itemCarritoDiv">
                <span className="SubTotal">Subtotal: </span>
                <span>${subtotal}</span>
            </div>
            <button className="Eliminar itemCarritoDiv" onClick={handleRemove}>
                x
            </button>
        </div>
    );
};

export default ItemCarrito;