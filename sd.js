
function agregarCurso(el_nombre_del_curso, el_precio_del_curso, la_descripcion_del_curso, la_imagen_del_curso){

    console.log(el_nombre_del_curso, el_precio_del_curso, la_descripcion_del_curso, la_imagen_del_curso);
    let contenedor = document.getElementById("contenedor_de_tarjetas");
    
    let div = document.createElement("div");
        div.innerHTML = 
        `<div class="main_disenno_flex_bloques_tarjetas">
        <figure class="main_disenno_flex_bloques_figure">
            <img src="../images/cursos_para_cargar/${la_imagen_del_curso}" alt="react">
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
}