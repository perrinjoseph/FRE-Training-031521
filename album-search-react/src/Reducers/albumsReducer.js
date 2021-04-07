const initialState = {
    albums:[]
}

const albumsReducer = (state = initialState,action)=>{
    switch(action.type){
        case "SET_ALBUMS":
            return{
                ...state,
                albums: [...action.album]
            }
        default: return state;
    }
}
export default albumsReducer