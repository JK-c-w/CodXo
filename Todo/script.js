
let form=document.querySelector("form");
let inputTask=document.querySelector(".input-task");
let taskList=document.querySelector('.task-list');
let data=document.querySelector('.DMY h1');
let week=document.querySelector('.week-month-year .day');
let mYear=document.querySelector('.week-month-year .month-year');

let months=["January","Februay","March","Apirl","May","June","July","August","September","October","November","December"];
let days=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
let now=new Date();
let date=now.getDate();
let mon=now.getMonth();
let month=months[mon-1];
let d=now.getDay();
let day=days[d-1];
let year=now.getFullYear();

data.textContent=date;
week.textContent=day;
mYear.textContent=`${month}, ${year}`;

form.addEventListener('submit', (event) => {
    event.preventDefault();
    addTodo();
});

function addTodo(){
    const todoText = inputTask.value.trim();
        if (todoText !== '') {
            const li = document.createElement('div');
            li.classList.add("task");
            li.textContent = todoText;
            const icons=document.createElement('div');
            icons.classList.add('icons');
            const comp=document.createElement('button');
            comp.classList.add('done');
            comp.textContent="👍"
            icons.appendChild(comp);
            const deleteBtn = document.createElement('button');
            deleteBtn.classList.add('delete');
            deleteBtn.textContent = 'X';
            deleteBtn.addEventListener('click', () => {
                taskList.removeChild(li);
            });
            icons.appendChild(deleteBtn);
            comp.addEventListener('click', () => {
                li.classList.add('completed');
                icons.removeChild(comp);
            });
            li.appendChild(icons);
            taskList.appendChild(li);
            inputTask.value ='';
        }
}