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
                    (<ProductCard title={product.titulo} price={product.precio} image={product.img} />))
                }
            </article>
        </>
    )
}