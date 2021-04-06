let initialState = {
    todoList: []
}

const todoListReducer = (state = initialState,action)=>{
    switch(action.type){
        case "ADD_TODO":
            return{
                ...state,
                todoList:[...state.todoList,action.todo]
            }
        case "DELETE_TODO":
            return{
                ...state,
                todoList:[...state.todoList.filter(val=>val!=action.todo)]
            }
        default: return state
    }
}

export default todoListReducer;