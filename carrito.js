//función para leer el local storage y mostrar los productos del carrito


function leerLocalStorage(){

    let productos = []; 

    if(JSON.parse(localStorage.getItem("carrito"))){
        let los_productos = JSON.parse(localStorage.getItem("carrito"));   

        productos = los_productos;
        let contenedor = document.getElementById("contenedor");

        productos.forEach(element => {
            let div = document.createElement("div");
            div.innerHTML = 
                `<div id="1" class="main_disenno_flex_bloques_tarjetas">
                <figure class="main_disenno_flex_bloques_figure">                    
                    <img src="../images/cursos_precargados/${element.imagen}" alt=${element.imagen}>
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

        calcularTotal(productos);
    } else {
        let div = document.createElement("div");
        div.innerHTML = 
            `<div class="main_slogan carrito_vacío">
            <h1>Tu carrito está vacío  --- Corre a llenarlo</h1>
            </div> `
        document.getElementById("contenedor_carrito_vacio").append(div);
    }
}

const calcularTotal = (productos) =>{
    let total = 0;

    productos.forEach(element =>{
        total+=Number(element.precio);
    });

    document.getElementById("total").innerHTML = total;
}

/*===========================================================*/
/*=====MANDO A EJECUTARSE LA FUNCIÓN AL ABRIRSE LA PÁGINA====*/
/*===========================================================*/

window.onload = leerLocalStorage();


/*======================================================*/
/*======STO ES PARA ENVIAR COMPROBANTE DE PAGO==========*/
/*======================================================*/

const enviarComprobante=()=>{    

    if(document.getElementById("comprobante").value){
        
        document.getElementById("comprobante").value="";  
        document.getElementById("total").innerHTML = "";
        let carrito = [];
        localStorage.setItem("carrito", JSON.stringify(carrito));
        alert("HEMOS RECIBIDO SU COMPROBANTE DE PAGO - NOS CONTACTAREMOS POR CORREO");
        window.location.reload();
    } else {
        alert("DEBE ADJUNTAR UN COMPROBANTE DE PAGO");  
    }   
}

document.getElementById("enviar_comprobante").addEventListener("click", () => enviarComprobante());


/*===========================================*/
/*=========ESTO ES PARA DESLOGUEAR============*/
/*===========================================*/

const desloguear=()=>{
    localStorage.clear();
    window.open("../index.html", "_self");
}

const logout = document.getElementById("logout");

logout.addEventListener("click", () => desloguear());
