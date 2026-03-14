const boton = document.querySelector('#theme-toggle');

// Recuperar preferencia guardada
if (localStorage.getItem('tema') === 'oscuro') {
    document.body.classList.add('dark-mode');
}

function actualizarIcono() {
    const isDarkMode = document.body.classList.contains('dark-mode');
    boton.innerHTML = isDarkMode ? '<i class="ri-sun-fill"></i>' : '<i class="ri-moon-fill"></i>';
}

// Inicializar icono al cargar
actualizarIcono();

boton.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    actualizarIcono();

    // Guardar preferencia
    const isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('tema', isDarkMode ? 'oscuro' : 'claro');
});