import {createStore} from 'redux'
import rootReducer from '../Reducers/'
import {loadState, saveState} from '../LocalStorage/'


const persistedState = loadState();
const store =  createStore(
    rootReducer,
    persistedState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(()=>{
    saveState({
        albums: store.getState().albums.albums
    })
})

export default store;