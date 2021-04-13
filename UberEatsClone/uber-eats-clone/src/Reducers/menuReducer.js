let initialState = []

const menuReducer = (state = initialState,action)=>{
    switch(action.type){
        case "SET_MENU": 
            return [...action.items];
        default: return state;
    }
}

export default menuReducer;