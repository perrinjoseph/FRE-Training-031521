import AllActions from "../Actions";

let initialState = []

const cartReducer = (state = initialState, action)=>{
    switch(action.type){
        case "ADD_TO_CART":
            return [...state,action.item]
        case "DELETE_FROM_CART":
            return state.filter((item)=>item.id !==action.id)
        default: return state;
    }
}   

export default cartReducer