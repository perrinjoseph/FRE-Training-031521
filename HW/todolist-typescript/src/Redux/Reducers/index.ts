import React from 'react';
import {combineReducers} from 'redux'
import todoListReducer from './todoListReducer'

const rootReducer = combineReducers({
    todos:todoListReducer,
})

export default rootReducer;