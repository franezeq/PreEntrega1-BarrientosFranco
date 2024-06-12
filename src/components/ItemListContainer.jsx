import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CategoryButtons from "./Categories/CategoryButtons";
import ProductCard from "./ProductsView/ProductCard";

import DotLoader from "react-spinners/DotLoader";
import "./ItemListContainer.css";
import { getProds, getProdsByCategory } from "../firebase/firebase";

export default function ItemListContainer() {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true); 
    const { idCategory } = useParams();

    useEffect(() => {
        setLoading(true); 
        setProductos([]);
        if (!idCategory) {
            getProds()
                .then(resp => setProductos(resp))
                .catch(error => console.log(error))
                .finally(() => setLoading(false)); 
        } else {
            getProdsByCategory(idCategory)
                .then(resp => setProductos(resp))
                .catch(error => console.log(error))
                .finally(() => setLoading(false)); 
        }
    }, [idCategory]);

    return (
        <>
            <CategoryButtons
                uno="Hombre"
                dos="Mujer"
                tres="Varios"
            />
            <h2>Productos</h2>
            {loading ? ( 
                <div className="LoaderContainer">
                    <DotLoader color="#ffc0cb" />
                </div>
            ) : (
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
            )}
        </>
    );
}
