import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link, useNavigate } from "react-router-dom";

import {
  removeTodoFailure,
  removeTodoRequest,
  removeTodoSuccess,
  toggleTodoFailure,
  toggleTodoRequest,
  toggleTodoSuccess,
} from "../Redux/action";

export const SingleTodo = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const { id } = useParams();
  const [currentTodo, setCurrentTodo] = useState({});
  const navigate = useNavigate();

  const toggleStatus = (id, newStatus) => {
    dispatch(toggleTodoRequest());
    axios
      .patch(`http://localhost:8080/todos/${id}`, { status: newStatus })
      .then(({ data }) => {
        dispatch(toggleTodoSuccess(data));
      })
      .catch(() => {
        dispatch(toggleTodoFailure());
      });
  };

  const removeTodo = (id) => {
    dispatch(removeTodoRequest());
    axios
      .delete(`http://localhost:8080/todos/${id}`)
      .then(({ data }) => {
        dispatch(removeTodoSuccess(data));
        return navigate("/");
      })
      .catch((err) => {
        dispatch(removeTodoFailure());
      });
  };

  useEffect(() => {
    let currTodo = todos.find((todo) => todo.id == id);
    currTodo && setCurrentTodo(currTodo);
  }, [todos, id]);

  return (
    <div>
      <h2>
        {currentTodo.title} {currentTodo.status ? "True" : "False"}
      </h2>
      <button onClick={() => toggleStatus(currentTodo.id, !currentTodo.status)}>
        Toggle
      </button>
      <button onClick={() => removeTodo(currentTodo.id)}>Remove</button>
      <Link to={`/todo/${currentTodo.id}/edit`}>
        <button>Edit</button>
      </Link>
    </div>
  );
};
