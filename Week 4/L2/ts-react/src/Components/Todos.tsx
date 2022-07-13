import axios, { AxiosResponse } from "axios";
import React, { useEffect, useState } from "react";
import { Header } from "./Header";
import { TodosInput } from "./TodosInput";
import { TodosItem } from "./TodosItem";

export interface ITodosItem {
  title: string;
  status: boolean;
  id: number;
}

export const Todos = () => {
  const [todos, setTodos] = useState<ITodosItem[]>([]);

  const handleAdd = (title: string) => {
    const payload = {
      title,
      status: false,
      id: todos.length + 1,
    };

    return axios.post("http://localhost:8080/todos", payload).then(getTodos);

    // setTodos([...todos, payload]);
  };

  const getTodos = () => {
    axios
      .get("http://localhost:8080/todos")
      .then((response: AxiosResponse<ITodosItem[]>) => {
        const { data } = response;
        setTodos(data);
      });
  };

  useEffect(() => {
    getTodos();
  }, []);

  console.log(todos);

  return (
    <div>
      <Header label="Todos" />
      <TodosInput onClick={handleAdd} />
      {todos.length > 0 &&
        todos.map((todo) => <TodosItem key={todo.id} {...todo} />)}
    </div>
  );
};
