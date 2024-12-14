// PRODUCTOS
const productos = [
    // Consolas
    {
        id: "play station-01",
        titulo: "Play Station Clasica",
        imagen: "https://http2.mlstatic.com/D_NQ_NP_845684-MLU70030968913_062023-O.webp",
        categoria: {
            nombre: "consolas",
            id: "consolas"
        },
        precio: 310900
    },
    {
        id: "play Station-02",
        titulo: "Play Station 2",
        imagen: "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2018/09/ps2.jpg?tf=3840x",
        categoria: {
            nombre: "consolas",
            id: "consolas"
        },
        precio: 379900
    },
    {
        id: "play station-03",
        titulo: "Play Station 3",
        imagen: "https://fotografias-neox.atresmedia.com/clipping/cmsimages02/2016/11/25/AE7C405B-25BB-4275-A61E-2DDA14DE5053/98.jpg?crop=1280,720,x0,y0&width=1900&height=1069&optimize=high&format=webply",
        categoria: {
            nombre: "conoslas",
            id: "consolas"
        },
        precio: 799900
    },
    {
        id: "play station-04",
        titulo: "Play Station 4",
        imagen: "https://www.internetmatters.org/wp-content/uploads/2018/01/PlayStation-4-image.jpg",
        categoria: {
            nombre: "consolas",
            id: "consolas"
        },
        precio: 1399900
    },
    {
        id: "play station-05",
        titulo: "Play Station 5",
        imagen: "https://blog.latam.playstation.com/tachyon/sites/3/2023/10/e08941a3d4b8ac23d60cbf6304e829e2e7a775b7.png?resize=1088%2C612&crop_strategy=smart",
        categoria: {
            nombre: "consolas",
            id: "consolas"
        },
        precio: 2389900
    },
    {
        id: "play station-06",
        titulo: "Play Station Portable",
        imagen: "https://m.media-amazon.com/images/I/81ekzM71E0L.jpg",
        categoria: {
            nombre: "consolas",
            id: "consolas"
        },
        precio: 644900
    },
    {
        id: "play station-07",
        titulo: "Play Station Go",
        imagen: "https://m.media-amazon.com/images/I/615xZX4S75L._AC_UF1000,1000_QL80_.jpg",
        categoria: {
            nombre: "consolas",
            id: "consolas"
        },
        precio: 529900
    },
    {
        id: "play station-08",
        titulo: "Play Station Portal",
        imagen: "https://blog.es.playstation.com/tachyon/sites/14/2024/11/a4d66a97c930c4b1682c7a170a6b6c0ccaffe952.jpg?resize=1088%2C612&crop_strategy=smart",
        categoria: {
            nombre: "consolas",
            id: "consolas"
        },
        precio: 1179900
    },
    {
        id: "play station-09",
        titulo: "Play Station VR",
        imagen: "https://i.ytimg.com/vi_webp/-n_O8s6Eaps/maxresdefault.webp",
        categoria: {
            nombre: "consolas",
            id: "consolas"
        },
        precio: 2655900
    },
    // mandos
    {
        id: "mandos-01",
        titulo: "Mando Play Clasica 01",
        imagen: "https://http2.mlstatic.com/D_NQ_NP_766886-MCO73071886777_112023-O.webp",
        categoria: {
            nombre: "mandos",
            id: "mandos"
        },
        precio: 29900
    },
    {
        id: "mandos-02",
        titulo: "Mando Play Station 2",
        imagen: "https://http2.mlstatic.com/D_NQ_NP_773219-MCO41992587714_052020-O.webp",
        categoria: {
            nombre: "mandos",
            id: "mandos"
        },
        precio: 32900
    },
    {
        id: "mandos-03",
        titulo: "Mando Play Station 3",
        imagen: "https://http2.mlstatic.com/D_NQ_NP_757458-MLA53486418774_012023-O.webp",
        categoria: {
            nombre: "mandos",
            id: "mandos"
        },
        precio: 38900
    },
    {
        id: "mandos-04",
        titulo: "Mando Play Station 4",
        imagen: "https://http2.mlstatic.com/D_NQ_NP_653631-MLU78445258026_082024-O.webp",
        categoria: {
            nombre: "mandos",
            id: "mandos"
        },
        precio: 130000
    },
    {
        id: "mandos-05",
        titulo: "Mando Play Station 5",
        imagen: "https://http2.mlstatic.com/D_NQ_NP_745669-MLU74254046034_022024-O.webp",
        categoria: {
            nombre: "mandos",
            id: "mandos"
        },
        precio: 334900
    },
        {
            id: "mandos-06",
        titulo: "Mando DualSense Edge Play Station ",
        imagen: "https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2022/08/dualsense-edge-2793067.jpg",
        categoria: {
            nombre: "mandos",
            id: "mandos"
        },
        precio: 1069900
    },
    
        {
            id: "mandos-06",
        titulo: "Mando backbone One",
        imagen: "https://i.blogs.es/61d6f9/4k_4/450_1000.png",
        categoria: {
            nombre: "mandos",
            id: "mandos"
        },
        precio: 773900
    },
    
//Suscripcion
    {
        id: "suscripcion-01",
        titulo: "Suscripcion Essential",
        imagen: "https://juegosdigitalescolombia.com/files/images/productos/1695156182-psn-plus-essential-12-meses-cuenta-principal-ps4-0.jpg",
        categoria: {
            nombre: "suscripcion",
            id: "suscripcion"
        },
        precio: 180000
    },
    {
        id: "suscripcion-02",
        titulo: "Suscripcion Extra",
        imagen: "https://juegosdigitalescolombia.com/files/images/productos/1695156121-psn-plus-extra-12-meses-cuenta-principal-ps4-0.jpg",
        categoria: {
            nombre: "suscripcion",
            id: "suscripcion"
        },
        precio: 219900
    },
    {
        id: "suscripcion-03",
        titulo: "Suscripcion Deluxe",
        imagen: "https://juegosdigitalescolombia.com/files/images/productos/1695155899-psn-plus-deluxe-12-meses-cuenta-principal-ps5-0.jpg",
        categoria: {
            nombre: "suscripcion",
            id: "suscripcion"
        },
        precio: 289900
    },
//Juegos
    {
        id: "juegos-01",
        titulo: "Spider-Man 2",
        imagen: "https://m.media-amazon.com/images/I/81DC-janmJL._AC_SL1500_.jpg",
        categoria: {
            nombre: "juegos",
            id: "juegos"
        },
        precio: 280000
    },
    {
        id: "juegos-02",
        titulo: "Metal Gear Solid Master Collection Vol. 1",
        imagen: "https://m.media-amazon.com/images/I/81ztHGD1XiL._AC_SX342_.jpg",
        categoria: {
            nombre: "juegos",
            id: "juegos"
        },
        precio: 199900
    },
    {
        id: "juegos-03",
        titulo: "Forspoken",
        imagen: "https://m.media-amazon.com/images/I/81V03q2hwHL._AC_SX342_.jpg",
        categoria: {
            nombre: "juegos",
            id: "juegos"
        },
        precio: 134900
    },
    {
        id: "juegos-04",
        titulo: "Hogwarts Legacy",
        imagen: "https://m.media-amazon.com/images/I/811m+JsGAzL._AC_SX342_.jpg",
        categoria: {
            nombre: "juegos",
            id: "juegos"
        },
        precio: 264900
    },
    {
        id: "juegos-05",
        titulo: "God of War Ragnarok",
        imagen: "https://m.media-amazon.com/images/I/814wINlWcrL._AC_SL1500_.jpg",
        categoria: {
            nombre: "juegos",
            id: "juegos"
        },
        precio: 239900
    },
    {
        id: "juegos-06",
        titulo: "The Last Of Us Parte I PS5 - Remake",
        imagen: "https://m.media-amazon.com/images/I/815ng-+eeSL._AC_SL1500_.jpg",
        categoria: {
            nombre: "juegos",
            id: "juegos"
        },
        precio: 259300
    },
    {
        id: "juegos-07",
        titulo: "Stray",
        imagen: "https://m.media-amazon.com/images/I/717w5ZCykZL._AC_SL1500_.jpg",
        categoria: {
            nombre: "juegos",
            id: "juegos"
        },
        precio: 160000
    },
    {
        id: "juegos-08",
        titulo: "Sonic Frontiers",
        imagen: "https://m.media-amazon.com/images/I/81ulrCZwsDL._AC_SL1500_.jpg",
        categoria: {
            nombre: "juegos",
            id: "juegos"
        },
        precio: 200000
    },
    //accesorios
    {
        id: "accesorios-01",
        titulo: "Auriculares Pulse 3D",
        imagen: "https://i.blogs.es/b57034/pulse-3d/1024_2000.jpg",
        categoria: {
            nombre: "accesorios",
            id: "accesorios"
        },
        precio: 449900
    },
    {
        id: "accesorios-02",
        titulo: "Cámara HD para PS5",
        imagen: "https://i.blogs.es/00fa34/camara_hd/1024_2000.jpg",
        categoria: {
            nombre: "accesorios",
            id: "accesorios"
        },
        precio: 233900
    },
    {
        id: "accesorios-03",
        titulo: " Estación de recarga DualSense",
        imagen: "https://i.blogs.es/ac6a7d/estacion-de-carga/1024_2000.jpg",
        categoria: {
            nombre: "accesorios",
            id: "accesorios"
        },
        precio: 88900
    },
    {
        id: "accesorios-04",
        titulo: "Disco Duro-Seagate Game Drive",
        imagen: "https://i.blogs.es/b7962a/seagate_game_drive/1024_2000.jpg",
        categoria: {
            nombre: "accesorios",
            id: "accesorios"
        },
        precio: 573900
    },
    {
        id: "accesorios-05",
        titulo: " Thrustmaster T-GT II Pack",
        imagen: "https://i.blogs.es/00c1c8/thrustmaster-t-gt-ii-pack/1024_2000.jpg",
        categoria: {
            nombre: "accesorios",
            id: "accesorios"
        },
        precio: 730000
    },
    {
        id: "accesorios-06",
        titulo: "Volante Apex de HORI",
        imagen: "https://i.blogs.es/e8113a/volante-apex-de-hori/1024_2000.jpg",
        categoria: {
            nombre: "accesorios",
            id: "accesorios"
        },
        precio: 699900
    }
];

const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito");

function cargarProductos(productosElegidos) {

    contenedorProductos.innerHTML = "";

    productosElegidos.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="producto-detalles">
                <h3 class="producto-titulo">${producto.titulo}</h3>
                <p class="producto-precio">$${producto.precio}</p>
                <button class="producto-agregar" id="${producto.id}">Agregar</button>
            </div>
        `;

        contenedorProductos.append(div);
    })

    actualizarBotonesAgregar();
}

cargarProductos(productos);

botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {

        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        if (e.currentTarget.id != "todos") {
            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
            tituloPrincipal.innerText = productoCategoria.categoria.nombre;
            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosBoton);
        } else {
            tituloPrincipal.innerText = "Todos los productos";
            cargarProductos(productos);
        }

    })
});

function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto-agregar");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });
}

let productosEnCarrito;

let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");

if (productosEnCarritoLS) {
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
    actualizarNumerito();
} else {
    productosEnCarrito = [];
}

function agregarAlCarrito(e) {
    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);

    if(productosEnCarrito.some(producto => producto.id === idBoton)) {
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
    } else {
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }

    actualizarNumerito();

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}

function actualizarNumerito() {
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numerito.innerText = nuevoNumerito;
}