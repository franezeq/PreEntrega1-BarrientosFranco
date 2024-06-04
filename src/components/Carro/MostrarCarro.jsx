import { useContext } from "react";
import ItemCarrito from "./ItemCarrito";
import "./MostrarCarro.css"
import { ListCartContext } from "../CartContext";
const MostrarCarro = () => {
    const {listCart, Clear} = useContext(ListCartContext)
    return (
        <div className="Carro">
            <div className="Cerrar">
                <button className="CerrarBoton">
                  X
                </button>
            </div>
            <div className="CarroContenedor">
                {
                (listCart.length === 0) ? <span className="CarroVacio">Tu carro esta vacio</span> 
                : listCart.map(product =>(
                    <ItemCarrito
                    key={product.id}
                    id={product.id}
                    titulo={product.titulo}
                    imagen={product.img}
                    cantidad={product.cantidad}
                    precio={product.precio}
                    />

                ))
                }

            </div>
            <div className="Finalizar">
                <button className="FinalizarBoton">Finalizar</button>
                <button className="Clear" onClick={Clear}>Limpiar</button>
            </div>
        </div>
    )
}
export default MostrarCarro;