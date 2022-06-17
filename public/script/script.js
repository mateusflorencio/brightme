    const btnMobile = document.querySelector("#btn-mobile");
    

    function toggleMenu(event){
        if(event.type === "touchstart") event.preventDefault();
        const navMenu = document.getElementById("nav_menu");
         navMenu.classList.toggle('active');
        
         const active = navMenu.classList.contains("active");
         event.currentTarget.setAttribute('aria-expandes', active)
       
        if(active){
            event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
        }
        else{
            event.currentTarget.setAttribute('arial-label', 'Abrir Menu');
        }
    };
    
    btnMobile.addEventListener("click", toggleMenu);
    btnMobile.addEventListener('touchstart', toggleMenu);
    