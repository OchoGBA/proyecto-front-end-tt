export const actualizarContador = (carrito) => {
    const contador = document.getElementById("contador_carrito");
    if (contador) {
        contador.textContent = carrito.length
    }
}


    export const mostrarMensaje = (texto) => {
    // Creamos el elemento del mensaje
    const toast = document.createElement("div");
    toast.classList.add("toast-notificacion");
    toast.textContent = texto;

    document.body.appendChild(toast);

    // Configuramos para que se elimine solo después de 3 segundos (3000ms)
    setTimeout(() => {
        toast.remove();
    }, 3000);
};