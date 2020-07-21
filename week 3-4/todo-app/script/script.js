const input     = document.getElementById('input');
const enterBtn  = document.getElementById('enterBtn')
const ul        = document.querySelector('ul')
let todo        = [];
const clearTodo = document.getElementById('clearTodo')

// creating todo items
const createTodo = ()=>{
    todo.push(input.value);
    ul.innerHTML = "";
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

//  adding task using in using the enter button
const addTask = ()=>{
    if(input.value.length >0){
        createTodo()
    }
}

// adding task using enter key from the keyboard(keypress)
const inputEvent =()=>{
    if(input.value.length > 0 && event.which===13){
        createTodo()
    }
}


enterBtn.addEventListener('click',addTask);
input.addEventListener('keypress',inputEvent)


// save to local storage
function save(){
    localStorage.setItem('todo',JSON.stringify(todo));
    console.log('working')
}


// get items from local Storage
 function preLoadTodo(){
    try{
        let todo = JSON.parse(localStorage.getItem('todo'))
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
            input.value ="";
        }
    }
    catch(e){
        console.log('could not get todos')
    }
}
window.addEventListener('load',preLoadTodo);



// clear todo -item from local storage and screen
clearTodo.addEventListener('click',()=>{
    let clear = confirm('Do you want to clear todo list?')
    if (clear){
     localStorage.clear('todo', todo);
     ul.innerHTML=""
    }
 })
