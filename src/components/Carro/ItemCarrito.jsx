import { useContext } from "react";
import { ListCartContext } from "../CartContext";

// eslint-disable-next-line react/prop-types
const ItemCarrito = ({id,titulo, precio,cantidad, img, alt}) => {
    const {remove}= useContext(ListCartContext)
    return (
        <div className="itemCarrito" key={id}>
            <div>
                <img src={img} alt={alt} />
            </div>
            <div className="Cantidad">
                <span className="titulo">{titulo}</span>
                <span className="cantidad">{`Cantidad: ${cantidad}`}</span>

            </div>
            <div className="Precio">
                <span className="SubTotal">Subtotal: </span>
                <span>${cantidad * precio}</span>
            </div>
            <button className="Eliminar" onClick={()=> remove(id)}>
                X
            </button>
        </div>
    )
}
export default ItemCarrito;