const initialValue = {
    user:{},
    inbox:[],
    sent:[],
    selectMail:{}
}

const userReducer = (state=initialValue,action)=>{
    switch(action.type){
        case "LOGIN_USER":
            return{
                ...state,
                user:action.user,
            };
        case "LOGOUT_USER":
            return{
                ...state,
                user:{}
            };
        case "SET_INBOX":
            return{
                ...state,
                inbox:[...action.inbox]
            };
        case "SELECT_MAIL":
            return{
                ...state,
                selectMail:action.mail
            };
        case "UN_SELECT_MAIL":
            return{
                ...state,
                selectMail:{}
            };
        default: return state;
    }
}

export default userReducer;