/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const displayCarro = createContext(null);
const ContextCarro = ({ children }) => {
    const [Show, setShow] = useState("none")
    return (
        <displayCarro.Provider value={{ Show, setShow }}>
            {children}
        </displayCarro.Provider>
    )
}
export default ContextCarro;