import { service } from "./service.js";

(async () => {
  service.moneyMask('[data-price]')
  
  const pickURL = new URL(window.location)

  const id = pickURL.searchParams.get('id')

  const inputImage = document.querySelector('[data-image]')
  const inputName = document.querySelector('[data-name]')
  const inputPrice = document.querySelector('[data-price]')
  const inputDescription = document.querySelector('[data-description]')

  try {
    const data = await service.setIdProduct(id)

    inputImage.value= data.image
    inputName.value = data.name
    inputPrice.value = data.price
    inputDescription.value = data.description
  } catch (err) {
    console.log(err)
    window.location.href = '../pages/404.html'
  }

  const form = document.querySelector('[data-form]')

  form.addEventListener('submit', async (e) => {
    try {
      e.preventDefault()
      await service.editProduct(inputImage.value, inputName.value, inputPrice.value, inputDescription.value, id)
      window.location.href = '../pages/admin.html'
    } catch (err) {
      console.log(err)
      window.location.href = '../pages/404.html'
    }
  })

})()