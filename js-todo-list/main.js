// TO DO
document.addEventListener('DOMContentLoaded', function() {
  let lists = document.querySelector('ul')
  // tick list
  lists.addEventListener('click', function(t) {
    if (t.target.tagName === 'LI') {
      t.target.classList.toggle('checked')     
    }     
  })
  
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

 
  // add new list
  let addBtn = document.querySelector('.addBtn')
  addBtn.addEventListener('click', function() {
    
    let newList = document.createElement('li')
    let inputText = document.querySelector('#input').value
    let finalText = document.createTextNode(inputText)
    newList.appendChild(finalText)
    document.querySelector('ul').appendChild(newList)
    let span = document.createElement('span')
    let cross= document.createTextNode('x')
    span.className = 'close'
    span.appendChild(cross)
    newList.appendChild(span)


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


})