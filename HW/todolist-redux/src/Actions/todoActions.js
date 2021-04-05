class Actions {
    addTodo = (todo)=>{
       return {
           type: "ADD_TODO",
           todo
       }
    }
    
    deleteTodo = (todo)=>{
       return {
           type: "DELETE_TODO",
           todo
       }
    }
}    

export default Actions;