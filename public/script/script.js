    const btnMobile = document.querySelector("#btn-mobile");
    

    function toggleMenu(){
        const navMenu = document.getElementById("nav_menu");
         navMenu.classList.toggle('active');
         console.log("scooby", toggleMenu)
    };
    console.log("scooby", toggleMenu)
    btnMobile.addEventListener("click", toggleMenu);
    