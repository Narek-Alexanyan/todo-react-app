import React, { memo } from "react";

const BaseInput = memo(({ label, value, onChange, ...props }) => {
  return (
    <label className="w-full">
      <span className="text-xl text-todo-black block font-medium mb-2">{label}</span>
      <input
        {...props}
        value={value}
        className="w-full bg-todo-light-gray rounded-md py-2 px-3 placeholder:text-todo-black text-todo-black focus:outline-none"
        onChange={(e) => onChange(e.target.value)}
      />
    </label>
  );
});

export default BaseInput;
