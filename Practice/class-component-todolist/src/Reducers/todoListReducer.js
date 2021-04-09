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
                        console.log("the ID",todo.id)
                        console.log("THE",action.id)
                        return(todo.id !== action.id)
                    })
            }
        default:return state;
    }
}



export default todoListReducer;
