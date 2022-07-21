
const form = document.querySelector('[data-form]')

form.addEventListener('submit', (e) => {
  e.preventDefault()

  const password = document.querySelector('[data-password]').value
  const email = document.querySelector('[data-email]').value

  const erro = document.querySelector('[data-erro]')


  if (email == 'admin@admin.com' && password == 'admin') {
    window.location.href = './admin.html'
  } else {
    erro.innerHTML = 'Usuário ou senha inválido'
  }
})
