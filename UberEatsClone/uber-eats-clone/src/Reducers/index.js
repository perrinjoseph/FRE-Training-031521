import {combineReducers} from 'redux';
import menuReducer from './menuReducer';
import cartReducer from './cartReducer';
import billReducer from './billReducer';

const rootReducer = combineReducers({
    menu:menuReducer,
    cart:cartReducer,
    bills:billReducer,
})

export default rootReducer;