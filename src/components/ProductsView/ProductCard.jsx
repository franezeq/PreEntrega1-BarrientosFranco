/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"
import "./ProductCard.css"
import ItemCount from "../ItemCount"
export default function ProductCard({ titulo, precio, img, id, idProd }) {
    return <>
        <div className="Cards">

            <h4 className="CardsItem">{titulo}</h4>
            <img className="CardsItem" src={img} alt={`imagen de ${titulo}`} />
            <p className="CardsItem">Precio $ {precio}</p>
            <p className="CardsItem">{id}</p>
            <button className="CardsItem BtnVerMas">
                <Link to={`/item/${idProd}`} className="LinkVerMas">Ver mas</Link>
            </button>
            <ItemCount/>
        </div>



    </>

}