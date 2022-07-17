import { service } from "./service.js";

const form = document.querySelector('[data-form]')

form.addEventListener('submit', (e) => {
  e.preventDefault()

  const image = e.target.querySelector('[data-image]').value
  const name = e.target.querySelector('[data-name]').value
  const price = e.target.querySelector('[data-price]').value
  const description = e.target.querySelector('[data-description]').value

  service.createNewProduct(image, name, price, description).then(() => {
    window.location.href = './admin.html'
  })
})