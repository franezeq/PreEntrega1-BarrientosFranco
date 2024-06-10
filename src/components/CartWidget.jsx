import './CartWidget.css';
import CartCantidad from "./CartCantidad"
import { useContext } from 'react';
import { displayCarro } from './ContextCarro';
export default function CartWidget() {
    const {Show, setShow} = useContext(displayCarro)

    const verCarro = () => {
        setShow((Show === "none") ? "flex" : "none")
    }


    return (<>
    <div className="carroConContador" onClick={verCarro}>
        <img src="../../src/assets/carrito.png" alt="" className='ImgCarrito' /><CartCantidad/>
        </div>
    </>)
}