document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector('form')
  form.addEventListener('submit', (e)=>{
    e.preventDefault()
    createLi(e.target.newTask.value)
    form.reset()
  })
});


function createLi(todo){
  let li = document.createElement('li')
  let btn = document.createElement('button')

  btn.addEventListener('click', handleD)
  btn.textContent = 'x'

  li.textContent= `${todo} `
  li.appendChild(btn)

  console.log(li)
  document.querySelector('#tasks').appendChild(li)
}

function handleD(e){
  e.target.parentNode.remove()
}