const input = document.querySelector('#input');
const createBtn = document.querySelector('#createBtn');
const todos = document.querySelector('.todos');
const deleteImage = document.querySelector('#deleteImage');

createBtn.onclick = (() => {
    let val = input.value;
    
    if(input.value === ''){
        input.style.borderColor = 'red';
        alert('Input bosh!');
    }else{
        if(isEqualTodo == singleTodo.innerHTML){
            TodoAdd(val);
            input.value = '';
            input.style.borderColor = 'black';   
        }
    };
});

function TodoAdd(val) {
    const singleTodo = document.createElement('div');
    singleTodo.classList.add('todo');
    const todoText = document.createElement('p');
    const deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = 'Delete';
    todoText.innerHTML = val;
    todoText.classList.add('text');
    deleteBtn.classList.add('deleteBtn');
    singleTodo.append(todoText);
    singleTodo.append(deleteBtn);
    todos.append(singleTodo);

    TodoDelete(singleTodo, deleteBtn);
    selectedTodos(todoText, singleTodo);
}

function TodoDelete(singleTodo, deleteBtn) {
    deleteBtn.onclick = (() => {
        singleTodo.remove();
    })
}


function selectedTodos(todoText , singleTodo) {
    todoText.ondblclick = (() => {
        if(singleTodo.classList.toggle('active')){
            deleteImage.style.display = 'block';
            deleteImage.onclick = (() => {
                singleTodo.remove();
                deleteImage.style.display = 'none';
            })
        }else{
            deleteImage.style.display = 'none';
        };

        console.log(todoText.innerHTML);

    });
};

function isEqualTodo(val) {
    const todoText = document.querySelectorAll('div p');
  
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