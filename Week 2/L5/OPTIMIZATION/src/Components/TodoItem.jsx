import React from "react";

const TodoItem = ({ id, status, title, handleToggle, handleDelete }) => {
  console.log("Todo is rendering...", id);
  return (
    <div>
      <div>
        {title} {status ? "True" : "False"}{" "}
        <button onClick={() => handleToggle(id)}>Toggle</button>{" "}
        <button onClick={() => handleDelete(id)}>Delete</button>
      </div>
    </div>
  );
};

// const areEqual = (prevProps, nextProps) => {
//   if (prevProps.id === nextProps.id && prevProps.status === nextProps.status) {
//     return true;
//   }
//   return false;
// };

// the memo equal calculate deep check and its accept 2 arguments its similar to redux shalowEqual
export default React.memo(TodoItem);
