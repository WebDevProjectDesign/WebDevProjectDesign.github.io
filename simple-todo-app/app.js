//QUERY SELECTORS
const todoInput = document.querySelector('input')
const addTodoBtn = document.querySelector('.add-todo')
const todoList = document.querySelector('.note-list')


//EVENTS LISTENERS
addTodoBtn.addEventListener('click', addTodo)
todoList.addEventListener('click', dropCheck)
window.addEventListener('DOMContentLoaded', getFromMemory)

//FUNCTIONS
function addTodo(){

    if(todoInput.value === "") return
    else{
        //create todo list item
        const note = document.createElement('div')
        note.classList.add('note')

        //create  list item text
        const noteText = document.createElement('p')
        noteText.classList.add('note-text')
        noteText.innerText = todoInput.value
        note.appendChild(noteText)

        //check todo button
        const checkBtn = document.createElement('button')
        checkBtn.classList.add('check-todo', 'todo-btn')
        checkBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" /> </svg>'
        note.appendChild(checkBtn)

        //drop todo button
        const dropBtn = document.createElement('button')
        dropBtn.classList.add('drop-todo', 'todo-btn')
        dropBtn.innerHTML =  '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3 6v18h18v-18h-18zm5 14c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm4-18v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.315c0 .901.73 2 1.631 2h5.712z" /></svg>'
        note.appendChild(dropBtn)

        //append all to  todo list
        todoList.appendChild(note)

        //add notes to local storage
        addToMemory(todoInput.value)
        //clear input
        todoInput.value = ''
    }
}

function dropCheck(e){
    action = e.target
    const targeted = action.parentElement

    if(action.classList[0] === "check-todo"){
        targeted.classList.toggle('checked')
    }
    else if(action.classList[0] === "drop-todo"){
        targeted.classList.toggle('dropped')
        deleteFromMemory(targeted)
        targeted.addEventListener('transitionend', ()=>{
            targeted.remove()
        })
    }
}

function addToMemory(note){
    let notes
    if(localStorage.getItem('notes') === null){
        notes = []
    }
    else{
        notes = JSON.parse(localStorage.getItem('notes'))
    }
    notes.push(note)
    localStorage.setItem('notes', JSON.stringify(notes))
}

function getFromMemory(){
    let notes
    if(localStorage.getItem('notes') === null){
        notes = []
    }
    else{
        notes = JSON.parse(localStorage.getItem('notes'))
    }

    notes.forEach(item => {
         //create todo list item
        const note = document.createElement('div')
        note.classList.add('note')

        //create  list item text
        const noteText = document.createElement('p')
        noteText.classList.add('note-text')
        noteText.innerText = item
        note.appendChild(noteText)

        //check todo button
        const checkBtn = document.createElement('button')
        checkBtn.classList.add('check-todo', 'todo-btn')
        checkBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" /> </svg>'
        note.appendChild(checkBtn)

        //drop todo button
        const dropBtn = document.createElement('button')
        dropBtn.classList.add('drop-todo', 'todo-btn')
        dropBtn.innerHTML =  '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3 6v18h18v-18h-18zm5 14c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm4-18v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.315c0 .901.73 2 1.631 2h5.712z" /></svg>'
        note.appendChild(dropBtn)

        //append all to  todo list
        todoList.appendChild(note)
    });
}

function deleteFromMemory(note){
 let notes
    if(localStorage.getItem('notes') === null){
        notes = []
    }
    else{
        notes = JSON.parse(localStorage.getItem('notes'))
    }

    const itemIndex = note.children[0].innerText
     notes.splice(notes.indexOf(itemIndex), 1)
   localStorage.setItem('notes', JSON.stringify(notes))
}