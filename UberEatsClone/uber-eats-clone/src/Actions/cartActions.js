class Actions {
    addToCart=(item) =>{
        return{
            type:"ADD_TO_CART",
            item,
        }
    }

    deteleFromCart= (id) =>{
        return {
            type:"DELETE_FROM_CART",
            id,
        }
    }

    clearCart = ()=>{
        return{
            type:"CLEAR_CART",
        }
    }
}

const cartActions = new Actions();
export default cartActions;