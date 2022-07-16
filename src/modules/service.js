const productList = () => {
  return fetch("http://localhost:3000/products").then(resp => {
    if(resp.ok) {
      return resp.json()
    }
  })
}

const createNewProduct = (image, name, price, description) => {
  return fetch("http://localhost:3000/products", {
    method: 'POST',

    headers: {
      'Content-Type' : 'application/json'
    },

    body: JSON.stringify({
      image: image,
      name: name,
      price: price,
      description: description,
    })
  }).then(resp => {
    if(resp.ok) {
      return resp.body
    } 

    throw new Error('Não foi possivel criar um produto')
  })
}

const removeProduct = (id) => {
  return fetch(`http://localhost:3000/products/${id}`, {
    method: 'DELETE',
  }).then(resp => {
    if(!resp.ok) {
      throw new Error('Não foi possivel remover o produto')
    }
  }) 
}

export const service = {
  productList,
  createNewProduct,
  removeProduct,
}