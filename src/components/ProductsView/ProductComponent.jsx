import { useEffect, useState } from "react"
import { getProducts } from "../AsyncMok"
import ProductCard from "../ProductsView/ProductCard"
import "./ProductComponent.css"


export default function ProductComponent() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        getProducts.then(data => setProducts(data))

    }, [])


    return (
        <>
            <h2>Productos</h2>
            <article className="CardsPadre">
                {products.map((product) =>
                (<ProductCard
                    key={product.id}
                    titulo={product.titulo}
                    precio={product.precio}
                    img={product.img}
                    idProd={product.id}
                
                />
                ))
                }

        
            </article>
        </>
    );
}

