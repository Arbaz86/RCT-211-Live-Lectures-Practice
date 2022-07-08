import React from "react";

export const Login = () => {
  return (
    <div>
      <form>
        <div>
          <label>Email</label>
          <input type="email" />
        </div>
        <div>
          <label>Password</label>
          <input type="password" />
        </div>
        <button>Login</button>
      </form>
    </div>
  );
};
