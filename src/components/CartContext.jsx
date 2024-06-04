/* eslint-disable react/prop-types */
import { createContext, useState } from "react"
import { products } from "./AsyncMok"

export const ListCartContext = createContext(null)
const CartContext = ({ children }) => {
    const [listCart, setListCart] = useState([])
    const agregar = (id) => {
        const agregarProducto = products.find(product => product.id === id);
        const carro = listCart.filter(product => product.id !== id)

        let add = true;
        for (let product of listCart) {
            if (product.id === id) {
                let cantidad = product.cantidad;

                if (cantidad < agregarProducto.stock) {
                    const nuevaCantidad = { ...product, cantidad: cantidad + 1 }
                    setListCart([...carro, nuevaCantidad])
                }
                add = false;
                break;
            }
        }
        add && setListCart([...carro, {...agregarProducto, cantidad: 1 }])
    }
    const Clear = () => {
        setListCart([])
    }
    const remove = (id) => {
        const actualizarCarro = listCart.filter(product => product.id !== id);
        setListCart(actualizarCarro);
    }
    return (
        <ListCartContext.Provider value={{remove, listCart, agregar, Clear}}>
            {children}
        </ListCartContext.Provider>
    )
}
export default CartContext;