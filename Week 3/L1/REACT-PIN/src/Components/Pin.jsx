import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import "./Pin.css";
import { PinItem } from "./PinItem";

export const Pin = ({ length, onChang }) => {
  const inputRef = useRef([]);
  const [inputBoxLen] = useState(new Array(length).fill(0));
  const [inputBoxValue, setInputBoxValue] = useState(
    new Array(length).fill("")
  );

  const handleChange = (e, index) => {
    inputBoxValue[index] = e.target.value;
    setInputBoxValue(inputBoxValue);
    if (index < length - 1) {
      inputRef.current[index + 1].focus();
    }
  };

  return (
    <div>
      {inputBoxLen.map((item, index) => {
        return (
          <PinItem
            key={index}
            ref={(element) => {
              console.log(inputRef.current);
              inputRef.current[index] = element;
            }}
            onChange={(e) => {
              handleChange(e, index);
            }}
          />
        );
      })}
    </div>
  );
};

Pin.propTypes = {
  length: PropTypes.number.isRequired,
  onChange: PropTypes.func,
};
