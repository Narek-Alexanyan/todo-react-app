import React, { memo } from "react";

const BaseTextarea = memo(({ label, value, onChange, ...props }) => {
  return (
    <label className="w-full">
      <span className="text-xl text-todo-black block font-medium mb-2">
        {label}
      </span>
      <textarea
        {...props}
        value={value}
        className="w-full bg-todo-light-gray rounded-md py-2 px-3 placeholder:text-todo-black text-todo-black focus:outline-none resize-none"
        onChange={(e) => onChange(e.target.value)}
      />
    </label>
  );
});

export default BaseTextarea;
