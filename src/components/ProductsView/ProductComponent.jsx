import { useEffect, useState } from "react"

import ProductCard from "../ProductsView/ProductCard"
import "./ProductComponent.css"
import { useParams } from "react-router-dom";
import getProducts from "../Sim";
import { products } from "../AsyncMok";


export default function ProductComponent() {
    const [productos, setProductos] = useState([]);
    const { idCategory } = useParams();
    useEffect(() => {
        if (idCategory == undefined) {
            getProducts(products, 2000)
                .then(resp => setProductos(resp))
                .catch(error => console.log(error))
        } else {
            getProducts(products.filter(filter=> filter.categoria == idCategory), 2000)
                .then(resp => setProductos(resp))
                .catch(error => console.log(error))
        }

    }

        , [idCategory])


    return (
        <>
            <h2>Productos</h2>
            <article className="CardsPadre">
                {productos.map(product =>(
                <ProductCard
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