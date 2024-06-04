import { useContext } from "react";
import { ListCartContext } from "../CartContext";
import "./ItemCarrito.css"

// eslint-disable-next-line react/prop-types
const ItemCarrito = ({ id, titulo, precio, cantidad, imagen, alt }) => {
    const { remove } = useContext(ListCartContext)

    const handleRemove = () => {
        remove(id);
    };
    return (
        <div className="itemCarrito" key={id}>
            <div className="itemCarritoDiv">
                <img src={imagen} alt={alt} className="imgcarrito"></img>
            </div>
            <div className="Cantidad itemCarritoDiv">
                <span className="titulo">{titulo}</span>
                <span className="cantidad">{`Cantidad: ${cantidad}`}</span>

            </div>
            <div className="Precio itemCarritoDiv">
                <span className="SubTotal">Subtotal: </span>
                <span>${cantidad * precio}</span>
            </div>
            <button className="Eliminar itemCarritoDiv" onClick={handleRemove}>
                x
            </button>
        </div>
    )
}
export default ItemCarrito;