var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

var createTaskHandler = function(event) {
  event.preventDefault();
  var taskNameInput = document.querySelector("input[name='task-name']").value;
  var taskTypeInput = document.querySelector("select[name='task-type']").value;

    //create list item
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";

     //create div to hold the new task info; add it to the list 
    var taskInfoEl = document.createElement('div');
    taskInfoEl.className = "task-info"; 

    //add HTML content to the div
    taskInfoEl.innerHTML = "<h3 class = 'task-name'>" + taskNameInput + "</h3><span class='task-type'>" + taskTypeInput + "</span>";

    //append the div to the li and the li to the ul--append each child to its parent 
    listItemEl.appendChild(taskInfoEl)
    tasksToDoEl.appendChild(listItemEl);
    
  }
  
  formEl.addEventListener("submit", createTaskHandler);

