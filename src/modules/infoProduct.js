import { service } from "./service.js";

(async () => {
  const pickURL = new URL(window.location)

  const id = pickURL.searchParams.get('id')
  
  const info = document.querySelector('[data-info]')
  try {
    const data = await service.setIdProduct(id)

    info.innerHTML = `
      <div class="product__info">
        <img class="product__info--image" src=${data.image}>
        <div class="product__info--box">
          <h2 class="product__info--name">${data.name}</h2>
          <p class="product__info--price">${data.price}</p>
          <p class="product__info--description">${data.description}</p>
        </div>
        <a class="product__info--button" href="/../index.html"><- Voltar</a>
      </div>
    `
  } catch (err) {
    console.log(err)
    window.location.href = '../pages/404.html'
  }
}
)()