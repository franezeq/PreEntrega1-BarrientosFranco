
const getProducts = (mostrarProducts, time) => {
return new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(mostrarProducts)
        reject(new Error("algo salio mal"))
    },time);
})
}
export default getProducts;