 // Función para guardar los datos en el Local Storage
 function guardarDatos(event) {
    event.preventDefault(); // Evitar que el formulario se envíe
    const nombre = document.getElementById('nombre').value;
    const edad = document.getElementById('edad').value;
    const mensaje = document.getElementById('mensaje').value;

    // Guardar los datos en el Local Storage
    localStorage.setItem('nombre', nombre);
    localStorage.setItem('edad', edad);
    localStorage.setItem('mensaje', mensaje);

    // Mostrar los datos en el DOM
    mostrarDatos();
}

// Función para mostrar los datos almacenados en el Local Storage
function mostrarDatos() {
    const datosDiv = document.getElementById('datos');
    datosDiv.innerHTML = `<p>Nombre: ${localStorage.getItem('nombre')}</p>
                          <p>Edad: ${localStorage.getItem('edad')}</p>
                          <p>Mensaje: ${localStorage.getItem('mensaje')}</p>`;
}

// Función para eliminar los datos del Local Storage
function eliminarDatos() {
    localStorage.removeItem('nombre');
    localStorage.removeItem('edad');
    localStorage.removeItem('mensaje');
    mostrarDatos(); // Limpiar los datos mostrados en el DOM
}

// Agregar event listener al formulario para guardar los datos
document.getElementById('formulario').addEventListener('submit', guardarDatos);

// Mostrar los datos al cargar la página
mostrarDatos();

// Agregar event listener al botón de eliminar
document.getElementById('eliminar').addEventListener('click', eliminarDatos);