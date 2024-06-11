import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./ItemDetailContainer.css";
import AddToCart from "../AddToCart";
import { getProductById } from "../../firebase/firebase";

export default function ItemDetailContainer() {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productData = await getProductById(id);
        setProduct(productData);
      } catch (error) {
        console.error("Error al obtener el producto:", error);
        setProduct(null);
      }
    };

    fetchProduct();
  }, [id]);

  if (product === null) {
    return <p>Cargando...</p>;
  }

  return (
    <div className="ProdDetailCard">
      <h2 className="ProdDetail">{product.titulo}</h2>
      <img className="ProdDetail" src={product.img} alt={product.alt} />
      <div className="TextoContenedor">
        <p className="ProdDetail SubTitulos">Descripcion: </p>
        <p className="TextoParrafo"> {product.descripcion}</p>
      </div>
      <div className="TextoContenedor">
        <p className="ProdDetail SubTitulos">Categoria: </p>
        <p className="TextoParrafo"> {product.categoria}</p>
      </div>
      <div className="TextoContenedor">
        <p className="ProdDetail SubTitulos">Precio: </p>
        <p className="TextoParrafo"> ${product.precio}</p>
      </div>
      <AddToCart key={product.id} id={product.id} stock={product.stock} /> 
      <p className="ProdDetail Id">ID:{id}</p>
    </div>
  );
}