const input     = document.getElementById('input');
const enterBtn  = document.getElementById('enterBtn')
const ul        = document.querySelector('ul')
let todo        = [];
const clearTodo = document.getElementById('clearTodo')


const createTodo = ()=>{
    todo.push(input.value)
    for(let i= 0; i<todo.length;i++){
        let li         = document.createElement('li')
        li.textContent = todo[i]
        ul.appendChild(li)
        let cancelTodo = document.createElement('button')
        cancelTodo.appendChild(document.createTextNode("X"))
        cancelTodo.addEventListener('click',()=>{
            li.classList.toggle('cancel')
        })
        li.appendChild(cancelTodo);  
        input.value =""
    }
     
    save()
}
// clear todo -item
clearTodo.addEventListener('click',()=>{
   let clear = confirm('Do you want to clear todo list?')
   if (clear){
    ul.innerHTML=''
   }
})
// save to local storage
function save(){
    localStorage.setItem('todo',todo)
    console.log('working')
}

const addTask = ()=>{
    if(input.value.length >0){
        createTodo()
    }
}
const inputEvent =()=>{
    if(input.value.length > 0 && event.which===13){
        createTodo()
    }
}




enterBtn.addEventListener('click',addTask);
input.addEventListener('keypress',inputEvent)