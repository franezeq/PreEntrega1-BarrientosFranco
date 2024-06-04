/* eslint-disable react/prop-types */
import { useRef } from "react";
import { useState } from "react";
import "./ItemCount.css"
import AddToCart from "./AddToCart";

export default function ItemCount(props) {

    const [cont, setCont] = useState(0);
    const clicks = useRef(0);


    const handleInc = () => {
        setCont(cont + 1);
        clicks.current++;

    };

    const handleDec = () => {
        setCont(cont - 1);
        clicks.current++;
    }

    return (
        <>
            <section className="SeccionContador">
                <button onClick={handleDec} className="BotonContador">-</button>
                <p className="TextoContador">{cont}</p>
                <button onClick={handleInc} className="BotonContador">+</button>
            </section>
            <AddToCart id={props.id} key={props.id}/>


        </>
    )
}