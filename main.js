
/*===========================================================================================*/
/*======================================BASE DE DATOS========================================*/
/*===========================================================================================*/

let mis_cursos = [
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
        localStorage.setItem("cursos", JSON.stringify(mis_cursos));
}

const cargarCursosPrecargados = () =>{
    console.log("hello");
    let contenedor = document.getElementById("contenedor_cursos_precargados");
    let cursos_precargados = JSON.parse(localStorage.getItem("cursos"));
    cursos_precargados.forEach((element) => {
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

        //document.getElementById("nuevos_cursos").style.display = 'none';
        document.getElementById("agregar_cursos1").style.display = 'none';
        document.getElementById("agregar_cursos2").style.display = 'none';
        
    } else {
        console.log("ok");
        console.log(localStorage.getItem("cursos"));
    }
}

//ESTO ES LO QUE QUIERO QUE PASE CUANDO SE ABRA LA PÁGINA

const cargarPagina = () =>{

    if (localStorage.getItem("cursos")) {
        verificarLogin();
        mis_cursos = JSON.parse(localStorage.getItem("cursos"));
        cargarCursosPrecargados();
        escucharBotones();
        //variable_para_controlar_carga_de_datos = "b";
    } else {
        verificarLogin();
        cargarCursos();
        escucharBotones();
        //variable_para_controlar_carga_de_datos = "b";
    }   
}

//ESTO ES PARA AGREGAR UN ELEMENTO AL CARRITO

//AGREGAR AL CARRITO

//FUNCION PARA ABREVIATURA DE CURSOS PARA EL CARRITO
function Curso(pnombre_curso, pimagen, pprecio){
    this.nombre_curso = pnombre_curso,
    this.imagen = pimagen,
    this.precio = pprecio
}

//FUNCION PARA CREAR CURSOS
function Curso(id, imagen, nombre, descripcion, precio){
    this.id = id;
    this.imagen = imagen;
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.precio = precio;
}


function agregarAlCarrito(id){
    
    let carrito = [];
    if(localStorage.getItem("carrito")){
        carrito = JSON.parse(localStorage.getItem("carrito"));
    }
    
    for (const iterator of mis_cursos) {
        if (iterator.id == id) {
            console.log(iterator.imagen);
            carrito.push(iterator)
        }        
    }
    
    localStorage.setItem("carrito", JSON.stringify(carrito));  
    
    localStorage.setItem("variable_para_abrir", "b");
}

const escucharBotones =() =>{
    
    mis_cursos.forEach((element) =>{
        let id=element.id;
        let boton_agregar_al_carrito = document.getElementById(element.id);
        boton_agregar_al_carrito.addEventListener("click", ()=>agregarAlCarrito(element.id));
    })
}

window.onload = cargarPagina();


//ESTO ES PARA AGREGAR NUEVOS CURSOS A LA ACADEMIA


function getNombreDeimagen(){

    if(document.getElementById('imagen_curso').files[0]){
        var nombre = document.getElementById('imagen_curso').files[0].name;
        return nombre;
    }
    alert("Para agregar un curso debe completar todos los datos");
    limpiarDatos();
}

function agregarCurso(){


    //CAPTURO LOS DATOS

    let el_nombre_del_curso = document.getElementById("nombre_curso").value;
    let el_precio_del_curso = document.getElementById("precio_curso").value;
    let la_descripcion_del_curso = document.getElementById("descripcion_curso").value;
    let la_imagen_del_curso = getNombreDeimagen();

    if (!la_imagen_del_curso) {
        //no hago nada porque ya se envió un alert en otra función
    } else if(el_nombre_del_curso == "" || el_precio_del_curso == "" || la_descripcion_del_curso == ""){
        alert("Para agregar un curso debe completar todos los datos");
        limpiarDatos();
    } else {
        let nuevo_id = mis_cursos.length + 1;
        let nuevo_curso = new Curso(nuevo_id, la_imagen_del_curso, el_nombre_del_curso, la_descripcion_del_curso, el_precio_del_curso);
        mis_cursos.push(nuevo_curso);
        localStorage.setItem("cursos", JSON.stringify(mis_cursos));

        let contenedor = document.getElementById("contenedor_cursos_precargados");
        
        let div = document.createElement("div");
            div.innerHTML = 
            `<div class="main_disenno_flex_bloques_tarjetas">
            <figure class="main_disenno_flex_bloques_figure">
                <img src="../images/cursos_precargados/${la_imagen_del_curso}" alt=${la_imagen_del_curso}>
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
                <button id="${nuevo_id}" class="main_disenno_flex_bloques_boton">
                    <img src="../images/carrito_compras/carrito.png" alt="carrito">
                </button>
            </div>
        </div>`;
            localStorage.setItem("variable_para_abrir", "b");
            contenedor.append(div);
            limpiarDatos();
            escucharBotones();
    }
}

function limpiarDatos(){
    document.getElementById("nombre_curso").value="";
    document.getElementById("precio_curso").value="";
    document.getElementById("descripcion_curso").value="";
    document.getElementById('imagen_curso').value="";
}

//CAPTURO EL BOTON PARA AGREGARLE EL EVENTO CLICK

let boton_agregar_curso = document.getElementById("agregar_curso");
boton_agregar_curso.addEventListener("click", () => agregarCurso());




//ESTO ES PARA DESLOGUEAR

const desloguear=()=>{

        let cursos_que_existian = JSON.parse(localStorage.getItem("cursos"));
        localStorage.clear();
        localStorage.setItem("variable_para_abrir", "a");
        localStorage.setItem("cursos", JSON.stringify(cursos_que_existian));
        window.open("../index.html", "_self");
}

const logout = document.getElementById("logout");

logout.addEventListener("click", () => desloguear());
