import { Link } from "react-router-dom";
import "./CategoryButtons.css";
import { categorias } from "../AsyncMok";

export default function CategoryButtons() {
    const categories = categorias;

    return (
        <>
            <h3>Categorías</h3>
            <section className="Categorias">
                {categories.map(category => (
                    <Link key={category.id} to={`/category/${category.id}`}>
                        <button>{category.categoria}</button>
                    </Link>
                ))}
            </section>
        </>
    );
}