import * as types from "./actionTypes";

const initState = {
  isAuth: false,
  token: "",
  isLoading: false,
  isError: false,
};

export const reducer = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.USER_LOGIN_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case types.USER_LOGIN_SUCCESS: {
      return {
        ...state,
        isAuth: true,
        token: payload,
        isLoading: false,
        isError: false,
      };
    }
    case types.USER_LOGIN_FAILURE: {
      return {
        ...state,
        isError: true,
        isLoading: false,
        isAuth: false,
        token: "",
      };
    }

    default:
      return state;
  }
};
