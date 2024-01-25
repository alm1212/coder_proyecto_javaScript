
/*===========================================================================================*/
/*======================================BASE DE DATOS========================================*/
/*===========================================================================================*/

const mis_cursos = [
    /*id, imagen, nombre, descripcion, precio*/
    {id:1, imagen:"html.webp", nombre:"HTML 5", descripcion:"El Lenguaje de Marcado de Hipertexto (HTML) es el código que se utiliza para estructurar y desplegar una página web y sus contenidos. Por ejemplo, sus contenidos podrían ser párrafos, una lista con viñetas, o imágenes y tablas de datos.", precio:5200},
    {id:2, imagen:"css.jpg", nombre:"CSS", descripcion:"CSS son las siglas en inglés para «hojas de estilo en cascada» (Cascading Style Sheets). Básicamente, es un lenguaje que maneja el diseño y presentación de las páginas web, es decir, cómo lucen cuando un usuario las visita. Funciona junto con el lenguaje HTML que se encarga del contenido básico de los sitios.", precio:4100},
    {id:3, imagen:"javascript.jpg", nombre:"JAVASCRIPT", descripcion:"JavaScript es un lenguaje de programación que los desarrolladores utilizan para hacer páginas web interactivas. Desde actualizar fuentes de redes sociales a mostrar animaciones y mapas interactivos, las funciones de JavaScript pueden mejorar la experiencia del usuario de un sitio web.", precio:3200},
    {id:4, imagen:"react.png", nombre:"REACT", descripcion:"React (también llamada React. js o ReactJS) es una librería Javascript de código abierto diseñada para crear interfaces de usuario con el objetivo de facilitar el desarrollo de aplicaciones en una sola página. Es mantenido por Facebook y la comunidad de software libre.", precio:4500},
]



/*===========================================================================================*/
/*==============================TERMINA BASE DE DATOS========================================*/
/*===========================================================================================*/
//MANDO A EJECUTARSE LA FUNCION AL ABRIRSE LA PÁGINA
//FUNCIÓN PARA CARGAR LOS CURSOS DESDE LA BASE DE DATOS

const cargarCursos = () =>{

    let aumento=1;
    let contenedor = document.getElementById("contenedor_cursos_precargados");
        mis_cursos.forEach((element) => {
            let div = document.createElement("div");
            div.innerHTML = 
            `<div class="main_disenno_flex_bloques_tarjetas">
                <figure class="main_disenno_flex_bloques_figure">
                    <img src="../images/cursos_precargados/${element.imagen}" alt=${element.imagen}>
                </figure>
            <div class="main_disenno_flex_bloques_textos_h1">
                <h1>${element.nombre}</h1>
                <p id="curso_id" class="el_id">${element.id}</p>
            </div>
            <article class="main_disenno_flex_bloques_textos">
                <p><br>${element.descripcion}</p>
                <div class="main_disenno_flex_bloques_textos_precio">
                    <h1><br>UYU</h1>
                    <h1 class="main_disenno_flex_bloques_textos_precio_valor"><br>${element.precio}</h1>
                </div>
            </article>
            <div class="main_disenno_flex_bloques_comprar">
                <button id="${element.id}" class="main_disenno_flex_bloques_boton">
                    <img src="../images/carrito_compras/carrito.png" alt="carrito">
                </button>
            </div>
        </div>`;
            contenedor.append(div);
        })
}

//ESTO ES PARA OCULTAR LA SECCIÓN DE AGREGAR CURSO SI NO ESTÁ EL ADMINISTRADOR LOGUEADO

const verificarLogin = () =>{
    const usuario = localStorage.getItem("el_usuario");
    if (usuario === "estudiante") {

        document.getElementById("agregar_cursos1").style.display = 'none';
        document.getElementById("agregar_cursos2").style.display = 'none';
        
    } else {
        console.log("ok");
    }
}
const cargarPagina = () =>{
    console.log("entró");
    verificarLogin();
    cargarCursos();
    escucharBotones();
}

//ESTO ES PARA AGREGAR UN ELEMENTO AL CARRITO

//AGREGAR AL CARRITO


