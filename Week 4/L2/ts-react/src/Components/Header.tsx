import React from "react";

interface HeaderProps {
  label: number | string;
  children?: JSX.Element | JSX.Element[];
}

export const Header = ({ label, children }: HeaderProps) => {
  return (
    <div>
      <h1>{label}</h1>
      {children}
    </div>
  );
};
