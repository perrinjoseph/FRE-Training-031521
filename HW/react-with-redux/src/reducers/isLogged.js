const loggedReducer = (state = false,action)=>{
    switch(action.state){
        case "SIGN_IN":
            return true;
        default: return state;
    }
}

export default loggedReducer;