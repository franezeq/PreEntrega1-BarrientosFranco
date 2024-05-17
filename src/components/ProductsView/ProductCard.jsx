/* eslint-disable react/prop-types */
export default function ProductCard({titulo, precio, img, id}) {
    return <>
    <div>

        <h4>{titulo}</h4>
        <img src={img} alt={`imagen de ${titulo}`}/>
        <p>Precio $ {precio}</p>
        <p>{id}</p>
        <button>Ver mas</button>
    </div>
    


    </>

}