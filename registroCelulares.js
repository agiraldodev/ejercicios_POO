// Definir un arreglo vacío para registrar los teléfonos

let celularesTodos = [];

// Función para manejar el envío de formularios
function envioFormulario(event) {
    event.preventDefault();// Evita que el formulario se recargue

    const marca = document.getElementById('marca').value;
    const precio = document.getElementById('precio').value;
    const garantia = document.getElementById('garantia').checked;
    const color = document.getElementById('color').value;
    const almacenamiento = document.getElementById('almacenamiento').value;
    const camaraFrontal = document.getElementById('camaraFrontal').checked;
    const resolucion = document.getElementById('resolucion').value;

    // Crear un nuevo objeto con los valores del formulario
    const nuevoCelular = {
        marca: marca,
        precio: precio,
        garantia: garantia,
        color: color,
        almacenamiento: almacenamiento,
        camaraFrontal: camaraFrontal,
        resolucion: resolucion,
    }
    // Agregamos el objeto nuevocelular al array vacío de los celulares
    celularesTodos.push(nuevoCelular);

    // Limpiar el formulario
    document.getElementById('marca').value = '';
    document.getElementById('precio').value = '';
    document.getElementById('garantia').checked = false;
    document.getElementById('color').selectedIndex = 0;
    document.getElementById('almacenamiento').value = '';
    document.getElementById('camaraFrontal').checked = false;
    document.getElementById('resolucion').value = '';

    // Mostramos el array de celulares
    console.log(celularesTodos);
}

document.getElementById('formularioIngreso').addEventListener('submit', envioFormulario);
