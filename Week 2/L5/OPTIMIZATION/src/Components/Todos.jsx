import React, { useCallback, useState } from "react";
import TodoItem from "./TodoItem";
import { v4 as uuid } from "uuid";

const initState = [
  { id: 1, status: false, title: "Task1" },
  { id: 2, status: false, title: "Task2" },
  { id: 3, status: false, title: "Task3" },
];

export const Todos = () => {
  const [todos, setTodos] = useState(initState);
  const [currentTodo, setCurrentTodo] = useState("");

  const todoHandler = (e) => {
    setCurrentTodo(e.target.value);
  };

  // TODO adding function
  const handleAddTask = () => {
    const payload = {
      id: uuid(),
      title: currentTodo,
      status: false,
    };

    setTodos([...todos, payload]);
    setCurrentTodo("");
  };

  //todo status toggle function
  const handleToggle = useCallback((id) => {
    setTodos((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, status: !item.status } : item
      )
    );
  }, []);

  //todo deletion function
  const handleDelete = useCallback((id) => {
    setTodos((prev) => prev.filter((item) => item.id !== id));
  }, []);

  return (
    <div>
      <h2>Todos</h2>
      <input type="text" value={currentTodo} onChange={todoHandler} />
      <button onClick={handleAddTask}>Add</button>

      {todos.length > 0 &&
        todos.map((todo) => (
          <TodoItem
            {...todo}
            key={todo.id}
            handleDelete={handleDelete}
            handleToggle={handleToggle}
          />
        ))}
    </div>
  );
};
