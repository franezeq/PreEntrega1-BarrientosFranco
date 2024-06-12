/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { ListCartContext } from "./CartContext";
import "./AddToCart.css"

export default function AddToCart({ id, stock }) {
    const { agregar } = useContext(ListCartContext);
    const [quantity, setQuantity] = useState(1);

    const handleAddToCart = () => {
        agregar(id, quantity);
    };

    return (
        <div className="AddToCart">
            <input
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value))}
                min="1"
                max={stock}
                className="QuantityInput"
            />
            <button onClick={handleAddToCart} className="AddButton">Agregar</button>
        </div>
    );
}
