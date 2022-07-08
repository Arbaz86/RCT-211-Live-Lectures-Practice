import * as types from "./actionTypes";
import axios from "axios";

export const login = (payload) => (dispatch) => {
  dispatch({ type: types.USER_LOGIN_REQUEST });

  return axios({
    method: "POST",
    url: "/api/login",
    baseURL: "https://reqres.in",
    data: payload,
  })
    .then(({ data }) => {
      dispatch({ type: types.USER_LOGIN_SUCCESS, payload: data });
    })
    .catch(() => {
      dispatch({ type: types.USER_LOGIN_FAILURE });
    });
};
