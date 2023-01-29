const input = document.querySelector('#input');
const  btn = document.querySelector('.create');
const myTodos = document.querySelector('.todos');

btn.onclick = (() => {
    let val = input.value;
    Todos(val);
    if(val === '' && val){
        input.style.borderColor = 'red';
    }
    input.value = '';

})


const Todos = ((val) => {
    const myTodo = document.createElement('div')
    const removeButton = document.createElement('button') 
    myTodo.innerHTML = val; 
    myTodo.style.display = 'block';
    myTodos.append(myTodo);
    myTodos.append(removeButton);
    myTodos.style.display = 'flex';
    myTodos.style.direction = 'column';
    removeButton.innerHTML = 'Delete';
    removeButton.style.backgroundColor = 'red';
    removeButton.style.color = 'white';
    removeButton.style.border = 'red';
;

    removeButton.onclick = (() => {
        myTodo.remove('');
        removeButton.remove('');
    })
    
})



