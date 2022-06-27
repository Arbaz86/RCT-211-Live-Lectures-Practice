import * as types from "./actionTypes";

// THIS PART IS GETTING THE TODO DATA
export const getTodoRequest = () => {
  return {
    type: types.GET_TODO_REQUEST,
  };
};

export const getTodoSuccess = (payload) => {
  return {
    type: types.GET_TODO_SUCCESS,
    payload,
  };
};

export const getTodoFailure = (error) => {
  return {
    type: types.GET_TODO_FAILURE,
    payload: error,
  };
};

// THIS PART IS ADDING THE TODO

export const addTodoRequest = () => {
  return {
    type: types.ADD_TODO_REQUEST,
  };
};

export const addTodoSuccess = (payload) => {
  return {
    type: types.ADD_TODO_SUCCESS,
    payload,
  };
};

export const addTodoFailure = (error) => {
  return {
    type: types.ADD_TODO_FAILURE,
    payload: error,
  };
};
