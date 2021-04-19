const userActions = {
    loginUser: function(user){
        return{
            type:"LOGIN_USER",
            user,
        }
    },
    logoutUser: function(){
        return{
            type:"LOGOUT_USER"
        }
    },
    setInbox: function(inbox){
        return{
            type:"SET_INBOX",
            inbox,
        }
    },
    selectMail: function(mail){
        return{
            type:"SELECT_MAIL",
            mail,
        }
    },
    unSelectMail: function(){
        return{
            type:"UN_SELECT_MAIL"
        }
    }
}
export default userActions;