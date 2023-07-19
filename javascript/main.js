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

console.log(inputs)

mainForm.addEventListener('submit', (event) => {
  event.preventDefault()
  console.log('on sumbit we')
  inputs.forEach(input => {
    console.log(input)
    if (!input.checkValidity()) {
      console.log('input invalid we')
      const outline = input.parentNode
      outline.classList.add('invalid')
    }
  })
})
