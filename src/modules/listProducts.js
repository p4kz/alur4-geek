
import { service } from './service.js'

const createCard = (image, name, price, id) => {
  const createLi = document.createElement('li')
  
  createLi.classList.add('product__card')

  const createCardTemplate = `
    <div class="product__card--nav">
      <button class="product__card--delete">
        <svg xmlns="http://www.w3.org/2000/svg" width="192" height="192" fill="#ffffff" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M224,56a8,8,0,0,1-8,8h-8V208a16,16,0,0,1-16,16H64a16,16,0,0,1-16-16V64H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,56ZM88,32h80a8,8,0,0,0,0-16H88a8,8,0,0,0,0,16Z"></path></svg>
      </button>
      <button class="product__card--edit">
        <svg xmlns="http://www.w3.org/2000/svg" width="192" height="192" fill="#ffffff" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M224,76.7,179.7,32.3a16.6,16.6,0,0,0-11.3-5A16,16,0,0,0,156.7,32L130.3,58.3h0L36.7,152A15.9,15.9,0,0,0,32,163.3V208a16,16,0,0,0,16,16H92.7a16.1,16.1,0,0,0,11.3-4.7l120-120A16.1,16.1,0,0,0,224,76.7Zm-32,32L147.3,64,168,43.3,212.7,88Z"></path></svg>
      </button>
    </div>
    <img class="product__card--image" src=${image} />
    <p class="product__card--name">${name}</p>
    <p class="product__card--price">${price}</p>
    <p> # ${id}</p>
  `

  createLi.innerHTML = createCardTemplate
  createLi.dataset.id = id
  return createLi
}

const list = document.querySelector('[data-list]')

list.addEventListener('click', async (e) => {
  let deleteButton = e.target.className === 'product__card--delete'

  if(deleteButton) {
    try {
      const deleteProduct = e.target.closest('[data-id]')
      let id = deleteProduct.dataset.id
      await service.removeProduct(id)
      deleteProduct.remove()
    } catch (err) {
      console.log(err)
    } 
  }

})

const render = async () => {
  const productList = await service.productList()
  
  productList.forEach(e => {
    list.appendChild(createCard(e.image, e.name, e.price, e.id))
  })
}

render()

// https://imgbox.com/ - site para upar image