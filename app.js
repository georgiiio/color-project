swal({
  position: 'top-right',
  type: 'info',
  title: 'Use space to change a colors',
  showConfirmButton: false,
  timer: 2000
})

function onKeydown (event){
  event.preventDefault()
  if (event.code == 'Space') {
    setRandomColor()
  }
}

// function onClickText (event){
//   const type = event.target.dataset.type

//   if (type == 'lock'){
//     const node = event.target.tagName.toLowerCase() == 'i'
//       ? event.target
//       : event.target.children[0]

//     node.classList.toggle('fa-lock-open')
//     node.classList.toggle('fa-lock')
//   } else if (type == 'copy'){
//     copyToClickboard(event.target.textContent)
//     swal("You copy a color",'', "success")
//   }
// }

function onClick (event) {
  const target = event.target
  const clickBtn = target.closest( '[data-type="lock"]' )

  if (clickBtn){
    const elem = clickBtn.querySelectorAll( '.lock-icon' )[0]
    console.log(elem)
    elem.classList.toggle( 'fa-lock-open' )
    elem.classList.toggle( 'fa-lock' )
  
  } else if (target.dataset.type == 'copy'){
    copyToClickboard(event.target.textContent)
    swal( "You copy a color",'', "success" )

  }
}


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

function onAppReady() {
  cols = document.querySelectorAll('.col')

  document.addEventListener('keydown', onKeydown)
  document.addEventListener('click', onClick)
  setRandomColor()
}

document.addEventListener('DOMContentLoaded', onAppReady)
