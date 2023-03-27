
function validarFormulario() {
    let nombreYApellido = document.getElementById("nombre-apellido");
    if (nombreYApellido.value == "") {
        alert ("Por favor indique su nombre y apellido");
        return false;
    }

    let email = document.getElementById("email");
    if (email.value == "") {
        alert ("Por favor indique su email");
        return false;
    }

    let telefono = document.getElementById("telefono");
    if (telefono.value == "") {
        alert ("Por favor indique su teléfono");
        return false;
    }

    let mensaje = document.getElementById("msg");
    if (mensaje.value == "") {
        alert ("Por favor indique su mensaje");
        return false;
    }
}

