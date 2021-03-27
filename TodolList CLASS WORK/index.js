//class work.
// const todoAPI = (() => {
//     const baseurl = 'https://jsonplaceholder.typicode.com';
//     const todopath = 'todos';

//     const getAllTodos = () => 
//         fetch([baseurl, todopath].join('/'))
//             .then((response) => response.json());

//     const deleteTodo = (id) => 
//         fetch([baseurl, todopath, id].join('/'), {  method: 'DELETE' });

//     return {
//         getAllTodos,
//         deleteTodo
//     };
// })();

// // M: model
// // V: view
// // C: control

// const View = (() => {
//     const domString = {
//         todolist: 'todolist-content',
//         removebtn: 'btn-remove'
//     }

//     const render = (element, htmlTemplate) => {
//         element.innerHTML = htmlTemplate;
//     }

//     const creatTodoTmp = (todoArray) => {
//         let template = '';
//         todoArray.forEach(ele => {
//             template += `
//                 <li>
//                     <span>${ele.title}</span>
//                     <button class="btn-remove" id="${ele.id}">X</button>
//                 </li>
//             `
//         });
//         return template;
//     }

//     return {
//         domString,
//         render,
//         creatTodoTmp
//     };
// })();

// const Model = ((api, view) => {
//     class Todo {
//         constructor(id, userId, title, completed) {
//             this.id = id;
//             this.userId = userId;
//             this.title = title;
//             this.completed = completed;
//         }
//     }

//     class State {
//         #todolist = [];

//         get todolist() {
//             return this.#todolist;
//         }
//         set todolist(newlist) {
//             this.#todolist = newlist;

//             const todoElement = document.querySelector('#' + view.domString.todolist);
//             const htmltmp = view.creatTodoTmp(this.#todolist);
//             view.render(todoElement, htmltmp);
//         }
//     }

//     const getAllTodos = api.getAllTodos;
//     const deleteTodo = api.deleteTodo;

//     return {
//         getAllTodos,
//         deleteTodo,
//         Todo,
//         State
//     }
// })(todoAPI, View);

// const AppControl = ((view, model) => {
//     const state = new model.State();

//     const addListenerOnRemove = () => {
//         const todoElement = document.querySelector('#' + view.domString.todolist);
//         todoElement.addEventListener('click', (event) => {
//             state.todolist = state.todolist.filter(todo => +todo.id !== +event.target.id);
//             model.deleteTodo(+event.target.id);
//         });
//     }
    
//     const init = () => {
//         model.getAllTodos().then(data => {
//             state.todolist = data;
//             addListenerOnRemove();
//         });
//     }

//     return {
//         init
//     }
// })(View, Model);

// AppControl.init();

