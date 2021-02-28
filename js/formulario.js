function validar() {
    var nombre=document.getElementById("nombre").value;
    var apellido=document.getElementById("apellido").value;
    var correo=document.getElementById("correo").value;

    var check=document.getElementById("checkbox").checked;

    var nom=/(0-9)/;
    var ape=/(0-9)/;
    var email=/^\w{3,}\@\w{3,}[.]\w{3}$/;
    
    if(nombre==="" || apellido==="" || correo===""){
        alert("Debe rellenar todos los campos");
        return false;
    }
    else if(nom.test(nombre)){
        alert("Ingrese correctamente su nombre");
        return false;
    }
    else if(ape.test(apellido)){
        alert("Ingrese correctamente su apellido");
        return false;
    }
    else if(!email.test(correo)){
        alert("Ingrese correctamente su correo");
        return false;
    }
    else if(check==false){
        alert("Debe aceptar los terminos y condiciones.")
        return false;
    }
    alert("Los datos fueron enviados.")
    form.submit();
}