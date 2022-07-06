import * as types from "./actionTypes";

const initState = {
  todos: [],
  isLoading: false,
  isError: false,
};

export const reducer = (state = initState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.GET_TODOS_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case types.GET_TODOS_SUCCESS: {
      return {
        ...state,
        todos: payload,
        isLoading: false,
        isError: false,
      };
    }
    case types.GET_TODOS_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }

    // adding todos part stated here
    case types.ADD_TODOS_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case types.ADD_TODOS_SUCCESS: {
      return {
        ...state,
        todos: [...state, payload],
        isLoading: false,
        isError: false,
      };
    }
    case types.ADD_TODOS_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }

    default:
      return state;
  }
};
