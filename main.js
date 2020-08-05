const todo =document.querySelector('#to-do')
const add =document.querySelector('#add')
const btn =document.querySelector('#btn')
const list =document.querySelector('#list')
const error =document.querySelector('#error')

//btn.addEventListener('onclick',onsubmit)
btn.onclick = onsubmit;

function onsubmit(e){
    e.preventDefault();
    
    if(add.value==''){
        error.classList.add('error')
        error.innerHTML='enter your list';

        setTimeout(()=>error.remove(), 3000);

    }else{
         var li = document.createElement('li');//li

    var checkbox = document.createElement('input');
        checkbox.type = "checkbox";
        checkbox.value = 1;
        checkbox.name = "todo[]";
        checkbox.id ="check";

    li.appendChild(checkbox);

    var text = document.getElementById('texto');
    li.appendChild(document.createTextNode(add.value));
    list.appendChild(li); 

        //clear field
        add.value='';
    }
}