const canvas = document.getElementById('canvas')

canvas.contentEditable = true;
let value
canvas.addEventListener('keydown', function(e){
  if((e.key === 'ArrowUp' && e.key === 'Arrowown' && e.key === 'ArrowLeft' && e.key === 'ArrowDown' ) && canvas.contentEditable === true) {
    alert(`the key value is ${e.key}`)
  }
})
  // The preferences and the info about documentation

