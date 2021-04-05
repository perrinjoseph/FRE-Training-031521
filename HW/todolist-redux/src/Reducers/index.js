import { combineReducers } from 'redux'
import todoListReducer from '../Reducers/todoListReducer'

const rootReducer = combineReducers({
    todoList: todoListReducer,
})

export default rootReducer;
