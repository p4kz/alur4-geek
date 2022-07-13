
import { service } from './service.js'

const createList = (image, name, price, id) => {
  const createUl = document.createElement('ul')
  
  const createCardTemplate = `
    <li>
      <img src="${image}" />
      <p>${name}<p>
      <p>${price}<p>
    </li>
  `

  createUl.innerHTML = createCardTemplate
  console.log(createUl)
  return createUl
}

const main = document.querySelector('[data-main]')

const render = async () => {
  const productList = await service.productList()
  
  productList.forEach(e => {
    main.appendChild(createList(e.image, e.name, e.price, e.id))
  })
}

render()