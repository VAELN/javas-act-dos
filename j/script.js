
console.log("mensaje de prueba");

function enviar() {
    // Almacenar los datos de la etiqueta input dentro de una variable
    var nombre = document.getElementById("nombre").value;

    // Crear alerta con el valor de la variable "nombre" + un mensaje personalizado
    alert("Hola " + nombre + " :)");
}

function cambiarContenido() {
    var elemento = document.getElementById("miBoton");
    elemento.innerHTML = "¡Producto agregado!";
    document.querySelector("#producto").src = "hombre b.jpg"
    elemento.style.color = "yellow"
    elemento.style.backgroundColor = "black"
}

function agregarComentario() {

    // Obtener el valor del campo de comentario
    var comentarioInput = document.getElementById("comentario").value;

    // Verificar si el campo de comentario está vacío
    // Si no se ingresó ningún texto en el imput, salir de la función sin cambiar ni agregar nada nuevo. (la función termina aca)
    if (comentarioInput === "") { return; }

    // Obtener el contenedor de comentarios
    var contenedorComentarios = document.getElementById("contenedor-comentarios");

    // Crear un nuevo elemento div para el comentario
    var nuevoComentario = document.createElement("article");

    // Establecer el contenido del nuevo comentario con el valor del campo de comentario
    nuevoComentario.innerHTML = comentarioInput;

    // Agregar la clase "comentario" al nuevo comentario
    nuevoComentario.classList.add("comentario");

    // Agregar el nuevo comentario al contenedor de comentarios
    contenedorComentarios.appendChild(nuevoComentario);

    // Limpiar el campo de comentario después de agregar el comentario
    document.getElementById("comentario").value = "";
}