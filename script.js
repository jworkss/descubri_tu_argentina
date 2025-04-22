// Variables globales para almacenar las imágenes y títulos de la región seleccionada
let imagenesActuales = [];
let titulosImagenes = [];
let indiceImagen = 0;
/**
 * Cambia de pantalla/sección visible.
 * Oculta todas las secciones y muestra la que corresponde según el ID recibido.
 * @param {string} id - ID del elemento <section> a mostrar.
 */
function mostrarPantalla(id) {
  const pantallas = document.querySelectorAll(".pantalla");
  pantallas.forEach((p) => p.classList.remove("activa"));
  document.getElementById(id).classList.add("activa");
}
/**
 * Carga los datos de una región seleccionada.
 * Muestra la primera imagen y su título, junto con la descripción general.
 * @param {string} region - Clave de la región seleccionada (ej: 'noa', 'nea').
 */
function mostrarDetalle(region) {
  // Datos de cada región: título, imágenes, títulos de imágenes y descripción

  const data = {
    noa: {
      titulo: "Región NOA",
      imagenes: [
        "https://upload.wikimedia.org/wikipedia/commons/0/0a/Cerro_de_los_siete_colores.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/8/8e/Catedral_de_Salta_1.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/a/aa/Jujuy-Purmamarca-P3120033.JPG",
      ],
      titulos: [
        "Cerro de los Siete Colores (Jujuy)",
        "Catedral de Salta",
        "Quebrada de Humahuaca",
      ],
      descripcion:
        "Incluye provincias como Jujuy, Salta y Tucumán. Paisajes áridos, cerros coloridos y gran riqueza cultural andina.",
    },
    nea: {
      titulo: "Región NEA",
      imagenes: [
        "https://upload.wikimedia.org/wikipedia/commons/7/78/1_iguazu_falls.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/3/3f/Carpincho_lake_in_National_park_Chaco.JPG",
        "https://upload.wikimedia.org/wikipedia/commons/a/ab/Aburria_jacutinga_-Parque_das_Aves-8.jpg",
      ],
      titulos: [
        "Cataratas del Iguazú (Misiones)",
        "Parque Nacional Chaco",
        "Selva Misionera, La yacutinga o pava yacutinga",
      ],
      descripcion:
        "Formosa, Chaco, Corrientes y Misiones. Clima subtropical, selvas y las Cataratas del Iguazú.",
    },
    cuyo: {
      titulo: "Región Cuyo",
      imagenes: [
        "https://upload.wikimedia.org/wikipedia/commons/4/4e/Aconcagua2016.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/1/11/Viñedos_de_Mendoza.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/6/6b/Reserva_natural_Villavicencio_-_Jardín_de_cactus.JPG",
      ],
      titulos: [
        "Cerro Aconcagua",
        "Viñedos de Mendoza",
        "Reserva Natural Villavicencio",
      ],
      descripcion:
        "Mendoza, San Juan y San Luis. Tierra del vino y el Aconcagua, el pico más alto de América.",
    },
    centro: {
      titulo: "Región Centro",
      imagenes: [
        "https://upload.wikimedia.org/wikipedia/commons/8/89/Sierras_de_la_Provincia_de_Córdoba_%28Argentina%29_2008-09-20.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/4/47/Campo_Departamento_Conhelo.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/0/00/ObeliscoBA2015.2.jpg",
      ],
      titulos: [
        "Sierras de Córdoba",
        "Llanuras pampeanas",
        "Obelisco de Buenos Aires",
      ],
      descripcion:
        "Buenos Aires, Córdoba, Santa Fe, Entre Ríos y La Pampa. Corazón productivo del país y centro urbano.",
    },
    patagonia: {
      titulo: "Región Patagonia",
      imagenes: [
        "https://upload.wikimedia.org/wikipedia/commons/5/5c/Perito_Moreno_Glacier_Patagonia_Argentina_Luca_Galuzzi_2005.JPG",
        "https://upload.wikimedia.org/wikipedia/commons/f/f8/Cerro_torre_1987.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/0/02/Futalaufquen_Lake.jpeg",
      ],
      titulos: ["Glaciar Perito Moreno", "Cerro Torre", "Bosque de Alerces"],
      descripcion:
        "Desde Río Negro hasta Tierra del Fuego. Glaciares, lagos y bosques imponentes del sur argentino.",
    },
  };

  // Cargar los datos de la región seleccionada
  const info = data[region];
  document.getElementById("titulo-region").textContent = info.titulo;

  imagenesActuales = info.imagenes;
  titulosImagenes = info.titulos;
  indiceImagen = 0;

  // Mostrar imagen y texto inicial
  document.getElementById("imagen-region").src = imagenesActuales[indiceImagen];
  document.getElementById("titulo-imagen").textContent =
    titulosImagenes[indiceImagen];
  document.getElementById("descripcion-region").textContent = info.descripcion;

  // Ir a la pantalla de detalle
  mostrarPantalla("pantalla-detalle");
}
/**
 * Cambia a la siguiente imagen de la galería.
 * Se actualiza la imagen y su título correspondiente.
 */
function cambiarImagen() {
  if (imagenesActuales.length === 0) return;

  // Avanza circularmente en la galería
  indiceImagen = (indiceImagen + 1) % imagenesActuales.length;
  // Actualiza imagen y título
  document.getElementById("imagen-region").src = imagenesActuales[indiceImagen];
  document.getElementById("titulo-imagen").textContent =
    titulosImagenes[indiceImagen];
}
/**
 * Cambia el modo claro/oscuro del sitio.
 * Alterna la clase 'modo-oscuro' en el <body>.
 */
function toggleModo() {
  document.body.classList.toggle("modo-oscuro");
}
