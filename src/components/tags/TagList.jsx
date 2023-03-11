import React from "react";
import TagCircle from "./TagCircle";
import { getTagColor } from "../../helpers/getTagColor";

const TagList = ({ list }) => {
  return (
    <div className="flex flex-col gap-8">
      {list.map((tag) => (
        <div key={tag.id} className="flex items-center gap-2 cursor-pointer">
          <TagCircle color={getTagColor(tag.value)} />
          <p className="text-base text-todo-black">{tag.value}</p>
        </div>
      ))}
    </div>
  );
};

export default TagList;
