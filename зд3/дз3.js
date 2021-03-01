var inputtask = document.querySelector("#task");
var ultask = document.querySelector("#ultask");
var clearBtn = document.querySelector("#clear");
var inputdata = document.querySelector("#dataset")

//проверка на заполненность списка
inputdata.addEventListener("keypress",function(){

    if(event.code == "Enter"){
        
        if((inputtask.validity.valueMissing == true) && (inputdata.validity.valueMissing == true)){
            console.log(inputtask.validity.valueMissing)
        }
        else if((inputtask.validity.valueMissing == false) && (inputdata.validity.valueMissing == false))
        {   
            creatandappend()

        }
        
    }
})

function creatandappend(){
//создание и запись значений элемнта списка
    let li = document.createElement("li")
    let span = document.createElement("span")
    let icon = document.createElement("i")
    var time = document.createElement("span")
    
    icon.classList.add("fas", "fa-trash-alt")
    span.append(icon)
    
    var task = inputtask.value
    var data = inputdata.value
    for(let i = 0;i<localStorage.length;i++){
        if(task === localStorage.key(i)){
            alert("Element exists")
            return;
        }
    }
    
    ultask.appendChild(li).append(span,"   task:  ",task,"    data:   ",data, "time:" ,time)
   
   
//таймер
    var a = setInterval(function(){
    
    let date = new Date(data)
    let now =new Date()
    let set = date - now
    
    let day = Math.floor(set / 1000 / 60 / 60 / 24);
    let hours = Math.floor(set / 1000 / 60 / 60) % 24;
    let min = Math.floor(set / 1000 / 60 ) % 60 ;
    let sec = Math.floor(set / 1000 ) % 60;

    time.innerHTML = day + ' дней:' + hours + ' часов:' + min + ' минут:' + sec + ' секунд:'
    if((day==0) &&(hours==0) && (min==0) && (sec==0)){
          
        clearInterval(a)
    }
    },1000)
    
//функци сохранения у удаления
    save(task,data)
    del(span,task,li)
//очистка полей
    inputtask.value = ""
    inputdata.value = ""
}

//функция сохранения
function save(key,value){
    localStorage.setItem(key,value)
}

//функция загрузки
function load(){
    for(let i = 0;i<localStorage.length;i++){
    
    let li = document.createElement("li")
    let span = document.createElement("span")
    let icon = document.createElement("i")
    let time = document.createElement("span")
    icon.classList.add("fas", "fa-trash-alt")
    span.append(icon)
    
    
    ultask.appendChild(li).append(span,"   task:  ",localStorage.key(i),"    data:   ",localStorage.getItem(localStorage.key(i))," time:",time)
    
    var a = setInterval(function(){
       
        let date = new Date(localStorage.getItem(localStorage.key(i)))
        let now =new Date()
        let set = date - now
       
        let day = Math.floor(set / 1000 / 60 / 60 / 24);
        let hours = Math.floor(set / 1000 / 60 / 60) % 24;
        let min = Math.floor(set / 1000 / 60 ) % 60 ;
        let sec = Math.floor(set / 1000 ) % 60;
        
    
       time.innerHTML = day + ' дней:' + hours + ' часов:' + min + ' минут:' + sec + ' секунд:'
       
        if((day==0) &&(hours==0) && (min==0) && (sec==0)){
          
            clearInterval(a)
        }
        },1000)
        del(span,localStorage.key(i),li)
    } 
   
}
// функция удаления
function del(span,task,li){
    span.addEventListener('click',function(){
        for(let i = 0;i<localStorage.length;i++){
            var key = localStorage.key(i).length
            var keystring = task.substr(0,key)
            if(keystring === localStorage.key(i)){
                li.remove()
                localStorage.removeItem(localStorage.key(i))
                break;
            }else{}

        }
   })
}
//кнопка очистить
clearBtn.addEventListener("click", function() {
    ultask.innerHTML = "";
    localStorage.clear();
});
load()