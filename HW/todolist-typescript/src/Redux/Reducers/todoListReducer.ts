import React from "react";
import { AnyAction } from "redux";
import { actionsTypes } from "../Actions/todolistActions";

export type todo = {
  title: string;
  complete: boolean;
  edit: boolean;
};

interface initialValuesInterface {
  todos: todo[];
}

const initialValue: initialValuesInterface = {
  todos: [],
};

const todoListReducer = (
  state = initialValue,
  action: { type: actionsTypes; payload: any }
): initialValuesInterface => {
  switch (action.type) {
    case actionsTypes.ADD_TODO:
      console.log("Add TODO");
      return {
        ...state,
        todos: [action.payload, ...state.todos],
      };
    case actionsTypes.DELETE_TODO:
      console.log("Delete Todo ");
      return {
        ...state,
        todos: state.todos.filter((el) => el.title !== action.payload.title),
      };
    case actionsTypes.MARK_TODO:
      console.log("MARK TODO");
      return {
        ...state,
        todos: state.todos.map((el) => {
          if (el.title === action.payload.title) {
            el.complete = !el.complete;
          }
          return el;
        }),
      };
    case actionsTypes.EDIT_TODO:
      console.log("Editing Todo");
      return {
        ...state,
        todos: state.todos.map((el) => {
          if (el.title == action.payload.todo.title) {
            el.title = action.payload.change;
          }
          return el;
        }),
      };
    case actionsTypes.TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((el) => {
          if (el.title === action.payload.title) {
            el.edit = !el.edit;
          }
          return el;
        }),
      };
    default:
      return state;
  }
};
export default todoListReducer;
