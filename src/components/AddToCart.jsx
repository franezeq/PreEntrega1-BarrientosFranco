/* eslint-disable react/prop-types */
import { useContext } from "react"
import { ListCartContext } from "./CartContext"

const AddToCart = ({id}) => {
    let {agregar} = useContext(ListCartContext)
    return(
        <button id="add" onClick={()=> agregar(id) }>
            <p>Agregar</p>
        </button>
    )
}
export default AddToCart;