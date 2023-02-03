document.addEventListener("DOMContentLoaded", function() {


    const tasks = []

    function renderList(list) {

        const taskList = document.getElementById("TaskList")
            taskList.innerText = ""

        for (let taskItem of list) {

            const newTask = document.createElement("li")
            newTask.innerHTML = taskItem
            taskList.append(newTask)
        }
    }
    renderList(tasks)



    const form = document.forms[0]

    form.onsubmit = function(event) {
        event.preventDefault()

        const newTaskInput = form.newTaskInput
        const inputValue = newTaskInput.value

        if (inputValue == "") {
            alert ("Please enter a new Task")
        }
        else {
            tasks.push(inputValue)
            renderList(tasks)
        }

        newTaskInput.value = ""
    }


    // `<input type="text" value="${inputValue}" readonly>`














































    // const form = document.getElementById("newTask")
    // const input = document.getElementById("newTaskInput")
    // const newTask = input.value
    // const listElement = document.getElementById("tasks")

    // const submitButton = document.getElementById("submitNewTask")

    // // document.getElementById("submitNewTask").onsubmit

    // // object.addEventListener("submit", myScript);
    
    

    // form.addEventListener("submit", (event) => {
    //     event.preventDefault()

    //     if (newTask == "") {
    //         alert("There is no task to add")
    //         return
    //         }


    //     const newTaskElement = document.createElement("div")
    //     newTaskElement.innerText = newTask
    //     listElement.appendChild(newTaskElement)
    
    // })
})
