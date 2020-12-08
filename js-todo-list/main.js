// TO DO
document.addEventListener('DOMContentLoaded', function() {

<<<<<<< HEAD
  let lists = document.querySelector('ul')
  // tick list
  lists.addEventListener('click', function(t) {
    if (t.target.tagName === 'LI') {
      t.target.classList.toggle('checked')     
    }     
  })
=======
  
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
>>>>>>> delete-btn
})