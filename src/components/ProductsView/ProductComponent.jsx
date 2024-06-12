import { useEffect, useState } from "react";
import ProductCard from "../ProductsView/ProductCard";
import "./ProductComponent.css";
import { useParams } from "react-router-dom";
import { getProds, getProdsByCategory } from "../../firebase/firebase";

export default function ProductComponent() {
    const [productos, setProductos] = useState([]);
    const { idCategory } = useParams();

    useEffect(() => {
        setProductos([]);
        if (!idCategory) {
            getProds()
                .then(resp => setProductos(resp))
                .catch(error => console.log(error));
        } else {
            getProdsByCategory(idCategory)
                .then(resp => setProductos(resp))
                .catch(error => console.log(error));
        }
    }, [idCategory]);

    return (
        <>
            <h2>Productos</h2>
            <article className="CardsPadre">
                {productos.map(product => (
                    <ProductCard
                        key={product.id}
                        titulo={product.titulo}
                        precio={product.precio}
                        img={product.img}
                        idProd={product.id}
                        categoria={product.categoria}
                        stock={product.stock}
                    />
                ))}
            </article>
        </>
    );
}
