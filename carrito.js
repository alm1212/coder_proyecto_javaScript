//función para leer el local storage y mostrar los productos del carrito


function leerLocalStorage(){
    
    let productos = []; 
    let los_productos = JSON.parse(localStorage.getItem("carrito"));   

    productos = los_productos;
    let contenedor = document.getElementById("contenedor");

    productos.forEach(element => {
        let div = document.createElement("div");
        div.innerHTML = 
            `<div id="1" class="main_disenno_flex_bloques_tarjetas">
            <figure class="main_disenno_flex_bloques_figure">
                <img id="imagen_del_curso" src="${element.dimagen}" alt="html5">
            </figure>
            <div class="main_disenno_flex_bloques_textos_h1">
                <h1 id="nombre_del_curso">${element.nombre_curso}</h1>
            </div>
            <article class="main_disenno_flex_bloques_textos">
                <div class="main_disenno_flex_bloques_textos_precio">
                    <h1>UYU</h1>
                    <h1 id="precio_del_curso" class="main_disenno_flex_bloques_textos_precio_valor">${element.precio}</h1>
                </div> 
            </article>
            </div>`;
            contenedor.append(div);
    });
}

/*===========================================================*/
/*=====MANDO A EJECUTARSE LA FUNCIÓN AL ABRIRSE LA PÁGINA====*/
/*===========================================================*/

window.onload = leerLocalStorage();
/*===========================================*/
/*===========================================*/
/*===========================================*/



//ESTO ES PARA DESLOGUEAR

const desloguear=()=>{
    localStorage.clear();
    window.open("../index.html");
}

const logout = document.getElementById("logout");

logout.addEventListener("click", () => desloguear());
