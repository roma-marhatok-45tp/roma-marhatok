var input = document.querySelector('input[type = "text"]');
var ul = document.querySelector('ul');
var container = document.querySelector('div');
var lists = document.querySelectorAll('li');
var span = document.querySelectorAll('span');
var clearBtn = document.querySelector('#clear');
var uldata = document.querySelector('#datalist')

//ункция которая загружает todo-app, если список найден в локальном хринилище
function loadTodo() {
    if (localStorage.getItem('todoList')) {
        ul.innerHTML = localStorage.getItem('todolist');
    }
}
inputdata.addEventListener('keypress',function(e){
    if(e.keyCode == 13){
        alert('21334')
        var li = document.createElement('li')
        var spanData =createElement('span')
        var newdata =this.value
        this.value = ''
        uldata.appendChild(li).append(spanData,newdata)
        
    }
})
//Обработчик каждого события при вводе, чтобы добавить новое задание в список
input.addEventListener('keypress', function(e) {
    if (e.keyCode == 13) {
        //Создание нового задания при нажатии Enter
        var li = document.createElement('li');
        var spanElement = document.createElement('span');
        var icon = document.createElement('i');

        var newTodo = this.value;
        this.value = '';

        icon.classList.add('fas', 'fa-trash-alt');
        spanElement.append(icon);
        ul.appendChild(li).append(spanElement, newTodo);
    }
});
function timer(){
var my_timer
}
//Удаление todoList 
clearBtn.addEventListener('click', function() {
    ul.innerHTML = '';
    localStorage.removeItem('todoList', ul.innerHTML);
});
loadTodo();