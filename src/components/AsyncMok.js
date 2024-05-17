const products = [
    {
        id: 1,
        img: "../img/MateRojo.jpg",
        titulo: "Mate Rojo",
        descripcion: "Mate color rojo con bombilla saca yerba.",
        precio: "2040",
        stock: "3",
        alt: "Mate color rojo con bombilla saca yerba."
    },
    {
        id: 2,
        img: "../img/Billetera1.jpg",
        titulo: "Billetera Marron",
        descripcion: "Billetera marron de cuero.",
        precio: "4000",
        stock: "7",
        alt: "Billetera marron de cuero."
    },
    {
        id: 3,
        img: "../img/Billetera2.jpg",
        titulo: "Billetera Negra",
        descripcion: "Billetera de cuero negra.",
        precio: " 3000",
        stock: " 9",
        alt: "Billetera de cuero negra."
    },

]

export const getProducts = new Promise((resolve) => {
    setTimeout(() => {
        resolve(products)
    }, 2000);
})

