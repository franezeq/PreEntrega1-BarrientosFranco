import { useContext } from 'react'
import './CartCantidad.css'
import { ListCartContext } from './CartContext'
export default function CartCantidad() {

   const { listCart } = useContext(ListCartContext)

   return (<>
      <p className="contador">{listCart.length}</p>

   </>)

}