const input = document.querySelector('#input');
const  btn = document.querySelector('.create');
const myTodos = document.querySelector('.todos');

btn.onclick = (() => {
    let val = input.value;
    Todos(val);

    input.value = '';
})


const Todos = ((val) => {
    const myTodo = document.createElement('div')
    myTodo.innerHTML = val;    
    myTodos.append(myTodo);
})



