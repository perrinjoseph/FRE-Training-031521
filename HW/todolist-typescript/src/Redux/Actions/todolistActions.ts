import React from 'react';

export enum actionsTypes{
    ADD_TODO = "ADD_TODO",
    DELETE_TODO = "DELETE_TODO",
    MARK_TODO = "MARK_TODO",
}

type todo = {
    title:string,
    completed:boolean,
}

interface todoActions{
    addTodo(todo:todo):{type:string,payload:todo},
    deleteTodo(todo:todo):{type:string,payload:todo},
    markComplete(todo:todo):{type:string,payload:todo}
}

const todoListActions:todoActions= {
    addTodo: function(todo:todo){
        return {
            type:actionsTypes.ADD_TODO,
            payload:todo
        }
    },
    deleteTodo: function(todo:todo){
        return {
            type:actionsTypes.DELETE_TODO,
            payload:todo
        }
    },
    markComplete: function(todo:todo){
        return{
            type:actionsTypes.MARK_TODO,
            payload:todo,
        }
    }
} 

export default todoListActions;