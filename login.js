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

    if (usuario == "" || password == "") {
        Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Debe completar el usuario y la contraseña -  Por favor verifique",
            showConfirmButton: true,
            confirmButtonText : "Entendido"            
          }).then ((result) => {
            if (result.isConfirmed) {
                document.getElementById("email").value = "";
                document.getElementById("password").value = "";
            }
          })
    } else {
        if ((usuario === "estudiante@academy.com") && (password === "estudiante" )) {

            window.open("pages/cursos.html", "_self");
            let mi_estudiante = new estudiante("estudiante@academy.com", "estudiante");
            localStorage.setItem("el_usuario", "estudiante");
    
        } else if ((usuario === "administrador@academy.com") && (password === "administrador" )){
            window.open("pages/cursos.html", "_self");
            let mi_administrador = new administrador("administrador@academy.com", "administrador");
            localStorage.setItem("el_usuario", "administrador");
        } else {
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: "Usuario o contraseña incorrecta -  Por favor verifique",
                showConfirmButton: true,
                confirmButtonText : "Entendido"            
              }).then ((result) => {
                if (result.isConfirmed) {
                    document.getElementById("email").value = "";
                    document.getElementById("password").value = "";
                }
              })
        }
    }

    
}

boton_login.addEventListener("click", () => loguear());
