import React, { memo } from "react";

const BaseButton = memo(({ children, onClick, className }) => {
  return (
    <button
      className={[
        "bg-todo-black rounded-md text-todo-white transition-colors hover:bg-todo-gray py-2 px-4",
        className,
      ].join(" ")}
      onClick={onClick}
    >
      {children}
    </button>
  );
});

export default BaseButton;
