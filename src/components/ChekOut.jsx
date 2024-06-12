import { useState, useContext } from "react";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { ListCartContext } from "./CartContext";

const CheckOut = () => {
    const { listCart, Clear } = useContext(ListCartContext);
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [confirmEmail, setConfirmEmail] = useState("");
    const [orderId, setOrderId] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (email !== confirmEmail) {
            alert("Los correos electrónicos no coinciden");
            return;
        }

        const db = getFirestore();
        const ordersCollection = collection(db, "orders");

        const order = {
            buyer: { name, phone, email },
            items: listCart,
            date: new Date(),
            total: listCart.reduce((acc, product) => acc + (product.cantidad * product.precio), 0),
        };

        try {
            const docRef = await addDoc(ordersCollection, order);
            setOrderId(docRef.id);
            Clear();
        } catch (error) {
            console.error("Error: ", error);
        }
    };

    const total = listCart.reduce((acc, product) => acc + (product.cantidad * product.precio), 0);

    return (
        <div>
            <h2>CheckOut</h2>
            {orderId ? (
                <p>Gracias por su compra. Su número de orden es: {orderId}</p>
            ) : (
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Nombre:</label>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                    </div>
                    <div>
                        <label>Teléfono:</label>
                        <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} required />
                    </div>
                    <div>
                        <label>Email:</label>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    <div>
                        <label>Confirmar Email:</label>
                        <input type="email" value={confirmEmail} onChange={(e) => setConfirmEmail(e.target.value)} required />
                    </div>
                    <h3>Resumen de Productos</h3>
                    {listCart.map((product) => (
                        <div key={product.id}>
                            <p>{product.titulo} - Cantidad: {product.cantidad} - Precio: ${product.precio} - Subtotal: ${product.cantidad * product.precio}</p>
                        </div>
                    ))}
                    <h3>Total: ${total}</h3>
                    <button type="submit">Enviar Orden</button>
                </form>
            )}
        </div>
    );
};

export default CheckOut;
