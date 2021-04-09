export const addTodo = (todo)=>{
    return {
        type:"ADD_TODO",
        todo,
    }
}

export const deleteTodo = (id)=>{
    console.log(">>>>>>",id)
    return {
        type:"DELETE_TODO",
        id,
    }
}

