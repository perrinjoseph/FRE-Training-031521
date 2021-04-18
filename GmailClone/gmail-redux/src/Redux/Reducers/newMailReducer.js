const initialValue = {
    create:true,
    minimize:false,
}

const newMailReducer = (state = initialValue,action) =>{
    switch(action.type){
        case "OPEN_MAIL":
            return{
                ...state,
                create:true,
            }
        case "CLOSE_MAIL":
            return {
                ...state,
                create:false,
            }
        case "MINIMIZE_MAIL":
            return{
                ...state,
                minimize:!state.minimize,
            }
        default: return state
    }
}
export default newMailReducer;