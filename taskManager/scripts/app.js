//Investigation Homework for next class; Variable scope on JS

var important = false;
var serverUrl = "https://fsdiapi.azurewebsites.net/";

function toggleImportant(){
    console.log("Important value changed");

    if(!important) {
        important =true;
        $("#iImportant").removeClass("far").addClass("fas");
    }
    else {
        important = false;
        $("#iImportant").removeClass("fas").addClass("far");
    }
}

function saveTask(){
    console.log("Saving Task");
    //read values from controls
    let title = $("#txtTitle").val();
    let description = $("#txtDescription").val();
    let category = $("#selCategory").val();
    let location = $("#txtLocation").val();
    let dueDate = $("#selDueDate").val();
    let color = $("#selColor").val();

    let task = new Task(title, important, category, description, location, dueDate, color) 
        console.log(task);
        $.ajax({
            url: serverUrl + "api/tasks/",
            type: 'POST',
            data: JSON.stringify(task),
            contentType: "application/json",
            success: function(res) {
                console.log("Server says:", res);

                let savedTask = JSON.parse(res); // parse json string into an object
                displayTask(savedTask);
            },
            error: function(eDetails) {
                console.error("error saving", eDetails);
            }
        });

        displayTask(task);
}

function displayTask(task) {
    let syntax =
    `<div class="task">
        <i class='important fas fa-star></i>
        <div class="description" >
            <h5>${task.title}</h5>
            <p>${task.description}</p>
        </div>
        <label class="due-date">${task.dueDate}</label>
        <label class="location">${task.location}</label>
        <button onclick="doneTask('${task._id}')" class="btn btn-sm btn-primary">Done</button>
    </div>`;

    if(task.status == 1) {
        $("#pendingList").append(syntax);
    }
    else if (task.status == 2) {
        $("doneList").append(syntax);
    }   

function doneTask(id){
    //get the obj
    for(let i = 0; i< myTasks.length; i++) {
        let task = myTasks[i];
        if(task.id == id ) {}
    }
}
function init(){
    console.log("My Task Manager");


    $("#iImportant").click(toggleImportant);
}
    // Top Uses for init functions: Load Data and Hook Events
window.onload = init;