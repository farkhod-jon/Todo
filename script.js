const input = document.querySelector('#input');
const  btn = document.querySelector('.create');
const myTodos = document.querySelector('.todos');

btn.onclick = (() => {
    let val = input.value;
    input.style.borderColor = 'black';
    if(!val){
        input.style.borderColor = 'red';    
    }else{
        if(isTodoEqual(val)){
            alert('Bunaqa Todo mavjud!');
            input.value = '';
        }else{
            Todos(val);
            input.value = '';
        }
    }
    
    
    
    
    
})


const Todos = ((val) => {
    const myTodoText = document.createElement('p');
    const singleTodo = document.createElement('div')
    const removeButton = document.createElement('button');
    myTodoText.innerText = val;
    singleTodo.append(myTodoText);
    singleTodo.append(removeButton);
    singleTodo.classList.add('todo_div');
    myTodos.append(singleTodo);
    removeButton.innerHTML = 'Delete';
    removeButton.style.backgroundColor = 'red';
    removeButton.style.color = 'white';
    removeButton.style.border = 'red';
    removeButton.style.padding = '10px';
    myTodoText.style.paddingTop = '15px';
    myTodoText.style.marginRight = '10px';

    removeButton.onclick = (() => {
        singleTodo.remove('');
        removeButton.remove('');
    })
})

function isTodoEqual(val) {
    const todoText = document.querySelectorAll('.todo_div p');
  
    let result = false;

    if(todoText && todoText.length){
        todoText.forEach((e) => {
            if(e.innerHTML == val){
                result = true;
            }
        })
    }

    return result;
    
}



