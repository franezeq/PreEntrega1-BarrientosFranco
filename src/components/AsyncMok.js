const products=[
    {
        "id": 1,
        "img": "../img/MateRojo.jpg",
        "titulo": "Mate Rojo",
        "descripcion": "Mate color rojo con bombilla saca yerba.",
        "precio": "2040",
        "stock": "3",
        "alt": "Mate color rojo con bombilla saca yerba."
    },
    {
        "id": 2,
        "img": "../img/Billetera1.jpg",
        "titulo": "Billetera Marron",
        "descripcion": "Billetera marron de cuero.",
        "precio": "4000",
        "stock": "7",
        "alt": "Billetera marron de cuero."
    },
    {
        "id": 3,
        "img": "../img/Billetera2.jpg",
        "titulo": "Billetera Negra",
        "descripcion": "Billetera de cuero negra.",
        "precio": " 3000",
        "stock": " 9",
        "alt": "Billetera de cuero negra."
    },
    {
        "id": 4,
        "img": "../img/camion.webp",
        "titulo": "Camion",
        "descripcion": "Camion de juguete",
        "precio": "2550",
        "stock": "10",
        "alt": "Camion de juguete"
    },
    {
        "id": 5,
        "img": "../img/CarteraVerdeCuero.jpg",
        "titulo": "Chimola",
        "descripcion": "Cartera color verde de cuero, marca Chimola",
        "precio": "6200",
        "stock": "3",
        "alt": "Cartera color verde de cuero, marca Chimola"
    },
    {
        "id": 6,
        "img": "../img/dino.webp",
        "titulo": "Dinosaurio",
        "descripcion": "Dinosaurio de juguete",
        "precio": "2000",
        "stock": "11",
        "alt": "Dinosaurio de juguete"
    },
    {
        "id": 7,
        "img": "../img/CartucheraFooty1Piso.jpg",
        "titulo": "Footy",
        "descripcion": "Cartuchera infantil de 1 piso",
        "precio": "4000",
        "stock": "20",
        "alt": "Cartuchera infantil de 1 piso"
    },
    {
        "id": 8,
        "img": "../img/esmalteaurora.png",
        "titulo": "Esmalte Disney",
        "descripcion": "Esmalte de aurora",
        "precio": "1340",
        "stock": "3",
        "alt": "Esmalte de aurora"
    },
    {
        "id": 9,
        "img": "../img/CartucheraGamer2cierres.png",
        "titulo": "Cartuchera Gamer",
        "descripcion": "Cartuchera infantil",
        "precio": "3240",
        "stock": "11",
        "alt": "Cartuchera infantil"
    },
    {
        "id": 10,
        "img": "../img/LuncheraMickeypng.jpg",
        "titulo": "Lunchera de Mickey Mouse",
        "descripcion": "Lunchera infantil de Mickey Mouse.",
        "precio": "5120",
        "stock": "2",
        "alt": "Lunchera infantil de Mickey Mouse."
    },
    {
        "id": 11,
        "img": "../img/jabonpawpatrol.jpg",
        "titulo": "Jabon de Paw Patrol",
        "descripcion": "Jabon liquido de Paw Patrol",
        "precio": "2100",
        "stock": "5",
        "alt": "Jabon liquido de Paw Patrol"
    },
    {
        "id": 12,
        "img": "../img/JuegoComidax5.jpg",
        "titulo": "Set de comida",
        "descripcion": "Set de Comida infantil para jugar",
        "precio": "3310",
        "stock": "5",
        "alt": "Set de Comida infantil para jugar"
    }
]

export const getProducts = new Promise((resolve)=>{
    setTimeout(() => {
        resolve(products)
    }, 2000);
})