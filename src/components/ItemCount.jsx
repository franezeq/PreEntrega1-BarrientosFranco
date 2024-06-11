/* eslint-disable react/prop-types */
import { useState } from "react";
import "./ItemCount.css";

export default function ItemCount({ onAdd, stock }) {
    const [cont, setCont] = useState(0);

    const handleInc = () => {
        if (cont < stock) {
            setCont(cont + 1);
        }
    };

    const handleDec = () => {
        if (cont > 0) {
            setCont(cont - 1);
        }
    };

    const handleAdd = () => {
        onAdd(cont);
    };

    return (
        <>
            <section className="SeccionContador">
                <button onClick={handleDec} className="BotonContador">-</button>
                <p className="TextoContador">{cont}</p>
                <button onClick={handleInc} className="BotonContador">+</button>
            </section>
            <button onClick={handleAdd} className="BotonAgregar">Agregar</button>
            <p className="StockDisponible">Stock disponible: {stock}</p>
        </>
    );
}
