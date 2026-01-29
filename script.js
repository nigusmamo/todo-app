const input = document.getElementById("todoInput")
const addBtn = document.getElementById("addBtn")
const clearBtn = document.getElementById("clearBtn")
const todoList = document.getElementById("todoList")

const addtodo = () => {
    const todoText = input.value
    const li = document.createElement("li")
    li.textContent = todoText
    todoList.appendChild(li)
    input.value = ""
}

const cleartodo = () => {
    todoList.innerHTML = ""
}

addBtn.addEventListener("click", addtodo)
clearBtn.addEventListener("click", cleartodo)