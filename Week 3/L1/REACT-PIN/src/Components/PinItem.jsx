import React, { forwardRef } from "react";

export const PinItem = forwardRef(({ onChange }, ref) => {
  return <input ref={ref} onChange={onChange} maxLength={1} />;
});
