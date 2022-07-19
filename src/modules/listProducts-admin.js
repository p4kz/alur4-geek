
import { service } from './service.js'

const createCard = (image, name, price, id) => {
  const createLi = document.createElement('li')
  
  createLi.classList.add('product__card')

  const createCardTemplate = `
    <div class="product__card--nav">
      <button id="product__card--delete" class="btn-delete">
        <img class="btn-delete" src="../assets/img/trash-icon.svg" />
      </button>
      <a href="../pages/update-product.html?id=${id}" id="product__card--edit" class="btn-edit">
        <img class="btn-edit" src="../assets/img/pen-icon.svg" />
      </a>
    </div>
    <img class="product__card--image" src=${image} />
    <p class="product__card--name">${name}</p>
    <p class="product__card--price">R$ ${price}</p>
    <p> # ${id}</p>
  `

  createLi.innerHTML = createCardTemplate
  createLi.dataset.id = id
  return createLi
}

const list = document.querySelector('[data-list]')

list.addEventListener('click', async (e) => {
  let deleteButton = e.target.className === 'btn-delete'

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