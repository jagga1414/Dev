let addTodoButton = document.querySelector(".add-todo")
let todoInput = document.querySelector(".todo-input")
// let deleteTodoButton = document.querySelector(".todo-item");

todoInput.addEventListener("keypress", function(e){
    if(e.key == "Enter"){
            addTodo();
    }
});
addTodoButton.addEventListener("click", addTodo);

function deleteTodo(e){
    let toBeDelete = e.target.parentNode;
    toBeDelete.remove();
}



function addTodo(){
    let todoInputValue = todoInput.value;
    if(todoInputValue){

        appendTodo(todoInputValue);

        todoInput.value = "";
    }
}

function appendTodo(todo){

    let todoItemDiv = document.createElement("div");
    todoItemDiv.classList.add("todo-item")
    let pTag = document.createElement("p")
    pTag.classList.add("todo-element");
    pTag.textContent = todo;

    let deleteTodoButton = document.createElement("button")
    deleteTodoButton.classList.add("delete-todo");
    deleteTodoButton.textContent = "Delete";

    deleteTodoButton.addEventListener("click", deleteTodo);

    todoItemDiv.append(pTag);
    todoItemDiv.append(deleteTodoButton);
    let todosList = document.querySelector(".todo-list-container")
    todosList.append(todoItemDiv);

}