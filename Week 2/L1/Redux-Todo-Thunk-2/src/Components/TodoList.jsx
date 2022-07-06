import React from "react";
import { useSelector } from "react-redux";
import styles from "./TodoList.module.css";

export const TodoList = ({ id, title, status }) => {
  const { isLoading, isError } = useSelector((state) => state);

  return isLoading ? (
    <div>
      <br />
      <div className={styles.loader}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  ) : isError ? (
    <div>Something went wrong</div>
  ) : (
    <div>
      <h4>
        {id}
        {")"} {title} -- {status ? "True" : "False"}
      </h4>
    </div>
  );
};
