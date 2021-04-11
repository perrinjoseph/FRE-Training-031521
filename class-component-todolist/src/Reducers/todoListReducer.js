import {v4 as uuid} from 'uuid'
let initialState = {
    todos:[]
}

const todoListReducer = (state = initialState,action)=>{
    switch(action.type){
        case "ADD_TODO":
            return {
                ...state,
                todos:[{id:uuid(),title:action.todo,completed:false},...state.todos]
            }
        case "DELETE_TODO":
            return {
                ...state,
                todos:state.todos.filter(todo=>{
                        return(todo.id !== action.id)
                    })
            }
        case "MARK_COMPLETE":
            return {
                ...state,
                todos: state.todos.map((el)=>{
                    if(el.id===action.id)el.completed = !el.completed;
                    return el
                })
            }
        case "SET_TODOS":
            return{
                ...state,
                todos:[...action.todos]
            }
        default:return state;
    }
}



export default todoListReducer;
