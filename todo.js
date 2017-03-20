var todos = [];

function addTodo(todo){
    todos.push(todo);
    displayTodos();
}
function displayTodos() {
    console.log('My todos:', todos);
}
function updateTodo(seq,value){
    todos[seq] = value;
    displayTodos();
}
function deleteTodo(position) {
    todos.splice(position,1);
    displayTodos();
}
