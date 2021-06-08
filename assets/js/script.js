var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

var taskFormHandler = function(event) {
  event.preventDefault();
  var taskNameInput = document.querySelector("input[name='task-name']").value;
  var taskTypeInput = document.querySelector("select[name='task-type']").value;
  // check if input values are empty strings
if (!taskNameInput || !taskTypeInput) {
  alert("You need to fill out the task form!");
  return false;
}
formEl.reset();

  var taskDataObj = {name: taskNameInput, type: taskTypeInput};                  //package up data as an object
  createTaskEl(taskDataObj);                                                      // send is as an argument into createTaskEl function
  };
  
  var createTaskEl = function(taskDataObj) {

    //create list item
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";

     //create div to hold the new task info; add it to the list 
    var taskInfoEl = document.createElement('div');
    taskInfoEl.className = "task-info"; 

    //add HTML content to the div
    taskInfoEl.innerHTML = "<h3 class = 'task-name'>" + taskDataObj.name + "</h3><span class='task-type'>" + taskDataObj.type + "</span>";

    //append the div to the li and the li to the ul--append each child to its parent 
    listItemEl.appendChild(taskInfoEl)
    tasksToDoEl.appendChild(listItemEl);
  };

  formEl.addEventListener("submit", taskFormHandler);

