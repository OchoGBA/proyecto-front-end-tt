import { agregarAlCarrito } from "./funcionesCarrito.js"
import { obtenerCarrito } from "./storage.js"
import { actualizarContador } from "./ui.js";

document.addEventListener("DOMContentLoaded", () => {

    const mainContainer = document.getElementById("main-container");

    const sectionContainer = document.createElement("section");

    sectionContainer.id = "section-container";

    sectionContainer.classList.add("productos");

    const carrito = obtenerCarrito()
    actualizarContador(carrito)

    fetch("./data/productos.json")
        .then((res) => {
            if (!res.ok) {
                throw new Error(`Error HHTP status: ${res.status}`);
            }

            return res.json();
        })
        .then(data => {
            data.forEach((producto) => {

                //creo <article>
                let card = document.createElement("article")
                card.classList.add("producto")

                //creo imagen
                let imagen = document.createElement("img")
                imagen.src = producto.imagen
                imagen.alt = producto.alt

                //creo nombre producto
                let tituloProducto = document.createElement("h3")
                tituloProducto.classList.add("nombre_producto")
                tituloProducto.textContent = producto.nombre

                //creo descripcion
                let descripcion = document.createElement("p")
                descripcion.classList.add("producto_descripcion")
                descripcion.textContent = producto.descripcion

                //creo precio
                let precio = document.createElement("p")
                precio.classList.add("producto_precio")
                precio.textContent = `$${producto.precio}`

                //creo boton
                let boton = document.createElement("button")
                boton.classList.add("btn");
                boton.textContent = "Agregar al carrito";

                boton.addEventListener("click", () => {
                    agregarAlCarrito(producto)
                })

                card.appendChild(imagen)
                card.appendChild(tituloProducto)
                card.appendChild(descripcion)
                card.appendChild(precio)
                card.appendChild(boton)

                sectionContainer.appendChild(card)

            })
            mainContainer.appendChild(sectionContainer);
        })
        .catch((err) => {
            console.log("ERROR: ", err);
        });
});