function guardarDatos(event) {
    event.preventDefault(); // Evitar que el formulario se envíe
    const nombre = document.getElementById('nombre').value;
    const edad = document.getElementById('edad').value;
    const mensaje = document.getElementById('mensaje').value;

    localStorage.setItem('nombre', nombre);
    localStorage.setItem('edad', edad);
    localStorage.setItem('mensaje', mensaje);

    mostrarDatos();
}

function mostrarDatos() {
    const datosDiv = document.getElementById('datos');
    datosDiv.innerHTML = `<p>Nombre: ${localStorage.getItem('nombre')}</p>
                          <p>Edad: ${localStorage.getItem('edad')}</p>
                          <p>Mensaje: ${localStorage.getItem('mensaje')}</p>`;
}

function eliminarDatos() {
    localStorage.removeItem('nombre');
    localStorage.removeItem('edad');
    localStorage.removeItem('mensaje');
    mostrarDatos();
}

document.getElementById('formulario').addEventListener('submit', guardarDatos);

mostrarDatos();

document.getElementById('eliminar').addEventListener('click', eliminarDatos);