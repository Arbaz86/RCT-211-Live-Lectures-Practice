import React, { useState } from "react";
import { v4 as uuid } from "uuid";

export const TodoInput = ({ onClick }) => {
  const [text, setText] = useState("");

  const handleAdd = () => {
    const payload = {
      id: uuid(),
      text,
      status: false,
    };
    onClick(payload);
    setText("");
  };

  return (
    <div>
      <h1>Add Todo</h1>
      <input
        type="text"
        value={text}
        placeholder="add todo..."
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};
