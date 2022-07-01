import * as types from "./actionTypes";

export const addTodo = (payload) => {
  return {
    type: types.ADD_TODO,
    payload,
  };
};
