import './CartWidget.css';
import CartCantidad from "./CartCantidad"
export default function CartWidget() {
    return (<>
    <div className="carroConContador"><img src="../../src/assets/carrito.png" alt="" className='ImgCarrito' /><CartCantidad/></div>
    </>)
}