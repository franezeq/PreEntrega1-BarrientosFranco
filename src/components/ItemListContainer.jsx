import CategoryButtons from "./Categories/CategoryButtons";
import ProductComponent from "./ProductsView/ProductComponent";

export default function ItemListContainer() {


    return (
        <>
            <CategoryButtons 
            uno = "Hombre"
            dos = "Mujer"
            tres = "Varios"
            />
            <ProductComponent />
        </>
    );
}