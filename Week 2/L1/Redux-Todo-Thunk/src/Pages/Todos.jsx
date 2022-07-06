import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TodosInput } from "../Components/TodosInput";
import { getTodos } from "../Redux/action";

export const Todos = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  console.log(todos);

  useEffect(() => {
    if (todos?.length === 0) {
      // getTodos(dispatch);
      dispatch(getTodos);
    }
  }, []);

  return (
    <div>
      <h2>Todos</h2>
      <TodosInput />
      <br />
      {todos?.map((item) => (
        <div key={item.id}>{item.title}</div>
      ))}
    </div>
  );
};
