/* eslint-disable react/prop-types */
import { useContext } from "react"
import { ListCartContext } from "./CartContext"

const AddToCart = ({id}) => {
    let {agregar} = useContext(ListCartContext)
    const handleClick = () => {
        agregar(id)
    }
    return(
        <button id="add" onClick={handleClick}>
            <p>Agregar</p>
        </button>
    )
}
export default AddToCart;