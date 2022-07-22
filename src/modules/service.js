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

const setIdProduct = (id) => {
  return fetch(`http://localhost:3000/products/${id}`)
  .then(resp => {
    if(resp.ok){
      return resp.json()
    }
    throw new Error('Não')
  })
}

const editProduct = (image, name, price, description, id) => {
  return fetch(`http://localhost:3000/products/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type' : 'application/json'
    },
    body: JSON.stringify({
      image: image,
      name: name,
      price: price,
      description: description,
      id: id,
    })
  }).then(resp => {
    if (resp.ok) {
      return resp.json()
    }
    throw new Error('Não foi possivel editar o product')
  })
}

const moneyMask = (tag) => {
  const args = {
    prefix: 'R$ ',
    fixed: true,
    fractionDigits: 2,
    decimalSeparator: ',',
    thousandsSeparator: '.',
    cursor: 'end'
  }

  const input = SimpleMaskMoney.setMask(tag, args)

  return input.formatToNumber();
}

export const service = {
  productList,
  createNewProduct,
  setIdProduct,
  removeProduct,
  editProduct,
  moneyMask
}