const mailActions = {
    openMail: function(){
        return{
            type:"OPEN_MAIL"
        }
    },

    closeMail: function(){
        return{
            type:"CLOSE_MAIL"
        }
    },

    minimizeMail: function(){
        return{
            type:"MINIMIZE_MAIL"
        }
    }
}

export default mailActions;