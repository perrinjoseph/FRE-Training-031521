const state = {
    PENDING: "pending",
    FULFILLED: 'fulfilled',
    REJECTED: 'rejected',
}

class MyPromise {
    #state;
    #value;
    #reason;
    #thenQueue;
    #finallyQueue;
    
    constructor(computationalFn){
        this.#state= state.PENDING;
        this.#value = undefined;
        this.#reason = undefined;
        this.#thenQueue = [];
        this.#finallyQueue = [];

        if(typeof computationalFn ==='function'){
            try{
                computationalFn(
                    this.onResolved,
                    this.onRejected
                );
            }
            catch(err){

            }
           
        } 
    }

    onResolved=(value)=>{ 
        if(this.#state === state.PENDING){
            this.#state = state.FULFILLED;
            this.#value = value;
            this.propagateFulfilled();
        }
    }

    onRejected=(reason)=>{
        if(this.#state === state.PENDING){
            this.#state = state.REJECTED;
            this.#reason = reason;
            this.propagateRejected();
        }
    }
    
    then=()=>{

    }

    catch=()=>{

    }

    finally=()=>{

    }

    propagateFulfilled=()=>{

    }

    propagateRejected=()=>{
        
    }

}

const promise = new MyPromise((resolve,reject)=>{
    resolve("hi")
})