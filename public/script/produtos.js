
let stateFiltro = true

document.getElementById('btnFilterMobile')
  .addEventListener('click', () => {
    const filterMobile = document.querySelector('.rigth')
    document.body.style.overflow = stateFiltro ? 'hidden' : 'initial'

    filterMobile.classList.toggle('on', stateFiltro)
    stateFiltro = !stateFiltro
  })