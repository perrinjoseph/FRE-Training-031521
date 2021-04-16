// ✔︎ MY REDUX LIBRARY



// ✔︎ Initial Value
let initialValue = {
    students:[],
    teachers:[
        {name:"Pj",age:28},
        {name:"Brian",age:38}
    ]
}

// ✔︎ Reducer
const rootReducer = (state=initialValue,action) =>{
    switch(action.type){
        case "ADD_STUDENT":
            return {
                ...state,
                students:[action.student,...state.students]
            };
        case "REMOVE_STUDENT":
            return{
                ...state,
                students:state.students.filter((stud)=>stud.id!==action.student.id)
            };
        default: return state;
    }
}

// ✔︎ My Create Store Implementation 
function createStore(rootReducer,preloadedState){
    let state;
    let listeners = []; 
    preloadedState? state = preloadedState:state = rootReducer(undefined,{type: "____INIT____"})

    function getState(){
        return state;
    }

    function dispatch(action){
        if(typeof action !== "object") 
        throw new Error(`The argument passed into dispatch is supposed to be an Object. You have passed in ${typeof action}`)
        state = rootReducer(state,action);
        if(listeners.length > 0)
        listeners.forEach(listener=>listener(state));
    }

    function subscribe(listener){
        if(typeof listener !== "function")
        throw new Error("Subscribe's argument should be a callback function")
        listeners.push(listener)
    }
 
    return{
        getState,
        dispatch,
        subscribe
    }
}

//create store
const store = createStore(rootReducer,initialValue);
store.subscribe((state)=>console.log(state))

//dispatch some actions
store.dispatch({
    type:"ADD_STUDENT",
    student:{
        name:"Perrin",
        id:"123wd3131231cdz43a",
    }
})

store.dispatch({
    type:"ADD_STUDENT",
    student:{
        name:"Michael",
        id:"123wd31",
    }
})

store.dispatch({
    type:"REMOVE_STUDENT",
    student:{
        id:"123wd31",
    }
})
