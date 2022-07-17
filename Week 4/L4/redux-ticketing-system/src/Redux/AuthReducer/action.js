import axios from "axios";
import * as types from "./actionTypes";

export const register = (payload) => (dispath) => {
  dispath({ type: types.REGISTER_REQUEST });

  return axios
    .post("https://masai-api-mocker.herokuapp.com/auth/register", payload)
    .then(({ data }) => {
      dispath({ type: types.REGISTER_SUCCESS, payload: data });

      return types.REGISTER_SUCCESS;
    })
    .catch((err) => {
      dispath({ type: types.REGISTER_FAILURE, payload: err });

      return types.REGISTER_FAILURE;
    });
};

export const login = (params) => (dispath) => {
  dispath({ type: types.LOGIN_REQUEST });

  return axios
    .post("https://masai-api-mocker.herokuapp.com/auth/login", params)
    .then(({ data }) => {
      dispath({ type: types.LOGIN_SUCCESS, payload: data.token });

      return types.LOGIN_SUCCESS;
    })
    .catch((err) => {
      dispath({ type: types.LOGIN_FAILURE, payload: err });

      return types.LOGIN_FAILURE;
    });
};
