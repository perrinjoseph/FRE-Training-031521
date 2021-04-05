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
    }
}

export default todoListReducer;