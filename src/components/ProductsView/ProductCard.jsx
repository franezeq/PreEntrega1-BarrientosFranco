/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "./ProductCard.css";


export default function ProductCard({ titulo, precio, img, idProd, categoria }) {
  return (
    <div className="Cards" key={idProd}>
      <h4 className="CardsItem">{titulo}</h4>
      <img className="CardsItem" src={img} alt={`imagen de ${titulo}`} />
      <p className="CardsItem">Precio $ {precio}</p>
      <p className="CardsItem">Categoria: {categoria}</p>
      <button className="CardsItem BtnVerMas">
        <Link to={`/item/${idProd}`} className="LinkVerMas">Ver más</Link>
      </button>
    </div>
  );
}