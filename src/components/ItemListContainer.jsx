import Bienvenida from "./Bienvenida"
import ItemCount from "./ItemCount"
export default function ItemListContainer() {
    return (<>
        <Bienvenida greeting="Bienvenidos a la tienda de MERAKI"/>
        <ItemCount/>
        </>)
}