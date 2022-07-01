import * as types from "./actionTypes";

const initState = {
  todos: [],
  isLoading: false,
  isError: false,
};

export const reducer = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_TODO_REQUEST:
      return { ...state, isLoading: true };

    case types.GET_TODO_SUCCESS:
      return {
        ...state,
        todos: [...state.todos, ...payload],
        isLoading: false,
        isError: false,
      };

    case types.GET_TODO_FAILURE:
      return { ...state, isLoading: false, isError: payload };

    case types.ADD_TODO_REQUEST:
      return { ...state, isLoading: true, isError: false };
    case types.ADD_TODO_SUCCESS:
      return { ...state, isLoading: false };
    case types.ADD_TODO_FAILURE:
      return { ...state, isLoading: false, isError: true };
    default:
      return state;
  }
};
