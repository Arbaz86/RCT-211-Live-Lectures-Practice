import React, { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import {
  addTodoFailure,
  addTodoRequest,
  addTodoSuccess,
  getTodoFailure,
  getTodoRequest,
  getTodoSuccess,
} from "../Redux/action";
import axios from "axios";
import { TodoInput } from "./TodoInput";

export const Todos = () => {
  const { todos, isLoading, isError } = useSelector((state) => {
    return {
      todos: state.todos,
      isLoading: state.isLoading,
      isError: state.isError,
    };
  }, shallowEqual);
  //another method of getting data
  // const isLoading = useSelector((state) => state.isLoading);
  // const isError = useSelector((state) => state.isError);
  const dispatch = useDispatch();
  console.log(todos);

  const handleTodoAdd = (payload) => {
    addTodos(payload);
    getTodos();
  };

  const addTodos = (payload) => {
    const requestAction = addTodoRequest();
    dispatch(requestAction);

    return axios
      .post("http://localhost:8080/todos", payload)
      .then(({ data }) => {
        const successAction = addTodoSuccess(data);
        dispatch(successAction);
        console.log(data);
      })
      .catch((err) => {
        const errorAction = addTodoFailure(err);
        dispatch(errorAction);
      });
  };

  const getTodos = () => {
    const requestAction = getTodoRequest();
    dispatch(requestAction);

    return axios
      .get("http://localhost:8080/todos")
      .then(({ data }) => {
        const successAction = getTodoSuccess(data);
        dispatch(successAction);
        console.log(data);
      })
      .catch((err) => {
        const errorAction = getTodoFailure(err);
        dispatch(errorAction);
      });
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div>
      <h1>Todos</h1>
      <TodoInput onClick={handleTodoAdd} />
      {todos.map((todo) => (
        <div key={todo.id}>{todo.text}</div>
      ))}
    </div>
  );
};
