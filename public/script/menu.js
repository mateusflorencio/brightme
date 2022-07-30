// SCRIPT DO MENU RESPONSIVO. IMPORTANTE PARA MANTER ELE CLICÁVEL E FUNCIONANDO

let show = true

const menuSection = document.querySelector(".menu-section")
const menuToggle = menuSection.querySelector(".menu-toggle")

menuToggle.addEventListener("click", () => {

    document.body.style.overflow = show ? "hidden" : "initial"

    menuSection.classList.toggle("on", show)
    show = !show
})


const nomeCliente = localStorage.getItem('nome')
const divEntrar = document.querySelector('.entrar')
const divEntrarTogle = document.querySelector('.entrar__togle__menu')
if (nomeCliente) {
    divEntrar.text = `Olá, ${nomeCliente} !`
    divEntrar.href = '/user/conta'
    divEntrarTogle.text = `Olá, ${nomeCliente} !`
    divEntrarTogle.href = '/user/conta'
}
