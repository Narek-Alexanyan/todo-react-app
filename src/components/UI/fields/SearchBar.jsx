import React, { memo } from "react";

const SearchBar = memo(({ value, onChange }) => {
  return (
    <div className="flex bg-todo-light-gray rounded-md py-2 px-3 gap-2">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
          stroke="#111827"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <input
        type="text"
        placeholder="search..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-transparent placeholder:text-todo-black text-todo-black focus:outline-none"
      />
    </div>
  );
});

export default SearchBar;
