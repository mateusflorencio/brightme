    const btnMobile = document.getElementsById('btn-mobile');
    const navMenu = document.getElementById("nav_menu")

    toggleMenu.onclick = function(event) {
    navMenu.classList.toggle('active');
    } 
    btnMobile.addEventListener(toggleMenu);

