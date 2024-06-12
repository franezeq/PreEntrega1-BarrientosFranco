import './CartWidget.css';
import CartCantidad from "./CartCantidad"
import { useContext } from 'react';
import { displayCarro } from './ContextCarro';
import carrito from "/carrito.png"
export default function CartWidget() {
    const { Show, setShow } = useContext(displayCarro)

    const verCarro = () => {
        setShow((Show === "none") ? "flex" : "none")
    }


    return (<>
        <div className="carroConContador" onClick={verCarro}>
            <img src={carrito} alt="" className='ImgCarrito' /><CartCantidad />
        </div>
    </>)
}