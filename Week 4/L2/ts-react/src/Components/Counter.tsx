import React, { useState } from "react";
import { Button } from "./Button";
import { Header } from "./Header";

export const Counter = () => {
  const [count, setCount] = useState(0);

  const handleClick = (value: number) => {
    setCount(count + value);
  };

  return (
    <div>
      <Header label="Counter">
        <div>Child Counter Header</div>
        <div>Child Counter Header</div>
        <div>Child Counter Header</div>
      </Header>
      <Header label={count} />

      <Button
        label="Increment"
        handleClick={() => {
          handleClick(1);
        }}
      />
      <Button label="Decrement" handleClick={() => handleClick(-1)} />
    </div>
  );
};
