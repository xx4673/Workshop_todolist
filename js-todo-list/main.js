// TO DO
document.addEventListener('DOMContentLoaded', function() {

  
  // remove list
  let close= document.querySelectorAll('.close')
  for ( let i = 0; i < close.length; i++) {
    close[i].addEventListener('click', function(t) {
      if (t.target.className === 'close') {
        let li = t.target.parentElement
        li.remove()  
      }     
    })
  }  
})