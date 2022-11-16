const cols = document.querySelectorAll('.col')

document.addEventListener('keydown', (event) => {
  if (event.code == 'Space') {
    setRandomColor()
  }
})

function setRandomColor(){
  cols.forEach((col) => {
    const text = col.querySelector('h2')
    const button = col.querySelector('button')
    const color = chroma.random()

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
