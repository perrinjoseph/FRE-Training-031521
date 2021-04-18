import {combineReducers} from 'redux'
import newMailReducer from './newMailReducer'

const rootReducer = combineReducers({
    mailState:newMailReducer,
})

export default rootReducer;