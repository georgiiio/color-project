const cols = document.querySelectorAll('.col')

swal({
  position: 'top-right',
  type: 'info',
  title: 'Use space to change a colors',
  showConfirmButton: false,
  timer: 2000
})

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
  } else if (type == 'copy'){
    copyToClickboard(event.target.textContent)
    swal("You copy a color",'', "success")
  }
})

function copyToClickboard(text){
  return navigator.clipboard.writeText(text)
}

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
