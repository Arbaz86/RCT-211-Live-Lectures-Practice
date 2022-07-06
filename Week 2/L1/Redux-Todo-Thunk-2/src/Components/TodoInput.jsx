import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  addTodosFailure,
  addTodosRequest,
  addTodosSuccess,
  getTodos,
} from "../Redux/action";

export const TodoInput = () => {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  const addTodo = (payload) => {
    dispatch(addTodosRequest());
    axios
      .post("/todos", payload)
      .then(({ data }) => {
        dispatch(addTodosSuccess(data));
      })
      .catch(() => {
        dispatch(addTodosFailure());
      })
      .finally(() => {
        dispatch(getTodos);
      });
  };

  const handleTodoAdd = () => {
    const payload = {
      title,
      state: false,
    };
    addTodo(payload);
    setTitle("");
  };

  return (
    <div>
      <input
        type="text"
        value={title}
        placeholder="add Todo..."
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={handleTodoAdd}>Add</button>
    </div>
  );
};
