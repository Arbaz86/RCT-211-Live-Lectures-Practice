import axios from "axios";
import * as types from "./actionTypes";

export const getTodosRequest = () => {
  return {
    type: types.GET_TODOS_REQUEST,
  };
};

export const getTodosSuccess = (payload) => {
  return {
    type: types.GET_TODOS_SUCCESS,
    payload,
  };
};
export const getTodosFailure = () => {
  return {
    type: types.GET_TODOS_FAILURE,
  };
};

// getting actions
export const getTodos = (dispatch) => {
  dispatch(getTodosRequest());

  axios
    .get("/todos")
    .then(({ data }) => {
      dispatch(getTodosSuccess(data));
    })
    .catch((err) => {
      dispatch(getTodosFailure());
      console.log(err);
    });
};

// adding todos part stated here
export const addTodosRequest = () => {
  return {
    type: types.ADD_TODOS_REQUEST,
  };
};

export const addTodosSuccess = (payload) => {
  return {
    type: types.ADD_TODOS_SUCCESS,
    payload,
  };
};
export const addTodosFailure = () => {
  return {
    type: types.ADD_TODOS_FAILURE,
  };
};
