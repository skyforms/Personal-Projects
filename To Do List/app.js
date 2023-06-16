// Selectors

const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

//Event Listeners

todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);

// Functions

function addTodo(event) {
  //Prevent form from submitting
  event.preventDefault();
  ///Create todoDiv
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  //Create li
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);

  //Complete button
  const completedButton = document.createElement("button");
  completedButton.innerHTML =
    '<i class="icon-social-rewards-heart-like-circle-18"></i>';
  completedButton.classList.add("complete-btn");
  todoDiv.appendChild(completedButton);

  //Delete button
  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = '<i class="icon-interface-essential-bin-28"></i>';
  deleteButton.classList.add("delete-btn");
  todoDiv.appendChild(deleteButton);

  //Append tasks to list
  todoList.appendChild(todoDiv);

  //Clear todoInput value
  todoInput.value = "";
}

function deleteCheck(e) {
  const item = e.target;
  //Delete to-do
  if (item.classList[0] === "delete-btn") {
    const todo = item.parentElement;
    // Animation
    todo.classList.add("fall");
    todo.addEventListener("transitionend", function () {
      todo.remove();
    });
  }
  //Check off task
  if (item.classList[0] === "complete-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}
