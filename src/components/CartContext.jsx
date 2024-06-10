/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import { getProds } from "../firebase/firebase";

export const ListCartContext = createContext(null);

const CartContext = ({ children }) => {
    const [listCart, setListCart] = useState([]);

    const agregar = async (id, quantity) => {
        try {
            const productList = await getProds();
            const productToAdd = productList.find((product) => product.id === id);

            if (productToAdd) {
                const existingProductIndex = listCart.findIndex((product) => product.id === id);

                if (existingProductIndex !== -1) {
                    // Actualizar cantidad si el producto ya está en el carrito
                    setListCart((prevCart) => {
                        const updatedCart = [...prevCart];
                        updatedCart[existingProductIndex].cantidad += quantity;
                        return updatedCart;
                    });
                } else {
                    // Agregar producto al carrito por primera vez
                    setListCart((prevCart) => [...prevCart, { id, ...productToAdd, cantidad: quantity }]);
                }
            } else {
                console.log("El producto no existe en la base de datos");
            }
        } catch (error) {
            console.error("Error al agregar producto al carrito:", error);
        }
    };

    const Clear = () => {
        setListCart([]);
    };

    const remove = (id) => {
        setListCart((prevCart) => prevCart.filter((product) => product.id !== id));
    };

    return (
        <ListCartContext.Provider value={{ remove, listCart, agregar, Clear }}>
            {children}
        </ListCartContext.Provider>
    );
};

export default CartContext;