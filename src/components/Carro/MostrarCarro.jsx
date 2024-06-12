import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import ItemCarrito from "./ItemCarrito";
import "./MostrarCarro.css";
import { ListCartContext } from "../CartContext";
import { displayCarro } from "../ContextCarro";

const MostrarCarro = () => {
    const { Show, setShow } = useContext(displayCarro);
    const { listCart, Clear } = useContext(ListCartContext);
    const navigate = useNavigate();

    const style = {
        display: Show,
    };

    const cerrarCarro = () => {
        setShow((Show === "none") ? "flex" : "none");
    };

    const total = listCart.reduce((acc, product) => acc + (product.cantidad * product.precio), 0);

    const handleFinalizar = () => {
        if (listCart.length > 0) {
            navigate("/checkout");
        }
    };

    return (
        <div className="Carro" style={style}>
            <div className="Cerrar">
                <button className="CerrarBoton" onClick={cerrarCarro}>
                    X
                </button>
            </div>
            <div className="CarroContenedor">
                {listCart.length === 0 ? (
                    <span className="CarroVacio">Tu carro está vacío</span>
                ) : (
                    listCart.map(product => (
                        <ItemCarrito
                            key={product.id}
                            id={product.id}
                            titulo={product.titulo}
                            imagen={product.img}
                            cantidad={product.cantidad}
                            precio={product.precio}
                            stock={product.stock}
                        />
                    ))
                )}
                <div>Total: ${total}</div>
            </div>
            <div className="Finalizar">
                <button
                    className="FinalizarBoton"
                    onClick={handleFinalizar}
                    disabled={listCart.length === 0}
                >
                    Finalizar
                </button>
                <button className="Clear" onClick={Clear}>Limpiar</button>
            </div>
        </div>
    );
};

export default MostrarCarro;
