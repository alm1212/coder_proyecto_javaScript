/*

function login_estudiante(){
    this.usuario = "estudiante@academy.com";
    this.password = "estudiante";
    localStorage.setItem("estudiante", JSON.stringify(login_estudiante));
}

function login_administrador(){
    this.usuario = "administrador@academy.com";
    this.password = "administrador";
    localStorage.setItem("estudiante", JSON.stringify(login_administrador));
}


let usuario = document.getElementById("email").value;
let password = document.getElementById("password").value;


function loguear(usuario, password){
    if(usuario === "estudiante@academy.com" && password === "estudiante" ){
        window.open("https://www.google.com/");
        //window.open("pages/cursos.html", "_self");
    }
    console.log(usuario);
}

//window.onload = console.log(usuario);
let boton_login = document.getElementById("boton_login");
boton_login.addEventListener("click", () => loguear("estudiante@academy.com", "estudiante"));
*/


//AGREGAR AL CARRITO

function Curso(pnombre_curso, pimagen, pprecio){
    this.nombre_curso = pnombre_curso,
    this.dimagen = pimagen,
    this.precio = pprecio
}

let carrito=[];
function agregarAlCarrito(pnombre_curso, pimagen, pprecio){

    let elCurso = new Curso(pnombre_curso, pimagen, pprecio);
    carrito.push(elCurso);
    //console.log(elCurso);
    console.log(carrito);

    localStorage.setItem("carrito", JSON.stringify(carrito));   
}

//ESTO ES PARA AGREGAR UN ELEMENTO AL CARRITO
let boton_agregar_al_carrito = document.getElementById("agregar_al_carrito");
boton_agregar_al_carrito.addEventListener("click", () => agregarAlCarrito(document.getElementById("nombre_del_curso").innerHTML, document.getElementById("imagen_del_curso").src,  document.getElementById("precio_del_curso").innerHTML));


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

//MANDO A EJECUTARSE LA FUNCION AL ABRIRSE LA PÁGINA
window.onload = verificarLogin();

//ESTO ES PARA DESLOGUEAR

const desloguear=()=>{
    localStorage.clear();
    window.open("../index.html");
}

const logout = document.getElementById("logout");

logout.addEventListener("click", () => desloguear());
