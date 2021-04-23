import React from "react";
import { createStore, compose } from "redux";
import rootReducer from "../Reducers";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const compostEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer,compostEnhancer());
export default store;

export type StateType = ReturnType<typeof rootReducer>;
