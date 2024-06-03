import { Link } from "react-router-dom";
import "./CategoryButtons.css";

const CategoryButtons = (Cat) => {
    return (
        <>
            <h3 className="TituloCategorias">Categorías</h3>
            <section >
                <ul className="Categorias">
                    <li className="Catlinks">
                        <Link to="/category/Hombre" key="Hombre">
                            {Cat.uno}
                        </Link>
                    </li>
                    <li className="Catlinks">
                        <Link to="/category/Mujer" key="Mujer">
                            {Cat.dos}
                        </Link>
                    </li>
                    <li className="Catlinks"> <Link to="/category/Varios" key="Varios">
                        {Cat.tres}
                        </Link></li>
                </ul>
            </section>
        </>
    );
}
export default CategoryButtons;