
    document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.getElementById('menuButton');
    const menuOptions = document.getElementById('menuOptions');

    menuButton.addEventListener('click', function () {
        menuOptions.style.display = menuOptions.style.display === 'block' ? 'none' : 'block';
    });

    menuOptions.addEventListener('click', function (event) {
        if (event.target.tagName === 'A') {
            menuOptions.style.display = 'none';
            event.stopPropagation(); // Evita que el evento se propague al contenedor y vuelva a activar el menú
        }
    });
    document.addEventListener('click', function (event) {
        if (!menuButton.contains(event.target) && !menuOptions.contains(event.target)) {
            menuOptions.style.display = 'none';
        }
    });
});
