import React from 'react';
import { act } from 'react-dom/test-utils';

export enum actionsTypes{
    ADD_TODO = "ADD_TODO",
    DELETE_TODO = "DELETE_TODO",
    MARK_TODO = "MARK_TODO",
    EDIT_TODO = "EDIT_TODO",
    TOGGLE_TODO="TOGGLE_TODO",
}

type todo = {
    title:string,
    complete:boolean,
    edit:boolean,
}


interface todoActions{
    addTodo(todo:todo):{type:string,payload:todo},
    deleteTodo(todo:todo):{type:string,payload:todo},
    markComplete(todo:todo):{type:string,payload:todo},
    editTodo(todo:todo,change:string):{type:string,payload:{todo:todo,change:string}},
    toggleTodo(todo:todo):{type:string,payload:todo}
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
    },
    editTodo: function(todo:todo,change:string){
        return{
            type:actionsTypes.EDIT_TODO,
            payload:{todo:todo,change:change}
        }
    },
    toggleTodo: function(todo:todo){
        return{
            type:actionsTypes.TOGGLE_TODO,
            payload:todo,
        }
    }
} 

export default todoListActions;