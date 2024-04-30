import './NavBar.css';
import Boton from './Boton'
import CartWidget from './CartWidget';


export default function Barra() {
    return (
        <>
            <nav className='nav'>
                <Boton nombre="Tienda" />
                <Boton nombre="Quienes somos" />
                <img src="../src/assets/logopng.png" alt="" className='Logo' />
                <Boton nombre="Contacto" />
                <CartWidget />
            </nav>

        </>
    );
}