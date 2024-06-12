# Ecommerce - Meraki
##### Franco Barrientos
Mi Web App es un Ecommerce de productos varios de regaleria.
En la pantalla principal se podran ver los productos disponibles y se podra clickear en "Ver mas" de cada uno de ellos para acceder a los detalles de los mismos.
Una vez agregado el producto al carro, seleccionando la cantidad deseada con el contador podran hacer click en Finalizar para acceder al formulario de orden. Solo se podra agregar al carro una cantidad mayor a 0 y menor o igual al stock disponible en nuestra base de datos. Podran agregar productos al carro desde la pantalla principal o desde los detalles del producto.
En el carro podran ver los productos con su imagen y precio, con subtotales en caso de seleccionar mas de un producto. Tambien debajo aparecera el valor total final.
 Una vez que completen sus datos, podran generar una orden con un Id que le brindara la App a continuacion.

 ## Dependencias:
  "firebase", "react", "react-dom", "react-router-dom", "react-spinners"
  ##### Firebase
  Se implemento como fue sugerido para la entrega para el uso de una base de datos. Tanto para los productos como para la generacion de ordenes.
  ##### React-spinners
  Esta dependencia se implemento por estetica, para que cuando cargen los productos se muestre una animacion de carga.
  