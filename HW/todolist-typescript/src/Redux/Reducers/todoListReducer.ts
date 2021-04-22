import React from 'react';
import {AnyAction} from 'redux'
import {actionsTypes}from '../Actions/todolistActions'

type todo = {
    title:string,
    completed:boolean
}

interface initialValuesInterface{
    todos:todo[],
}

const initialValue:initialValuesInterface = {
    todos:[]
}

const todoListReducer = (state = initialValue,action:AnyAction)=>{
    switch(action.type){
        case actionsTypes.ADD_TODO:
            return{
                ...state,
                todos:[action.payload,...state.todos]
            }
        default: return state;
    }
}
export default todoListReducer;


