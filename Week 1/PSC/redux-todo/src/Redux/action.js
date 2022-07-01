import * as types from "./actionTypes";

export const getTodoListsRequest = () => {
  // here is where the GETTING DATA FROM part started
  return {
    type: types.GET_TODO_LISTS_REQUEST,
  };
};

export const getTodoListsSuccess = (payload) => {
  return {
    type: types.GET_TODO_LISTS_SUCCESS,
    payload,
  };
};

export const getTodoListsFailure = () => {
  return {
    type: types.GET_TODO_LISTS_FAILURE,
  };
};

// here is where the ADDING NEW DATA IN TODO part started
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

export const addTodoFailure = () => {
  return {
    type: types.ADD_TODO_FAILURE,
  };
};

// here is where the TOGGLING the status part started
export const toggleTodoRequest = () => {
  return {
    type: types.TOGGLE_TODO_REQUEST,
  };
};

export const toggleTodoSuccess = (payload) => {
  return {
    type: types.TOGGLE_TODO_SUCCESS,
    payload,
  };
};

export const toggleTodoFailure = () => {
  return {
    type: types.TOGGLE_TODO_FAILURE,
  };
};

// here is where the REMOVING todo data part started
export const removeTodoRequest = () => {
  return {
    type: types.REMOVE_TODO_REQUEST,
  };
};

export const removeTodoSuccess = (payload) => {
  return {
    type: types.REMOVE_TODO_SUCCESS,
    payload,
  };
};

export const removeTodoFailure = () => {
  return {
    type: types.REMOVE_TODO_FAILURE,
  };
};

// here is where the UPDATING todo data part started
export const updateTodoRequest = () => {
  return {
    type: types.UPDATE_TODO_REQUEST,
  };
};

export const updateTodoSuccess = (payload) => {
  return {
    type: types.UPDATE_TODO_SUCCESS,
    payload,
  };
};

export const updateTodoFailure = () => {
  return {
    type: types.UPDATE_TODO_FAILURE,
  };
};
