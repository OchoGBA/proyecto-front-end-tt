const arrayProductos = [
    {
        imagen: "img/cajon1.png",
        alt: "Cajón peruano con dibujo",
        nombre: "Cajón Peruano Personalizado",
        descripcion: "Cajón peruano de pitiribí con dibujo de ave en tapa frontal. Excelente para estudiantes avanzados, profesionales y para destacarte en tus presentaciones.",
        precio: 20000
    },

    {
        imagen: "img/cajon2.png",
        alt: "Cajón negro",
        nombre: "Cajón profesional \"LP\" ",
        descripcion: "Cajón profesional de roble, de la marca \"LP\". Diseño robusto y elegante, ideal para músicos avanzados o profesionales.",
        precio: 25000
    },

    {
        imagen: "img/cajon3.png",
        alt: "Cajón peruano con dibujo",
        nombre: "Cajón liso",
        descripcion: "Cajon peruano de pitiribí, de diseño minimalista. La mejor opción para principiante y como cajón de ensayo.",
        precio: 15000
    },

    {
        imagen: "img/cajon4.png",
        alt: "cajon liso oscuro con tapa clara",
        nombre: "Cajon Profesional \"Leonardo\"",
        descripcion: "Cajón flamenco profesional, hecho en roble. Diseño sobrio, con bordonas internas. Ideal para músicos avanzados.",
        precio: 20000
    },

    {
        imagen: "img/cajon5.png",
        alt: "cajon liso",
        nombre: "Cajón de estudio",
        descripcion: "Cajon peruano de guatambú de diseño rústico. Óptimo para principiante y como cajón de ensayo.",
        precio: 15000
    },

    {
        imagen: "img/funda.png",
        alt: "Funda de cajón",
        nombre: "Funda de Cajón",
        descripcion: "Funda para guardar y trasportar tu instrumento. Exterior de lona impermeable en color negro e interior acolchado. Ideal para protejer el cajón cuando lo traslades.",
        precio: 20000
    },
];

const mainContainer = document.getElementById("main-container"); /* toma contenedor id #main-container */

const sectionContainer = document.createElement("section");

sectionContainer.id="section-container";

sectionContainer.classList.add("productos");

arrayProductos.forEach((producto) => {

    //creo <article>
    let card = document.createElement("article");
    card.classList.add("producto");

    //creo imagen
    let imagen = document.createElement("img");
    imagen.src = producto.imagen;
    imagen.alt = producto.alt;

    //creo nombre producto
    let tituloProducto = document.createElement("h3");
    tituloProducto.classList.add("nombre_producto");
    tituloProducto.textContent = producto.nombre;

    //creo descripcion
    let descripcion = document.createElement("p");
    descripcion.classList.add("producto_descripcion");
    descripcion.textContent = producto.descripcion;

    //creo precio
    let precio = document.createElement("p");
    precio.classList.add("producto_precio");
    precio.textContent = `$${producto.precio}`;  

card.appendChild(imagen);
card.appendChild(tituloProducto);
card.appendChild(descripcion);
card.appendChild(precio);

sectionContainer.appendChild(card);

});

mainContainer.appendChild(sectionContainer);
