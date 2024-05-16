import { useRef } from "react";
import { useState } from "react";

export default function ItemCount() {
    const [cont, setCont] = useState(0);
    const clicks = useRef(0);


const handleInc = () => {
    setCont(cont + 1);
    clicks.current++;

};

const handleDec = () =>{
    setCont(cont - 1);
    clicks.current++;
}

return(
    <>
    <h3>Contador</h3>
    <section>
        <button onClick={handleInc}>Inc</button>
        <p>{cont}</p>
        <button onClick={handleDec}>Dec</button>

    </section>
    
    </>
)
}