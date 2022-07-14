
import { service } from './service.js'

const createCard = (image, name, price, id) => {
  const createLi = document.createElement('li')
  
  createLi.classList.add('product__card')

  const createCardTemplate = `
    <img class="product__card--image" src=${image} />
    <p class="product__card--name">${name}<p>
    <p class="product__card--price">${price}<p>
  `

  createLi.innerHTML = createCardTemplate
  console.log(createLi)
  return createLi
}

const list = document.querySelector('[data-list]')

const render = async () => {
  const productList = await service.productList()
  
  productList.forEach(e => {
    list.appendChild(createCard(e.image, e.name, e.price, e.id))
  })
}

render()

// https://imgbox.com/ - site para upar image