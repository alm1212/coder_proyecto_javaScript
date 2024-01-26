//ESTO ES PARA PODER ENTRAR AL SISTEMA --  LOGIN

function estudiante(pusuario, ppassword){
    this.usuario = pusuario ;
    this.password = ppassword;   
}

function administrador(pusuario, ppassword){
    this.usuario = pusuario;
    this.password = ppassword;
}


const boton_login = document.getElementById("boton_login");

const loguear=()=>{

    const usuario = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if ((usuario === "estudiante@academy.com") && (password === "estudiante" )) {

        window.open("pages/cursos.html", "_self");
        let mi_estudiante = new estudiante("estudiante@academy.com", "estudiante");
        localStorage.setItem("el_usuario", "estudiante");
        //alert("estudiante");

    } else if ((usuario === "administrador@academy.com") && (password === "administrador" )){
        window.open("pages/cursos.html", "_self");
        let mi_administrador = new administrador("administrador@academy.com", "administrador");
        localStorage.setItem("el_usuario", "administrador");
        //alert("administrador");
    } else {
        alert("Usuario o contraseña incorrecta");
    }
}

boton_login.addEventListener("click", () => loguear());
