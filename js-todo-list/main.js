// TO DO
document.addEventListener('DOMContentLoaded', function() {

  let lists = document.querySelector('ul')
  // tick list
  lists.addEventListener('click', function(t) {
    if (t.target.tagName === 'LI') {
      t.target.classList.toggle('checked')     
    }     
  })
})