import * as types from "./actionTypes";
import axios from "./axios";

const login = (payload) => (dispatch) => {
  dispatch({ type: types.USER_LOGIN_REQUEST });

  axios
    .post("/api/login", payload)
    .then(({ data }) => {
      dispatch({ type: types.USER_LOGIN_SUCCESS, payload: data });
    })
    .catch(() => {
      dispatch({ type: types.USER_LOGIN_FAILURE });
    });
};
