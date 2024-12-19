function validar(){
    let usuario=document.getElementById("usuario");
    let clave=document.getElementById("clave");
    let telefono=document.getElementById("telefono");
    let email=document.getElementById("email");
    let error=false;
    document.getElementById("validar_usuario").innerHTML = "";
    document.getElementById("validar_clave").innerHTML = "";
    document.getElementById("validar_telefono").innerHTML = "";
    document.getElementById("validar_email").innerHTML = "";

    if(usuario.value ===""){
        document.getElementById("validar_usuario").innerHTML="Completar con su nombre";
        error=true;
        usuario.focus();
    }
    if(clave.value.length < 8){
        document.getElementById("validar_clave").innerHTML = "La clave debe tener minimo 8 caracter";
        error=true
        clave.focus();
    }
    if(telefono.value ===""){
        document.getElementById("validar_telefono").innerHTML = "Completar el campo telefono";
        error=true
        telefono.focus();
    }
    if(email.value.length < 10){
        document.getElementById("validar_email").innerHTML = "Completar con su Email";
        error=true
        email.focus();
    }

    if(error == false){
        document.getElementById("usuario").value = "";
        document.getElementById("validar_usuario").innerHTML = "";
        document.getElementById("clave").value = "";
        document.getElementById("validar_clave").innerHTML ="";
        document.getElementById("telefono").value = "";
        document.getElementById("validar_telefono").innerHTML = "";
        document.getElementById("email").value = "";
        document.getElementById("validar_email").innerHTML = "";
        alert("Datos enviado");
    }
    return !error

}