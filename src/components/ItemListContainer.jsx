import Bienvenida from "./Bienvenida"
import ItemCount from "./ItemCount"
import ProductComponent from "./ProductsView/ProductComponent"
export default function ItemListContainer() {
    return (<>
        <Bienvenida greeting="Bienvenidos a la tienda de MERAKI"/>
        <ItemCount/>
        <ProductComponent/>
        </>)
}