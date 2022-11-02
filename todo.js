// submit task on a form and should be able to add multiple tasks
function formSubmit () {
const submit = document.querySelector('#submit')
    submit.addEventListener('click', (e) => {
        e.preventDefault()
        const task = document.querySelector('#task').value
        addTask(task)
        clearInput()
    } )
}
// need to be able to add tasks
function addTask (tasks) {
    const newTask = document.createElement('div')
    newTask.addEventListener('click', (e) => {
        event.target.style.textDecoration = "line-through";
    })

    newTask.addEventListener('dblclick',(e) => {
        newTask.remove()
    } )
    const taskName = document.createElement('p')

    taskName.innerText = tasks
    newTask.append(taskName)
    document.querySelector('body').append(newTask)
}
//clear inputs after submission
function clearInput(){
    const tasks = document.querySelector('#task')
    tasks.value=""
}

formSubmit()