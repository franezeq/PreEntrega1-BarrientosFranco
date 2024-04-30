import { useState } from "react"

export default function ContadorComponente() {
    const [contador, setContador] = useState(0);
    const handleClick = () => {
        setContador(contador + 1);
    }


    return (
        <>
            <h3>Contador</h3>
            <p>{contador}</p>
            <p onClick={handleClick}></p>

        </>
    )

}