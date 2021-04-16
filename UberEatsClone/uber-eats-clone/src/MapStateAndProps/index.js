import AllActions from '../Actions/index';

export const mapStateToProps = (state)=>{
    return{
      state
    }
  }
  
export const mapDispatchToProps =()=>{
    return{
      setMenu:AllActions.menuActions.setMenu,
      addToCart: AllActions.cartActions.addToCart,
      deleteFromCart: AllActions.cartActions.deteleFromCart,
      saveBill: AllActions.billActions.saveBill,
      clearCart: AllActions.cartActions.clearCart,
    }
}
