// eslint-disable-next-line react/prop-types
const ItemCarrito = ({titulo, precio,cantidad, img, alt}) => {
    return (
        <div className="itemCarrito">
            <div>
                <img src={img} alt={alt} />
            </div>
            <div className="Cantidad">
                <span className="titulo">{titulo}</span>
                <span className="cantidad">{`Cantidad: ${cantidad}`}</span>

            </div>
            <div className="Precio">
                <span className="SubTotal">Subtotal: </span>
                <span>${cantidad * precio}</span>
            </div>
            <button className="Eliminar">
                X
            </button>
        </div>
    )
}
export default ItemCarrito;