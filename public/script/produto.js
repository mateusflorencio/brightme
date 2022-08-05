const id = localStorage.getItem('id')

function addToCart(any) {
  const produtoId = any.id
  const clienteId = id

  fetch('/user/carrinho/adicionar', {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'post',
    body: JSON.stringify({ produtoId, clienteId })
  }).then((res) => {
    if (res) {
      location.reload()
    }
  }).catch(err => console.log(err))

}