function Curso(pnombre_curso, pimagen, pprecio){
    this.nombre_curso = pnombre_curso,
    this.imagen = pimagen,
    this.precio = pprecio
}

let carrito=[];
function agregarAlCarrito(id){
    
    for (const iterator of mis_cursos) {
        if (iterator.id == id) {
            console.log(iterator.imagen);
            let elCurso = new Curso(iterator.nombre, iterator.imagen, iterator.precio);
            carrito.push(elCurso)
        }        
    }
    
    localStorage.setItem("carrito", JSON.stringify(carrito));   
}

const escucharBotones =() =>{
    mis_cursos.forEach((element) =>{
        let id=element.id;
        console.log(id);
        let boton_agregar_al_carrito = document.getElementById(element.id);
        console.log(boton_agregar_al_carrito.innerHTML);
        boton_agregar_al_carrito.addEventListener("click", ()=>agregarAlCarrito(element.id));
    })
}

window.onload = cargarPagina();









//boton_agregar_al_carrito.addEventListener("click", ()=>console.log("lala"));
// boton_agregar_al_carrito.addEventListener("click", () => agregarAlCarrito(document.getElementById("curso_id"), document.getElementById("nombre_del_curso").innerHTML, document.getElementById("imagen_del_curso").src,  document.getElementById("precio_del_curso").innerHTML));


//ESTO ES PARA AGREGAR NUEVOS CURSOS

function agregarCurso(){


    //CAPTURO LOS DATOS

    let el_nombre_del_curso = document.getElementById("nombre_curso").value;
    let el_precio_del_curso = document.getElementById("precio_curso").value;
    let la_descripcion_del_curso = document.getElementById("descripcion_curso").value;
    let la_imagen_del_curso = getNombreDeimagen();

    console.log(el_nombre_del_curso, el_precio_del_curso, la_descripcion_del_curso, la_imagen_del_curso);
    let contenedor = document.getElementById("contenedor_de_tarjetas");
    
    let div = document.createElement("div");
        div.innerHTML = 
        `<div class="main_disenno_flex_bloques_tarjetas">
        <figure class="main_disenno_flex_bloques_figure">
            <img src="../images/cursos_para_cargar/${la_imagen_del_curso}" alt=${la_imagen_del_curso}>
        </figure>
        <div class="main_disenno_flex_bloques_textos_h1">
            <h1>${el_nombre_del_curso}</h1>
            <p id="curso_id" class="el_id">1</p>
        </div>
        <article class="main_disenno_flex_bloques_textos">
            <p><br>${la_descripcion_del_curso}</p>
            <div class="main_disenno_flex_bloques_textos_precio">
                <h1><br>UYU</h1>
                <h1 class="main_disenno_flex_bloques_textos_precio_valor"><br>${el_precio_del_curso}</h1>
            </div>
        </article>
        <div class="main_disenno_flex_bloques_comprar">
            <button class="main_disenno_flex_bloques_boton">
                <img src="../images/carrito_compras/carrito.png" alt="carrito">
            </button>
        </div>
    </div>`;
        contenedor.append(div);

        limpiarDatos();
}

function limpiarDatos(){
    document.getElementById("nombre_curso").value="";
    document.getElementById("precio_curso").value="";
    document.getElementById("descripcion_curso").value="";
    document.getElementById('imagen_curso').value="";

    //limpiar variables
    el_nombre_del_curso ="";
    el_precio_del_curso ="";
    la_descripcion_del_curso ="";
    la_imagen_del_curso = "";    
}



function getNombreDeimagen(){
    var nombre = document.getElementById('imagen_curso').files[0].name;
    return nombre;
}

//CAPTURO EL BOTON PARA AGREGARLE EL EVENTO CLICK

let boton_agregar_curso = document.getElementById("agregar_curso");
boton_agregar_curso.addEventListener("click", () => agregarCurso());




//ESTO ES PARA DESLOGUEAR

const desloguear=()=>{
    localStorage.clear();
    window.open("../index.html", "_self");
}

const logout = document.getElementById("logout");

logout.addEventListener("click", () => desloguear());

/*
    } else {
       
    } */
