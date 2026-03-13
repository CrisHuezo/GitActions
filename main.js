document.getElementById("registroForm").addEventListener("submit", function(event){

    event.preventDefault();

    let nombre = document.getElementById("nombre").value;
    let email = document.getElementById("email").value;

    let mensaje = document.getElementById("mensaje");

    mensaje.innerText = "Usuario " + nombre + " registrado con éxito con el correo " + email;
});