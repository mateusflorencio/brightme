const clienteId = localStorage.getItem('id')

function addToCart(any) {
  const produtoId = any.id
  document.querySelector('strong.d-none').classList.remove('d-none')

  fetch('/user/carrinho/adicionar', {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'post',
    body: JSON.stringify({ produtoId, clienteId })
  }).then((res) => {
    if (res) {
      setInterval(()=>{location.reload()},1000)
    }
  }).catch(err => console.log(err))

}