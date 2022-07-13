import React from "react";
import { ITodosItem } from "./Todos";

export const TodosItem = ({ title, status, id }: ITodosItem) => {
  return (
    <div>
      <h2>
        {id}
        {") "} {title} - {status ? "True" : "False"}
      </h2>
    </div>
  );
};
