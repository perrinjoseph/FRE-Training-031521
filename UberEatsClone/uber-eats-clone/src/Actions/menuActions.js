class Actions{
    setMenu(items){
        return {
            type: "SET_MENU",
            items,
        }
    }
}    

const menuActions = new Actions();
export default menuActions;