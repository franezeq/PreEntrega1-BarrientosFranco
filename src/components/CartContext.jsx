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
                const existingProduct = listCart.find((product) => product.id === id);

                if (existingProduct) {

                    setListCart((prevCart) => {
                        return prevCart.map((product) => {
                            if (product.id === id) {
                                const newQuantity = product.cantidad + quantity;
                                if (newQuantity <= productToAdd.stock) {
                                    return { ...product, cantidad: newQuantity };
                                } else {
                                    alert(`Solo puedes agregar hasta ${productToAdd.stock} unidades de este producto.`);
                                    return product;
                                }
                            }
                            return product;
                        });
                    });
                } else {

                    if (quantity <= productToAdd.stock) {
                        setListCart((prevCart) => [...prevCart, { ...productToAdd, id, cantidad: quantity }]);
                    } else {
                        alert(`Solo puedes agregar hasta ${productToAdd.stock} unidades de este producto.`);
                    }
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
