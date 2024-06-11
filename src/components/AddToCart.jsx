/* eslint-disable react/prop-types */
import { useContext } from "react";
import { ListCartContext } from "./CartContext";
import ItemCount from "./ItemCount";

const AddToCart = ({ id, stock }) => {
    const { agregar } = useContext(ListCartContext);

    const handleAddToCart = (quantity) => {
        if (quantity > 0 && quantity <= stock) {
            agregar(id, quantity);
        } else if (quantity > stock) {
            alert(`No puede agregar más de ${stock} productos`);
        } else {
            alert("Debe seleccionar al menos 1 producto");
        }
    };

    return (
        <div>
            <ItemCount onAdd={handleAddToCart} stock={stock} />
        </div>
    );
};

export default AddToCart;