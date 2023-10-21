console.log("Entro index.js");

let contenidoProductos = document.getElementById("contenidoProductos");


fetch('https://dev4humans.com.mx/api/clases/productos', {method: "GET"})
    .then(response => response.json())
    .then(data => {
        console.log("La promesa se reolvio");
        const rawData = data;
        const productos = rawData.data.products;
        console.log(productos);
        productos.forEach(element => {
            // contenidoProductos.innerHTML += '<p>demo</p>';
            contenidoProductos.innerHTML = contenidoProductos.innerHTML + '<p>${producto.title}</p>';
        });
    }).catch(error => console.log(error))