// ? Contador

const btnMinus1 = document.getElementById('btn_minus1')
const btnMinus2 = document.getElementById('btn_minus2')

const btnPlus1 = document.getElementById('btn_plus1')
const btnPlus2 = document.getElementById('btn_plus2')

const count1 = document.getElementById('count1')
const count2 = document.getElementById('count2')

btnMinus1.addEventListener('click', () => {
  const currentNumber = parseInt(count1.innerText)
  if (currentNumber > 1) {
    count1.innerText = currentNumber - 1
  }
})

btnPlus1.addEventListener('click', () => {
  const currentNumber = parseInt(count1.innerText)
  if (currentNumber < 10) {
    count1.innerText = currentNumber + 1
  }
})

btnMinus2.addEventListener('click', () => {
  const currentNumber = parseInt(count2.innerText)
  if (currentNumber > 1) {
    count2.innerText = currentNumber - 1
  }
})

btnPlus2.addEventListener('click', () => {
  const currentNumber = parseInt(count2.innerText)
  if (currentNumber < 10) {
    count2.innerText = currentNumber + 1
  }
})

// ? Validacion de formulario

const mainForm = document.getElementById('main_form')
const inputs = document.querySelectorAll('input')
const select = document.querySelector('select')


mainForm.addEventListener('submit', (event) => {
  event.preventDefault()
  let errorCounter = 0
  inputs.forEach(input => {
    const outline = input.parentNode
    if (!input.checkValidity()) {
      outline.classList.add('invalid')
      errorCounter = errorCounter + 1
    } else {
      outline.classList.remove('invalid')
    }
  })
  if (!select.checkValidity()) {
    const outline = select.parentNode
    outline.classList.add('invalid')
    errorCounter = errorCounter + 1
  } else {
    const outline = select.parentNode
    outline.classList.remove('invalid')
  }

  if (errorCounter > 0) {
    showErrorToast()
  } else {
    showSuccessToast()
  }
})

const errorToast = document.querySelector('.error_toast')
const showErrorToast = () => {
  errorToast.classList.add('show_toast')
  setTimeout(() => {
    errorToast.classList.remove('show_toast')
  }, 5000)
}

const successToast = document.querySelector('.success_toast')
const showSuccessToast = () => {
  successToast.classList.add('show_toast')
  setTimeout(() => {
    successToast.classList.remove('show_toast')
  }, 5000)
}

const btnsCloseToast = document.querySelectorAll('.btn_close_toast')
btnsCloseToast.forEach(btn => {
  btn.addEventListener('click', () => {
    const toast = btn.parentNode
    toast.classList.remove('show_toast')
  })
})
