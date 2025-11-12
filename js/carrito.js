import { obtenerCarrito } from "./storage.js";
import { eliminarProducto, vaciarCarrito, total } from "./funcionesCarrito.js";
import { actualizarContador } from "./ui.js";

const renderizarCarrito = () => {
    const carrito = obtenerCarrito();
    actualizarContador(carrito);

    const contenedor = document.getElementById("contenedor_carrito");
    const divAcciones = document.getElementById("acciones_carrito");
    const divResumen = document.getElementById("resumen_carrito");

    contenedor.innerHTML = "";
    divAcciones.innerHTML = "";
    divResumen.innerHTML = "";

    //Camino NO HAY PRODUCTOS, entonces muestro mensaje "No hay productos en el carrito"
    if (!carrito.length) {
        const mensaje = document.createElement("p");
        mensaje.classList.add("mensaje_carrito_vacio");
        mensaje.textContent = "No hay productos en el carrito";
        contenedor.appendChild(mensaje);
        return;
    }

    //Camino HAY PRODUCTOS EN MI CARRITO
    carrito.forEach((producto, indice) => {

        //creo <article>
        let card = document.createElement("article")
        card.classList.add("tarjeta_producto")

        //creo imagen
        let imagen = document.createElement("img")
        imagen.src = `../${producto.imagen}`;
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

        //creo boton eliminar
        let botonEliminar = document.createElement("button")
        botonEliminar.classList.add("btn");
        botonEliminar.classList.add("btn_eliminar_carrito");


        botonEliminar.textContent = "Eliminar";
        botonEliminar.addEventListener("click", () => {
            eliminarProducto(indice);
            renderizarCarrito();

        });

        card.appendChild(imagen)
        card.appendChild(tituloProducto)
        card.appendChild(descripcion)
        card.appendChild(precio)
        card.appendChild(botonEliminar)

        contenedor.appendChild(card)


    });


    //boton Vaciar carrito
    const btnVaciar = document.createElement("button");
    btnVaciar.classList.add("btn");
    btnVaciar.classList.add("btn_vaciar_carrito");
    btnVaciar.textContent = "Vaciar carrito";
    btnVaciar.addEventListener("click", () => {
        vaciarCarrito();
        renderizarCarrito();

    });

    divAcciones.appendChild(btnVaciar);


    // Caja donde se muestra la suma total
    const boxTotal = document.createElement("div");
    boxTotal.classList.add("box_total");
    const subtotal = total();
    boxTotal.textContent = `Total $${subtotal}`;
    
    divResumen.appendChild(boxTotal);


};

document.addEventListener("DOMContentLoaded", renderizarCarrito);