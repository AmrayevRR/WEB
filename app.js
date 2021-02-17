//Selectors
const toDoInput = document.querySelector(".toDo-input");
const toDoButton = document.querySelector(".toDo-button");
const toDoList = document.querySelector(".toDo-list");

//Event listeners
toDoButton.addEventListener('click', addToDo);
toDoList.addEventListener('click', deleteCheck);


//Functions

function addToDo(event) {
    //Prevent form from submitting
    event.preventDefault();
    //ToDo div
    const toDoDiv = document.createElement("div");
    toDoDiv.classList.add("toDo");
    //Create li
    const newToDo = document.createElement('li');
    newToDo.innerText = toDoInput.value;
    newToDo.classList.add('toDo-item');
    toDoDiv.appendChild(newToDo);
    //Check mark button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class = "fas fa-check"></i>';
    completedButton.classList.add("complete-button");
    toDoDiv.appendChild(completedButton);
    //Check trah button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class = "fas fa-trash"></i>';
    trashButton.classList.add("trash-button");
    toDoDiv.appendChild(trashButton);
    //Append to list
    toDoList.appendChild(toDoDiv);
    //Clear ToDo input value
    toDoInput.value = "";
}

function deleteCheck(e) {
    const item = e.target;
    //Delete toDo
    if (item.classList[0] === "trash-button") {
        const toDo = item.parentElement;
        toDo.remove();
    }

    //Check mark
    if (item.classList[0] === "complete-button") {
        const toDo = item.parentElement;
        toDo.classList.toggle('completed');
    }
}