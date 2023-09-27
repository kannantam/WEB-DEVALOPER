const taskInput = document.getElementById('taskInput'); 
const dateTimeInput = document.getElementById('dateTimeInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList'); 

let date = new Date()
const currentDate = date.toISOString().split('T')[0];
date.setDate(date.getDate()+30)
const endDate = date.toISOString().split('T')[0];
dateTimeInput.min = currentDate+"T00:00"; 
dateTimeInput.max = endDate+"T00:00"; 

  addTaskBtn.addEventListener('click', () => {
    const taskText = taskInput.value;
    const dateTimeValue = dateTimeInput.value;
    
    if (taskText !=='') {
        const taskBox = document.createElement('div');
        taskBox.classList.add('task');
      
        const taskTextElement = document.createElement('div'); 
        
        taskTextElement.textContent = taskText;
        
        taskBox.appendChild(taskTextElement);
       
        const date = new Date(dateTimeValue);
        const formatedDate = `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
        const dateTimeElement = document.createElement('div');
        
        dateTimeElement.textContent = formatedDate;
        dateTimeElement.classList.add('date-time');
      
        
        taskBox.appendChild(dateTimeElement);

        const actionsElement = document.createElement('div');
       
        actionsElement.classList.add('actions');
       
        const doneBtn = document.createElement('button');
       
        
        doneBtn.classList.add('check-btn');
        doneBtn.innerHTML ='<i class="bi bi-check2 btn btn-primary"></i>'
        doneBtn.addEventListener('click', () => {
            taskTextElement.classList.toggle('completed');
            dateTimeElement.style.textDecoration = "line-through"
            
        });
        actionsElement.appendChild( doneBtn );
        
        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('trash-btn');
        deleteBtn.innerHTML = '<i class="bi bi-trash3 btn btn-danger"></i>'
        deleteBtn.addEventListener('click', () => {
            taskList.removeChild(taskBox);
        });
        actionsElement.appendChild(deleteBtn);

        taskBox.appendChild(actionsElement);
        
        taskList.appendChild(taskBox);
        taskInput.value = '';
        dateTimeInput.value = '';
        
    }else{
        alert("Enter The Input")
    }
});