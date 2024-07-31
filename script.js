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
        descripcion: "Antiguamente, en el lugar se emplazaba la casa de la familia Osorio.\n\nPor calle Pringles encontramos un antiguo ejemplar del árbol nativo quebracho. Se dice que allí ató su caballo el general San Martín cuando se alojó en la ciudad en los años 1814, 1816 y 1819.\n\nEn 1883 se coloca la piedra fundamental de la Iglesia Mayor o Matriz y en 1887 comienza su construcción. La obra estuvo a cargo de Carlos Deluigi y su ayudante Antonio Espí.\n\nEn 1907 se consagra Catedral, se erige la torre del campanario en 1924 y en 1944 la torre izquierda con el reloj y el frontispicio, obra del artista plástico Líbero Pierini.\n\nEn la Catedral se veneran las imágenes de la Inmaculada Concepción y San Luis Rey de Francia, patrono de nuestra ciudad.\n\nEn el interior, en la nave derecha encontramos el sepulcro histórico del coronel Juan Pascual Pringles.",
        audio: "audios/iglesia_catedral.mp3",
        imagen: "images/Encabezado.png",
        galeria: "fotos/iglesia_catedral",
        coordenadas: [-33.30240908556757, -66.33593006985015]
    },
    {
        nombre: "Palacio Mollo",
        descripcion: "El Palacio Mollo, fue casa particular de la familia Mollo-Cacace. Construida entre los años 1916 y 1921, presenta características arquitectónicas de un petit hotel: subsuelo, (un espacio bajo el nivel de la calle pero que no implica un sótano), planta baja, primer piso y terraza. La casa fue declarada Patrimonio Cultural bajo el Decreto N° 360/94 del Ministerio de Cultura y Educación Provincial. Años más tarde fue vendida a un particular.",
        audio: "audios/palacio_mollo.mp3",
        imagen: "images/Encabezado.png",
        galeria: "fotos/palacio_mollo",
        coordenadas: [-33.29990632492681, -66.33669587701937]
    },
    {
        nombre: "Plaza Pringles",
        descripcion: "En 1878 era un potrero de la familia Rey y Ramos. El gobernador Toribio Mendoza lo expropió para construir el nuevo paseo de la ciudad, el Parque de las Flores. En sus primeros años tuvo muro de un metro de alto y 40 centímetros de ancho, cerrado con una reja perimetral de 1,25 metros de alto. Además, tenía 8 portones, uno en cada esquina y otros en la mitad de la cuadra. \n\nEn 1912 se inauguró la estatua del coronel Juan Pascual Pringles, obra del escultor Rafael Radogna, que representa a Pringles en el Combate de Pescadores, de 1820.\n\nDesde el año 1961, en cada esquina de la plaza se encuentran las esculturas que representan a las estaciones del año y en el sector sobre calle Pringles, La Zagala del Ave, del escultor y arquitecto Carlos de la Cárcova. Esta obra obtuvo el primer premio de la Comisión Nacional de Cultura, en el año 1936.",
        audio: "audios/plaza_pringles.mp3",
        imagen: "images/Encabezado.png",
        galeria: "fotos/plaza_pringles",
        coordenadas: [-33.302134615908464, -66.33684865531156]
    },
    {
        nombre: "Plaza Independencia",
        descripcion: "Fundada en 1691 como una plaza seca, ubicada en el límite de las crecidas del río Chorrillo. Fue llamada Plaza Mayor o Plaza de Armas. La estatua del general San Martín se inauguró el 9 de julio de 1916.\n\nAl norte de la plaza, la manzana fue ocupada por la Compañía de Jesús y a principios de 1900 se construyó la Casa de Gobierno inaugurada en 1913, actual Palacio de Justicia desde 2022. Al oeste se encontraban el Cabildo y la cárcel. Al sur, en la esquina la Orden Dominica o de Predicadores. En el centro de la cuadra, se ubicaba la antigua casa de Gobierno, (ex fábrica de alfombras). En la otra esquina, el cuartel, construido por orden de Don Pablo Lucero y reconstruido por el gobernador Toribio Mendoza en 1881. Al este, se encontraba la Iglesia Matriz, casa del sacerdote, huerta, casa de esclavos y el cementerio.",
        audio: "audios/plaza_independencia.mp3",
        imagen: "images/Encabezado.png",
        galeria: "fotos/plaza_independencia",
        coordenadas: [-33.30748096417144, -66.33549533413104]
    },
    {
        nombre: "Municipalidad de San Luis",
        descripcion: "El edificio se inauguró el 26 de julio de 1909, como Banco de la Nación Argentina, sucursal San Luis. Cumplió ese destino hasta el año 1954, en que la Intendencia Municipal se instaló en ese solar.\n\nEl arquitecto responsable de la obra fue Salvador Mirate, nacido en Nápoles y llegado al país en 1887. El diseño arquitectónico de su obra puede situarse conceptualmente en una etapa de transición entre el Academicismo Historicista Ecléctico y las corrientes renovadoras del Art Nouveau. En el salón perdura la bóveda del banco y en el patio central la ex fuente adornada con granito rojo dragón y faroles ornamentales de antiguo estilo.\n\nEste edificio, por su valor arquitectónico, fue declarado Bien de Pertenencia al Patrimonio Cultural de la Provincia, mediante Decreto N° 1899-MCyE –(SEC), del 22 de agosto de 1994.",
        audio: "audios/municipalidad.mp3",
        imagen: "images/Encabezado.png",
        galeria: "fotos/municipalidad",
        coordenadas: [-33.3059063935802, -66.33643999387245]
    },
    {
        nombre: "Antiguo Cuartel y Cárcel de Mujeres",
        descripcion: "En tiempos de la fundación de la ciudad, este solar era el potrero de la orden dominica. \n\nEn 1846 el gobernador Pablo Lucero ordenó construir un cuartel, para reemplazar el antiguo que se encontraba frente a la actual plaza Pringles.\n\nEste cuartel enfrentó dos días de sitio impuestos a la ciudad por el caudillo Vicente “Chacho” Peñaloza en 1862. En el año 1865, se reclutaron soldados para marchar a la Guerra contra Paraguay.\n\nEn 1879, el gobernador Toribio Mendoza mandó a construir un edificio más grande y anexar el Departamento de Policía. En 1881 se inaugura el edificio construido por Juan Robelli, que contaba con cuadra de soldados, patios para formaciones, caballerizas, sótanos, celdas y patios enrejados.",
        audio: "audios/antiguo_cuartel.mp3",
        imagen: "images/Encabezado.png",
        galeria: "fotos/antiguo_cuartel",
        coordenadas: [-33.3080554317389, -66.33479681295381]
    },
    {
        nombre: "Banco Hipotecario",
        descripcion: "En 1871 existía en este solar una imponente mansión perteneciente a Víctor Lucero; reconocido político radical, que ocupó destacados puestos en el gobierno a nivel provincial y nacional y participó de la revolución radical en 1893.\n\nFue amigo personal de Sarmiento, Avellaneda, Frías, Rawson, Elizalde, Rocha, Victorino de la Plaza, Quintana y Bernardo de Irigoyen. Se alojó en su casa Domingo Faustino Sarmiento, la última vez en 1884. Julio Argentino Roca se alojó dos veces, en 1882 y en 1885, mientras que Leandro N. Alem lo hizo en 1892.\n\nEn 1939 la vivienda ya había sido demolida y en su lugar, se construyó el Banco Hipotecario Nacional.",
        audio: "audios/banco_hipotecario.mp3",
        imagen: "images/Encabezado.png",
        galeria: "fotos/banco_hipotecario",
        coordenadas: [-33.30118329867334, -66.33629335956732]
    },
    {
        nombre: "Centro artesanal Juan Martín de Porres",
        descripcion: "Fue parte del solar que la Orden Dominica utilizaba de potrero. En 1879, el gobernador Toribio Mendoza mandó a construir el Departamento de Policía y en 1881 se inaugura el edificio construido por Juan Robelli, pero en 1890 el gobernador Mauricio Orellano, temiendo un ataque, ocupó el edificio y lo designó Casa de Gobierno.\n\nEntre los años 1920 y 1930 fue sede de los Tribunales hasta que éstos tuvieron su edificio propio.\n\nSe conoce a este solar como la Ex fábrica de alfombras, porque en 1949 la fábrica fue habilitada por la firma Gobelinos. Hacia 1954, el Gobierno provincial se hizo cargo del establecimiento y le impuso el nombre “Fábrica Provincial de Alfombras” hasta 1968. La fábrica reinició sus actividades bajo la conducción de la congregación de los Padres Dominicos en el año 1974, bajo el nombre de Centro Artesanal San Martín de Porres.",
        audio: "audios/juan_martin_de_porres.mp3",
        imagen: "images/Encabezado.png",
        galeria: "fotos/juan_martin_de_porres",
        coordenadas: [-33.308110739229214, -66.33532042910197]
    },
    {
        nombre: "Honorable Consejo Deliberante",
        descripcion: "Fue residencia del Juan A. Barbeito, quien ocupara importantes cargos públicos a mediados del siglo XIX. \n\nPrimera casa de altos construida en la provincia; la fachada cuenta con nueve ventanas y una puerta de grandes dimensiones. Se ingresa por un amplio zaguán que da acceso a distintas salas y habitaciones. La galería superior presenta un rústico envigado, de madera dura trabajada en hachuela, que sostiene el techo de la galería.\n\nLos balcones de hierro del piso superior, las rejas de las ventanas de la planta baja, los herrajes y la carpintería de madera de las aberturas son originales.\n\nEn 1991 esta casona se destinó al funcionamiento del Honorable Concejo Deliberante. ",
        audio: "audios/consejo_deliberante.mp3",
        imagen: "images/Encabezado.png",
        galeria: "fotos/consejo_deliberante",
        coordenadas: [-33.30438475976518, -66.33418427126456]
    },
    {
        nombre: "Templo de Santo Domingo",
        descripcion: "En 1691 el Gobernador Marín de Poveda entregó la manzana a la Orden de los Dominicos. Allí se fundó la primera escuela de San Luis, denominada Escuela del Rey y, desde 1810, llamada Escuela de la Patria.\n\nEl primer santuario se derrumbó hacia 1811 Hacia 1836, el gobernador José Gregorio Calderón y el Padre Fray Hilarión de Etura emprenden la construcción de uno nuevo.\n\nEn el piso del templo fueron sepultados el gobernador José Gregorio Calderón, su esposa y la esposa del constructor, otros vecinos destacados y el Obispo de Cuyo, Fray Nicolás Aldazor.\n\nEn 1868, Amado Cousinet construye la espadaña durante la gobernación de Justo Daract. Hacia 1875 se le adosan habitaciones posteriores en la pared sur para reforzar el edificio luego de un terremoto.\n\nEntre 1903 y 1907, el templo fue remodelado por Carlos Deluigi. Se levantaron los techos, se les puso madera dura, ladrillo cocido y tejas en el exterior, también falsas columnas y cornisas en el interior y se agregaron dos campanas a la espadaña.\n\nEn 1930, los dominicos españoles proponen construir una nueva iglesia de estilo árabe granadino. Para realzar el nuevo edificio, en 1940 se demolió la espadaña y la parte delantera del viejo templo. El Gobernador Toribio Mendoza (h) logró adquirir para el gobierno provincial el edificio ya desacralizado, con la intención de crear un museo de arte religioso.",
        audio: "audios/templo_de_santo_domingo.mp3",
        imagen: "images/Encabezado.png",
        galeria: "fotos/templo_santo_domingo",
        coordenadas: [-33.30821135628458, -66.3357699933464]
    },
    {
        nombre: "Ex estación de trenes",
        descripcion: "El Ferrocarril llegó a San Luis durante la presidencia de Julio Argentino Roca y la gobernación del Zoilo Concha, en 1882. El tendido se llamó Ferrocarril Andino y permitía la salida de productos agropecuarios, mineros y el transporte de pasajeros. La primera estación estaba ubicada sobre la calle Ejército de los Andes, actual Universidad Nacional de San Luis.\n\nDurante la presidencia de Miguel Juárez Celman fue privatizado y en 1887 pasó a llamarse Ferrocarril del Gran Oeste Argentino.\n\nEn el curso de la presidencia de José Figueroa Alcorta y la gobernación de Esteban Adaro, en 1907 se inauguró el nuevo edificio del ramal Ferrocarril de Buenos Aires al Pacífico sobre la avenida Lafinur y bulevar Quintana (actual avenida Illia).  \n\nEn 1993 el tren corrió por última vez en esta ciudad y la ex estación se transformó en el Centro Cultural Municipal José La Vía a finales de 2015.\n\nEl edificio de la estación y el predio aledaño fueron declarados de Interés Histórico y Patrimonial de la Ciudad de San Luis por Decreto Municipal N° 1299-06 SdeG y Ordenanza del Concejo Deliberante 3067-06. El Gobierno Nacional cedió de comodato el edificio a la Municipalidad de San Luis.",
        audio: "audios/ex_estación_de_trenes.mp3",
        imagen: "images/Encabezado.png",
        galeria: "fotos/ex_estación_de_trenes",
        coordenadas: [-33.29918799501542, -66.34842224598148]
    },
    {
        nombre: "Ex Casa de Gobierno",
        descripcion: "Al distribuir los solares, la manzana norte frente a la Plaza Mayor fue asignada a la Orden Jesuita, la esquina de las actuales Rivadavia y 9 de julio estaba ocupada por el Colegio. Cuando la orden fue expulsada de América en 1767, la manzana fue vendida a diferentes familias de la ciudad.\n\nLa obra fue proyectada por el Ing. Carlos Massini, de la Dirección de Arquitectura de la Nación y diseñada por los arquitectos Olivieri y Dieudonné, durante la Gobernación de Adolfo “El Pampa” Rodríguez Saá. Su lenguaje arquitectónico es Renacentista, italianizante con toques de academicismo francés.\n\nEmpresarios locales estuvieron a cargo de la obra. De Villa Mercedes, la empresa  Guillet y Serpes. La empresa La Yesera se dedicó a la decoración interna del edificio y los revestimientos en cemento. Por falta de fondos para terminarla, el interior tiene diferentes acabados, algunos muy bien terminados, como en el Despacho del ejecutivo y el Salón Blanco, y otros más sencillos.\n\nEl gobernador Justo Daract inauguró el edificio en 1917 y fue Casa de Gobierno hasta el 9 de julio de 2010, cuando se inauguró el Complejo Terrazas del Portezuelo. Desde entonces el inmueble es sede de Tribunales.",
        audio: "audios/ex_casa_de_gobierno.mp3",
        imagen: "images/Encabezado.png",
        galeria: "fotos/ex_casa_de_gobierno",
        coordenadas: [-33.306766192166705, -66.3354981708698]
    },
    {
        nombre: "Paseo del Padre",
        descripcion: "Allí se encontraba el Mercado Municipal. Se dispuso su construcción en junio de 1875, siendo inaugurado el 1 de junio de 1879 como Mercado Público propiedad del Municipio.\n\nEn 1920 un incendio en un local sobre la calle Colón obliga a demoler los restos. Durante la gobernación de Alberto Arancibia Rodríguez, en 1927, comienza la construcción del edificio proyecto de los constructores Espí y Regués, siendo inaugurado el 24 de mayo de 1929\n\nEra un edificio de estilo inglés, de 2.010,35 metros cuadrados de superficie cubierta, muros de mampostería de ladrillos, techos con cabreada de hierro y chapa de zinc. Los pisos eran de mosaicos, las paredes interiores revestidas con azulejos y las exteriores revocadas a la cal; alumbrado eléctrico y teléfono para servicio público\n\nEn el interior se disponían los puestos de venta. Al centro del edificio quedaba un gran espacio de circulación donde se encontraba una despensa, el acceso a sanitarios y sótano. Contaba con una amplia playa por la calle Colón para acceder a la Plazoleta del Mercado, usada para la carga y descarga de mercaderías traídas desde las quintas cercanas a la ciudad. Sobre calle Rivadavia se encontraba otra playa con un pequeño edificio circular con baños públicos\n\nA fines de 1966, bajo un gobierno de facto, se resuelve el cierre y demolición del mercado municipal por falta de higiene y seguridad sanitaria\n\nEl actual Paseo del Padre, ubicado en el centro de la ciudad, une las calles Colón y Rivadavia y fue inaugurado el 20 de marzo de 2013 como paseo artesanal. Tras un incendio en agosto del 2020, se inauguró renovado el 19 de enero de 2022. Posee una moderna fachada que rememora el antiguo Mercado Municipal y cuenta con 40 stands para exposición y venta de productos artesanales.",
        audio: "audios/paseo_del_padre.mp3",
        imagen: "images/Encabezado.png",
        galeria: "fotos/paseo_del_padre",
        coordenadas: [-33.30064748943708, -66.3357412855097]
    },
    {
        nombre: "Ex Solar del Cabildo",
        descripcion: "El Cabildo y la cárcel se encontraban frente a la Plaza Mayor, en la esquina actual de San Martín y 9 de Julio. Era un edificio muy sencillo, con una construcción lindera utilizada como cárcel. Se proyectó construir un nuevo Cabildo de dos plantas pero no se concretó\n\nYa muy deteriorado el Cabildo fue reparado después de 1854 y siguió en funciones hasta 1881, año en se inaugura el edificio de la Policía que cumplió funciones de Casa de Gobierno hasta 1917 \n\nEl gobernador Ricardo Rodríguez Saá dispone construir en el solar del viejo Cabildo un edificio para la Legislatura, el cual es inaugurado por el gobernador Toribio Mendoza (h) en 1938\n\nPor Decreto 1456/81 el solar es declarado lugar histórico nacional en 1981.",
        audio: "audios/solar_del_cabildo.mp3",
        imagen: "images/Encabezado.png",
        galeria: "fotos/solar_del_cabildo",
        coordenadas: [-33.307315095186866, -66.33634598622118]
    }
];

// Añadir marcadores numerados y eventos para los puntos turísticos
puntosTuristicos.forEach((punto, index) => {
    const marker = L.marker(punto.coordenadas, {
        icon: L.divIcon({
            className: 'custom-div-icon',
            
            html: `<div style="color: white;background: rgba(0,57,116);border-radius: 50%;width: 40px;height: 40px;display: flex;align-items: center;justify-content: center;font-size: 16px;font-weight: bold;line-height: 1;" class="number-icon">${index + 1}</div>`,
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
        'fotos/palacio_mollo': ['foto1.png', 'foto2.png', 'foto3.png', 'foto4.png','foto5.png', 'foto6.png'],
        'fotos/templo_santo_domingo': ['foto1.png', 'foto2.png', 'foto3.png', 'foto4.png','foto5.png'],
        'fotos/plaza_pringles': ['foto1.png', 'foto2.png', 'foto3.png', 'foto4.png','foto5.png','foto6.png'],
        'fotos/plaza_independencia': ['foto1.png', 'foto2.png'],
        'fotos/paseo_del_padre': ['foto1.png', 'foto2.png', 'foto3.png', 'foto4.png','foto5.png'],   // Puedes añadir más listas según tus carpetas
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
