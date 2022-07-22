import { service } from "./service.js";

const form = document.querySelector('[data-form]')

service.moneyMask('[data-price]')

form.addEventListener('submit', (e) => {
  e.preventDefault()
  
  const image = e.target.querySelector('[data-image]').value
  const name = e.target.querySelector('[data-name]').value
  const description = e.target.querySelector('[data-description]').value
  const price = e.target.querySelector('[data-price]').value

  service.createNewProduct(image, name, price, description).then(() => {
    window.location.href = './admin.html'
  })
})