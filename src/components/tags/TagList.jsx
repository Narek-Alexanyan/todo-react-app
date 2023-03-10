import React from "react";

const TagList = ({ list }) => {
  return (
    <div className="flex flex-col gap-8">
      {list.map((tag) => (
        <div className="flex items-center gap-2 cursor-pointer">
          <span
            style={{ backgroundColor: tag.color }}
            className="w-7 h-7 rounded-full"
          ></span>
          <p className="text-base text-todo-black">{tag.name}</p>
        </div>
      ))}
    </div>
  );
};

export default TagList;
