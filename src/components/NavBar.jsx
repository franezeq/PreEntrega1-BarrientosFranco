import { Link } from 'react-router-dom';
import './NavBar.css';
import Boton from './Boton'
import CartWidget from './CartWidget';
import MostrarCarro from './Carro/MostrarCarro';
import ContextCarro from './ContextCarro';
import logo from "/logopng.png"



export default function NavBarComponent() {
    return (
        <>
            <ContextCarro>
                <nav className='nav'>
                    <li><Link to={"/"}><Boton nombre="Tienda" /></Link></li>
                    <li><Link to={"/about"}><Boton nombre="Quienes somos" /></Link></li>
                    <li><Link to={"/"}><img src={logo} alt="" className='Logo' /></Link></li>
                    <li><Link to={"/contact"}><Boton nombre="Contacto" /></Link></li>
                    <li><CartWidget /></li>

                </nav>
                <MostrarCarro />
            </ContextCarro>


        </>
    );
}