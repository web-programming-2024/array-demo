const input = document.querySelector('input')
const list = document.querySelector('table')
const add = document.querySelector('#add')
const min = document.querySelector('#min')
const max = document.querySelector('#max')
const avg = document.querySelector('#avg')
const sort = document.querySelector('#sort')
const numbers = []

const addRow = () => {
  const newNumber = Number(input.value)
  numbers.push(newNumber)
  addTableRow(newNumber)
  input.value = ''
}

const addTableRow = (number) => {
  const row = list.insertRow()
  const col1 = row.insertCell(0)
  col1.innerHTML = number
}

const showMin = () => {
  let min = Math.min(...numbers)
  alert("Min number is " + min)
}

const showMax = () => {
  let max = Math.max(...numbers)
  alert("Max number is " + max)
}

const showAvg = () => {
  let sum = 0
  numbers.forEach(number => {
    sum += number
  })
  let avg = sum / numbers.length
  alert("Average of numbers is " + avg.toFixed(1))
}

// Vaihtoehtoinen tapa keskiarvon laskemiseen
const showAvgAdvanced = () => {
  const sum = numbers.reduce((a, b) => a + b, 0);
  const avg = (sum / numbers.length) || 0;
  alert("Average of numbers is " + avg.toFixed(1))
}

const sortNumbers = () => {
  numbers.sort((a, b) => a - b);
}

input.addEventListener('keypress',(event) => {
  if (event.key === 'Enter') {
    addRow()
  }
})

add.addEventListener('click', () => {
  addRow()
})

min.addEventListener('click', () => {
  showMin()
})

max.addEventListener('click', () => {
  showMax()
})

avg.addEventListener('click', () => {
  showAvg()
  // showAvgAdvanced()
})

sort.addEventListener('click', () => {
  sortNumbers()
  list.innerHTML = ''
  numbers.forEach(number => {
    addTableRow(number)
  });
})