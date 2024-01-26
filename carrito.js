//función para leer el local storage y mostrar los productos del carrito


function leerLocalStorage(){

    let productos = []; 

    let longitud = 0;

    if(JSON.parse(localStorage.getItem("carrito"))){
        longitud = JSON.parse(localStorage.getItem("carrito")).length;
        console.log(longitud);
    }

    if(longitud > 0){
        let los_productos = JSON.parse(localStorage.getItem("carrito"));   
        let indice = 0;
        productos = los_productos;
        let contenedor = document.getElementById("contenedor");

        productos.forEach(element => {
            console.log(element.precio);
            let div = document.createElement("div");
            div.innerHTML = 
                `<div id="1" class="main_disenno_flex_bloques_tarjetas">
                <figure class="main_disenno_flex_bloques_figure">                    
                    <img src="../images/cursos_precargados/${element.imagen}" alt=${element.imagen}>
                </figure>
                <div class="main_disenno_flex_bloques_textos_h1">
                    <h1 id="nombre_del_curso">${element.nombre}</h1>
                </div>
                <article class="main_disenno_flex_bloques_textos">
                    <div class="main_disenno_flex_bloques_textos_precio">
                        <h1>UYU</h1>
                        <h1 id="precio_del_curso" class="main_disenno_flex_bloques_textos_precio_valor">${element.precio}</h1>
                    </div> 
                    <button id="el${indice}" class="main_disenno_flex_bloques_boton">
                        <img src="../images/carrito_compras/eliminar.png" alt="carrito">
                    </button>
                </article>
                </div>`;
                contenedor.append(div);
                indice++;
        });

    calcularTotal(productos);
    } else {
        document.getElementById("mensaje_para_saber_como_pagar").style.display = 'none';
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
        alert("Hemos recibido su comprobante -  Nos contactaremos con usted por correo");
        window.location.reload();
    } else {
        alert("Debe adjuntar el comprobante de su pago");  
    }   
}

document.getElementById("enviar_comprobante").addEventListener("click", () => enviarComprobante());

/*=============================================================*/
/*======ESTO ES PARA ELIMINAR PRODUCTOS DEL CARRITO============*/
/*=============================================================*/
function eliminarDelCarrito(id){
    
    let carrito = [];
    if(localStorage.getItem("carrito")){
        carrito = JSON.parse(localStorage.getItem("carrito"));
    }
    
    carrito.splice(id, 1); 
    localStorage.setItem("carrito", JSON.stringify(carrito));
    window.location.reload();   
    localStorage.setItem("variable_para_abrir", "b");
}

const escucharBotones =() =>{

    let carrito_actual = JSON.parse(localStorage.getItem("carrito"));
    console.log(carrito_actual);
    //let id = 0;

    for (let index = 0; index < carrito_actual.length; index++) {
        //const element = array[index];
        let boton_eliminar_del_carrito = document.getElementById(`el${index}`);
        //boton_eliminar_del_carrito.addEventListener("click", ()=>console.log(index));
        boton_eliminar_del_carrito.addEventListener("click", () => eliminarDelCarrito(index));
    }

    // carrito_actual.forEach(() =>{
    //     let boton_eliminar_del_carrito = document.getElementById(`el${id}`);
    //     //boton_eliminar_del_carrito.addEventListener("click", ()=>eliminarDelCarrito(id));
    //     boton_eliminar_del_carrito.addEventListener("click", ()=>console.log(id));
        
    // })
}


/*===========================================*/
/*=========ESTO ES PARA DESLOGUEAR============*/
/*===========================================*/

const desloguear=()=>{

    let cursos_que_existian = JSON.parse(localStorage.getItem("cursos"));
    localStorage.clear();
    localStorage.setItem("variable_para_abrir", "a");
    localStorage.setItem("cursos", JSON.stringify(cursos_que_existian));
    window.open("../index.html", "_self");
}

const logout = document.getElementById("logout");

logout.addEventListener("click", () => desloguear());

window.onload = escucharBotones();
