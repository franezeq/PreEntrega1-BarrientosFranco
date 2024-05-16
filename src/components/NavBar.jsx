import { Link } from 'react-router-dom';
import './NavBar.css';
import Boton from './Boton'
import CartWidget from './CartWidget';



export default function NavBarComponent() {
    return (
        <>
            <nav className='nav'>
                <li><Link to={"/"}><Boton nombre="Tienda"/></Link></li>
                <li><Link to={"/about"}><Boton nombre="Quienes somos"/></Link></li>
                <li><Link to={"/"}><img src="../src/assets/logopng.png" alt="" className='Logo'/></Link></li>
                <li><Link to={"/contact"}><Boton nombre="Contacto"/></Link></li>
                <li><Link to={"/cart"}><CartWidget/></Link></li>
            </nav>

        </>
    );
}