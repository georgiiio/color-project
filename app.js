const cols = document.querySelectorAll('.col')

document.addEventListener('keydown', (event) => {
  event.preventDefault()
  if (event.code == 'Space') {
    setRandomColor()
  }
})

document.addEventListener('click', event => {
  const type = event.target.dataset.type

  if (type == 'lock'){
    const node = event.target.tagName.toLowerCase() == 'i'
      ? event.target
      : event.target.children[0]

    node.classList.toggle('fa-lock-open')
    node.classList.toggle('fa-lock')
  }
})

function setRandomColor(){
  cols.forEach((col) => {
    const isLocked = col.querySelector('i').classList.contains('fa-lock')
    const text = col.querySelector('h2')
    const button = col.querySelector('button')
    const color = chroma.random()

    if (isLocked){
      return
    }

    text.textContent = color
    col.style.background = color

    setTextColor(text, color)
    setTextColor(button, color)
  })
}

function setTextColor(text, color){
  const luminance = chroma(color).luminance()
  text.style.color = luminance > 0.5 ? 'black' : 'white'
}

setRandomColor()
