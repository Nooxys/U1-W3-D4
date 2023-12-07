const bingoCells = function () {
  const cells = document.getElementById('celle')

  for (let i = 0; i < 76; i++) {
    const celleBingo = document.createElement('div')
    celleBingo.classList.add('divRules')
    celleBingo.innerText = i + 1
    cells.appendChild(celleBingo)
  }
}

bingoCells()

const buttonRan = document.getElementById('bottoneRandomico')
console.log(buttonRan)
buttonRan.addEventListener('click', function (e) {
  let numeroRandom = Math.floor(Math.random() * 76)
  const caselleBot = document.getElementsByClassName('divRules')
  console.log(caselleBot)
  caselleBot[numeroRandom].classList.add('ggWp')
})
