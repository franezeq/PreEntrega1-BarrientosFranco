import { useEffect, useState } from "react"
import { getProducts } from "../AsyncMok"
import ProductCard from "../ProductsView/ProductCard"

export default function ProductComponent() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        getProducts.then(data => setProducts(data))

    }, [])


    return (
        <>
            <h1>products</h1>
            <article>
                {products.map((product) =>
                (<ProductCard
                    key={product.id}
                    titulo={product.titulo}
                    precio={product.precio}
                    img={product.img}
                />
                ))
                }
            </article>
        </>
    );
}

