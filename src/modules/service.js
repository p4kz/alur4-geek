const productList = () => {
  return fetch("http://localhost:3000/products").then(resp => {
    if(resp.ok) {
      return resp.json()
    }
  })
}

export const service = {
  productList,
}