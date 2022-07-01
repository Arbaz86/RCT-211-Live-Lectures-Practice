import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  getTodoListsFailure,
  getTodoListsRequest,
  getTodoListsSuccess,
} from "../Redux/action";
import { AddTodo } from "./AddTodo";
import { TodoList } from "./TodoList";

export const Todos = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const getTodos = () => {
    dispatch(getTodoListsRequest());

    axios
      .get("http://localhost:8080/todos")
      .then(({ data }) => {
        dispatch(getTodoListsSuccess(data));
      })
      .catch((err) => {
        dispatch(getTodoListsFailure(err));
      });
  };

  useEffect(() => {
    if (todos?.length === 0) {
      getTodos();
    }
  }, []);

  return (
    <div>
      <AddTodo />
      <TodoList todoList={todos} />
    </div>
  );
};
