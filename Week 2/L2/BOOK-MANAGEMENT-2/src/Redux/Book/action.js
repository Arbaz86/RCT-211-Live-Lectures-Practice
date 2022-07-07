import * as types from "./actionTypes";
import axios from "axios";
export const getBooks = (params) => (dispatch) => {
  dispatch({ type: types.GET_BOOKS_REQUEST });

  axios
    .get("/books", params)
    .then(({ data }) => {
      dispatch({ type: types.GET_BOOKS_SUCCESS, payload: data });
    })
    .catch(() => {
      dispatch({ type: types.GET_BOOKS_FAILURE });
    });
};
