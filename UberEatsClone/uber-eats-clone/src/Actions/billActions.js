const billActions = {
    saveBill: (bill)=>{
        return {
            type: "SAVE_BILL",
            bill,
        }
    }
}
export default billActions;