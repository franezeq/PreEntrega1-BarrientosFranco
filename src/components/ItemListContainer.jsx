import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { products } from "./AsyncMok"; // Asegúrate de importar los productos correctamente
import CategoryButtons from "./Categories/CategoryButtons";
import ProductComponent from "./ProductsView/ProductComponent";

export default function ItemListContainer() {
    const { categoryId } = useParams();
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        if (categoryId) {
            const filtered = products.filter(product => product.categoria.toLowerCase() === categoryId.toLowerCase());
            setFilteredProducts(filtered);
        } else {
            setFilteredProducts(products);
        }
    }, [categoryId]);

    return (
        <>
            <CategoryButtons />
            <ProductComponent products={filteredProducts} />
        </>
    );
}