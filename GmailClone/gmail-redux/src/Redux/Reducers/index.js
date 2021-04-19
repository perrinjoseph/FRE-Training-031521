import {combineReducers} from 'redux'
import newMailReducer from './newMailReducer'
import userReducer from './userReducer'

const rootReducer = combineReducers({
    mailState:newMailReducer,
    userInformation:userReducer,
})

export default rootReducer;