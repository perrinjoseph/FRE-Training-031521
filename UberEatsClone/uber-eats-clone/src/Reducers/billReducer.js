import {v4 as uuid} from 'uuid'
const initialValue = [];


const billReducer = (state = initialValue, action)=>{
    switch(action.type){
        case "SAVE_BILL":
            return [{date:new Date(),_id:uuid(),bill:[...action.bill]},...state];
        default: return state;
    }
}

export default billReducer;