// auth-state.js
document.addEventListener('DOMContentLoaded', function () {
    // Verificar estado de autenticación
    const userEmail = localStorage.getItem('userEmail');
    const userName = localStorage.getItem('userName');

    // Actualizar menú de cuenta en todas las páginas
    updateAccountMenu(userEmail, userName);

    // Configurar logout
    setupLogout();
});

function updateAccountMenu(userEmail, userName) {
    const accountMenu = document.querySelector('.submenu');
    if (!accountMenu) return;

    const trigger = accountMenu.querySelector('.submenu-trigger');
    const options = accountMenu.querySelector('.submenu-opciones');

    if (userEmail) {
        // Usuario logueado
        trigger.innerHTML = `${userName || 'Mi Cuenta'} <span class="submenu-icon">▾</span>`;

        options.innerHTML = `
            <a href="./bienvenidos.html">Mi perfil</a>
            <a href="#" class="logout-btn">Cerrar sesión</a>
        `;
    } else {
        // Usuario no logueado
        trigger.innerHTML = `Mi Cuenta <span class="submenu-icon">▾</span>`;

        options.innerHTML = `
            <a href="./iniciarSesion.html">Iniciar Sesión</a>
            <a href="./registrate.html">Registrate</a>
        `;
    }
}

function setupLogout() {
    document.addEventListener('click', function (e) {
        if (e.target.classList.contains('logout-btn')) {
            e.preventDefault();
            localStorage.removeItem('userEmail');
            localStorage.removeItem('userName');
            window.location.href = '../index.html'; // Redirige a página principal
        }
    });
}