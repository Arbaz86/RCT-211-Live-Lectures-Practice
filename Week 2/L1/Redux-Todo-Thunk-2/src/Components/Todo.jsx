import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodos } from "../Redux/action";
import { TodoInput } from "./TodoInput";
import { TodoList } from "./TodoList";

export const Todo = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  console.log(todos);

  useEffect(() => {
    dispatch(getTodos);
  }, []);

  return (
    <div>
      <h1>Todo</h1>
      <TodoInput />
      {todos?.map((todo) => (
        <TodoList key={todo.id} {...todo} />
      ))}
    </div>
  );
};
