import * as types from "./actionTypes";

const initState = {
  books: [],
  isLoading: false,
  isError: false,
};

export const reducer = (state = initState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.GET_BOOKS_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case types.GET_BOOKS_SUCCESS: {
      return {
        ...state,
        books: payload,
        isLoading: false,
        isError: false,
      };
    }
    case types.GET_BOOKS_REQUEST: {
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
