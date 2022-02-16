let todoInput
let errorInfo
let addBtn
let todoList

let popup
let popupInfo
let todoToEdit
let popupInput
let popupAddBtn
let popupCloseBtn

const main = () => {
	prepareDOMElements()
	prepareDOMEvents()
	getFromLocal()
}

const prepareDOMElements = () => {
	todoInput = document.querySelector('.todo-input')
	errorInfo = document.querySelector('.error-info')
	addBtn = document.querySelector('.btn-add')
	todoList = document.querySelector('ul')

	popup = document.querySelector('.popup')
	popupInfo = document.querySelector('.popup-info')
	popupInput = document.querySelector('.popup-input')
	popupAddBtn = document.querySelector('.accept')
	popupCloseBtn = document.querySelector('.cancel')
}

const prepareDOMEvents = () => {
	addBtn.addEventListener('click', addTodo)
	todoList.addEventListener('click', getOperand)
	popupCloseBtn.addEventListener('click', closePopup)
	popupAddBtn.addEventListener('click', changeTodoText)
	todoInput.addEventListener('keyup', enterKeyCheck)
}

const addTodo = () => {
	if (todoInput.value == '') {
		errorInfo.textContent = 'Napisz treść zadania'
	} else {
		const newTodo = document.createElement('li')
		newTodo.textContent = todoInput.value
		addToLocal(todoInput.value)
		addTodoPanel(newTodo)
		todoList.append(newTodo)
		errorInfo.textContent = ''
		todoInput.value = ''
	}
}

const addTodoPanel = newTodo => {
	const tools = document.createElement('div')
	tools.classList.add('tools')

	const completeBtn = document.createElement('button')
	completeBtn.classList.add('complete')
	completeBtn.innerHTML = '<i class="fas fa-check"></i>'

	const editBtn = document.createElement('button')
	editBtn.classList.add('edit')
	editBtn.innerText = 'EDIT'

	const deleteBtn = document.createElement('button')
	deleteBtn.classList.add('delete')
	deleteBtn.innerHTML = '<i class="fas fa-times">'

	tools.append(completeBtn, editBtn, deleteBtn)
	newTodo.append(tools)
}

const getOperand = e => {
	if (e.target.matches('.complete')) {
		e.target.closest('li').classList.toggle('completed')
		e.target.classList.toggle('completed')
	} else if (e.target.matches('.edit')) {
		editTodo(e)
	} else if (e.target.matches('.delete')) {
		dropTodo(e)
		dropFromLocal(e.target.closest('li').firstChild.textContent)
	}
}

const editTodo = e => {
	popup.style.display = 'flex'

	todoToEdit = e.target.closest('li')
	popupInput.value = todoToEdit.firstChild.textContent
}

const changeTodoText = () => {
	if (popupInput.value == '') {
		popupInfo.textContent = 'Podaj treść zadania'
	} else {
		editLocalTodo(todoToEdit.firstChild.textContent, popupInput.value)
		todoToEdit.firstChild.textContent = popupInput.value
		closePopup()
	}
}
const closePopup = () => {
	popup.style.display = 'none'
	popupInfo.textContent = ''
}

const dropTodo = e => {
	e.target.closest('li').remove()

	const allTodos = document.querySelectorAll('ul li')
	if (allTodos.length == 0) {
		errorInfo.textContent = 'Brak zadań na liście'
	}
}

const enterKeyCheck = e => {
	if (e.key === 'Enter') {
		addTodo()
	}
}

const addToLocal = todo => {
	let todos
	if (window.localStorage.getItem('todos') == null) {
		todos = []
	} else {
		todos = JSON.parse(localStorage.getItem('todos'))
	}
	todos.push(todo)
	localStorage.setItem('todos', JSON.stringify(todos))
}

const getFromLocal = todo => {
	let todos
	if (window.localStorage.getItem('todos') == null) {
		errorInfo.textContent = 'Brak zadań na liście'
	} else {
		todos = JSON.parse(localStorage.getItem('todos'))
		todos.forEach(item => {
			const newTodo = document.createElement('li')
			newTodo.textContent = item
			addTodoPanel(newTodo)
			todoList.append(newTodo)
			errorInfo.textContent = ''
		})
	}
}

const dropFromLocal = todo => {
	let todos
	if (window.localStorage.getItem('todos') == null) {
		return
	} else {
		todos = JSON.parse(localStorage.getItem('todos'))
	}

	const itemIndex = todo
	todos.splice(todos.indexOf(todo), 1)
	localStorage.setItem('todos', JSON.stringify(todos))
}

const editLocalTodo = (todo, newTodo) => {
	let todos
	if (window.localStorage.getItem('todos') == null) {
		return
	} else {
		todos = JSON.parse(localStorage.getItem('todos'))

		const itemIndex = todo

		console.log(todos.indexOf(itemIndex))
		todos[todos.indexOf(itemIndex)] = newTodo
		localStorage.setItem('todos', JSON.stringify(todos))
	}
}

document.addEventListener('DOMContentLoaded', main)
