import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  addTodosFailure,
  addTodosRequest,
  addTodosSuccess,
  getTodos,
} from "../Redux/action";

export const TodosInput = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleAdd = () => {
    const payload = {
      title: text,
      status: false,
    };
    setText("");
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

  return (
    <div>
      <input
        value={text}
        onChange={handleChange}
        type="text"
        placeholder="add a todo.."
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};
