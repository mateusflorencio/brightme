

deleteItemCart = (any) => {

  fetch('/user/carrinho/delete', {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'delete',
    body: JSON.stringify({ id: any.id })
  }).then(() => location.reload())
}