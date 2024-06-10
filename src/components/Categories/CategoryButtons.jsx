import { Link } from "react-router-dom";
import "./CategoryButtons.css";

const CategoryButtons = () => {
    return (
        <>
            <h3 className="TituloCategorias">Categorías</h3>
            <section >
                <ul className="Categorias">
                    <li className="Catlinks">
                        <Link to="/category/Hombre" key="Hombre">
                        Hombre
                        </Link>
                    </li>
                    <li className="Catlinks">
                        <Link to="/category/Mujer" key="Mujer">
                            Mujer
                        </Link>
                    </li>
                    <li className="Catlinks"> <Link to="/category/Varios" key="Varios">
                        Varios
                        </Link></li>
                </ul>
            </section>
        </>
    );
}
export default CategoryButtons;