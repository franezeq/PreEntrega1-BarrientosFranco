
import { useState, useContext } from "react";

import { getFirestore, collection, addDoc } from "firebase/firestore";
import { ListCartContext } from "./CartContext";

const CheckOut = () => {
    const { listCart, Clear } = useContext(ListCartContext);
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [orderId, setOrderId] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const db = getFirestore();
        const ordersCollection = collection(db, "orders");

        const order = {
            buyer: { name, phone, email },
            items: listCart,
            date: new Date(),
        };

        try {
            const docRef = await addDoc(ordersCollection, order);
            setOrderId(docRef.id);
            Clear();
        } catch (error) {
            console.error("Error: ", error);
        }
    };

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
                        <label>Telefono:</label>
                        <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} required />
                    </div>
                    <div>
                        <label>Email:</label>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    <button type="submit">Enviar Orden</button>
                </form>
            )}
        </div>
    );
};

export default CheckOut;
