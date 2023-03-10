import React, { useState } from "react";

const TodoCheckbox = ({ label }) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <label className="flex gap-1">
      <input type="checkbox" onChange={() => setIsChecked((prev) => !prev)} />
      <svg
        className={`inline-block w-4 h-4 bg-todo-white border rounded-sm ${
          isChecked ? "border-todo-black" : "border-todo-gray"
        }`}
        aria-hidden="true"
        viewBox="0 0 15 11"
        fill="none"
      >
        <path
          d="M1 4.5L5 9L14 1"
          strokeWidth="2"
          stroke={isChecked ? "#69665C" : "none"}
        />
      </svg>
      <span
        className={`text-sm font-medium ${
          isChecked ? "text-todo-black" : "text-todo-gray"
        }`}
      >
        {label}
      </span>
    </label>
  );
};

export default TodoCheckbox;
