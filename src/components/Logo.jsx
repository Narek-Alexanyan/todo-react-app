import React, { memo } from "react";

const Logo = memo(() => {
  return (
    <h1 className="text-5xl">
      <span className="text-todo-blue">t</span>
      <span className="text-todo-pink">o</span>
      <span className="text-todo-green">d</span>
      <span className="text-todo-purple">o</span>
    </h1>
  );
});

export default Logo;
