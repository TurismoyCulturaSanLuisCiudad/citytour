// Inicializar el mapa
const map = L.map('map').setView([-33.301726, -66.337752], 13);

// Añadir capa de mapa base
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Puntos turísticos de ejemplo con imágenes, audio y enlaces a galerías
const puntosTuristicos = [
    {
        nombre: "Iglesia Catedral",
        descripcion: "Allí se encontraba la Casa de los Osorio.\n Por la calle Pringles encontramos un antiguo ejemplar de Quebracho, se dice que allí ató su caballo el Gral. San Martín cuando se alojó en los años 1814, 1816 y 1819.\n En 1883 se coloca la piedra fundamental de la Iglesia Mayor o Matriz y en 1887 comienza la construcción; la obra estuvo a cargo de Carlos Deluigi y su ayudante Antonio Espí.\n En 1907 se consagra Catedral, se erige la torre del campanario en 1924 y en 1944 la torre izquierda con el reloj y el frontispicio, obra del artista plástico Líbero Pierini.\n En la Catedral se veneran las imágenes de la Inmaculada Concepción y San Luis Rey de Francia, patrono de nuestra ciudad.\n En el interior, en la nave derecha encontramos el Sepulcro histórico del Coronel Juan Pascual Pringles.",
        audio: "audios/iglesia_catedral.mp3",
        imagen: "images/Encabezado.png",
        galeria: "fotos/iglesia_catedral",
        coordenadas: [-33.30240908556757, -66.33593006985015]
    },
    {
        nombre: "Palacio Mollo",
        descripcion: "El Palacio Mollo, fue casa particular de la familia Mollo-Cacace; construida entre los años 1916 y 1921, presenta características arquitectónicas de un petit hotel: subsuelo, (un espacio ubicado por debajo del nivel de la calle pero no implica un sótano), planta baja, primer piso y terraza. La casa fue declarada Patrimonio Cultural bajo el Decreto N° 360/94 del Ministerio de Cultura y Educación Provincial. Años más tarde fue vendida a un particular.",
        audio: "audios/palacio_mollo.mp3",
        imagen: "images/Encabezado.png",
        galeria: "fotos/palacio_mollo",
        coordenadas: [-33.29990632492681, -66.33669587701937]
    },
];

// Añadir marcadores numerados y eventos para los puntos turísticos
puntosTuristicos.forEach((punto, index) => {
    const marker = L.marker(punto.coordenadas, {
        icon: L.divIcon({
            className: 'custom-div-icon',
            
            html: `<div style="color: white;background: linear-gradient(90deg, rgba(115,191,65,1) 35%, rgba(0,56,115,1) 100%);border-radius: 50%;width: 40px;height: 40px;display: flex;align-items: center;justify-content: center;font-size: 16px;font-weight: bold;line-height: 1;" class="number-icon">${index + 1}</div>`,
            iconSize: [30, 42],
            iconAnchor: [15, 42]
        })
    }).addTo(map);

    marker.on('click', () => {
        document.getElementById('card-title').innerText = punto.nombre;
        document.getElementById('card-description').innerText = punto.descripcion;
        document.getElementById('card-image').src = punto.imagen;
        document.getElementById('card-image').alt = punto.nombre;
        document.getElementById('card-audio').src = punto.audio;
        document.getElementById('gallery-link').setAttribute('data-gallery', punto.galeria);
        document.getElementById('card').style.display = "block";
    });
});

// Función para cerrar el card al hacer clic fuera de él
map.on('click', () => {
    document.getElementById('card').style.display = "none";
});

// Funciones para abrir y cerrar la galería en una nueva card
function openGallery() {
    const galleryPath = document.getElementById('gallery-link').getAttribute('data-gallery');
    const slidesContainer = document.querySelector('.carousel-slides');

    // Limpiar el contenido previo del carrusel
    slidesContainer.innerHTML = '';

    // Cargar las imágenes en el carrusel
    const imageList = {
        'fotos/iglesia_catedral': ['foto1.jpg', 'foto2.jpg', 'foto3.jpg', 'foto4.jpg','foto5.jpg', 'foto6.jpg', 'foto7.jpg', 'foto8.jpg','foto9.jpg', 'foto10.jpg','foto11.jpg', 'foto12.jpg', 'foto13.jpg', 'foto14.jpg','foto15.jpg', 'foto16.jpg', 'foto17.jpg', 'foto18.jpg','foto19.jpg', 'foto20.jpg','foto21.jpg', 'foto22.jpg', 'foto23.jpg', 'foto24.jpg','foto25.jpg', 'foto26.jpg', 'foto27.jpg', 'foto28.jpg','foto29.jpg', 'foto30.jpg'],
        'fotos/palacio_mollo': ['foto1.png', 'foto2.png', 'foto3.png', 'foto4.png','foto5.png', 'foto6.png'] // Puedes añadir más listas según tus carpetas
    };
    const images = imageList[galleryPath]  // Cambia estos nombres según tus archivos
    images.forEach(img => {
        const imgElement = document.createElement('img');
        imgElement.src = `${galleryPath}/${img}`;
        slidesContainer.appendChild(imgElement);
    });

    document.getElementById('gallery-card').style.display = 'block';
    document.getElementById('card').style.display = 'none';

    // Inicializar el carrusel
    currentSlideIndex = 0;
    showSlide(currentSlideIndex);
}

function closeCard() {
    document.getElementById('card').style.display = "none";
}

function closeGalleryCard() {
    document.getElementById('gallery-card').style.display = 'none';
    document.getElementById('card').style.display = 'block';
}

let currentSlideIndex = 0;

function moveSlide(n) {
    const slides = document.querySelectorAll('.carousel-slides img');
    currentSlideIndex = (currentSlideIndex + n + slides.length) % slides.length;
    showSlide(currentSlideIndex);
}

function showSlide(index) {
    const slides = document.querySelector('.carousel-slides');
    const slideWidth = slides.children[0].offsetWidth;
    slides.style.transform = `translateX(-${slideWidth * index}px)`;
}
