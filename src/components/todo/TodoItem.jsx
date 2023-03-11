import React from "react";
import IconButton from "../UI/buttons/IconButton";
import DotsHorizontalIcon from "../UI/icons/DotsHorizontalIcon";
import TagCircle from "../tags/TagCircle";
import TodoCheckbox from "../UI/checkbox/TodoCheckbox";
import { getTagColor } from "../../helpers/getTagColor";

const TodoItem = ({ todoData }) => {
  return (
    <div className="bg-todo-yellow rounded p-3 w-[400px] h-fit flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <h5 className="text-xl text-todo-black font-medium">
          {todoData.title}
        </h5>
        <IconButton>
          <DotsHorizontalIcon />
        </IconButton>
      </div>
      <div className="text-base text-todo-gray">{todoData.body}</div>
      <div className="flex justify-between items-center">
        <div className="flex gap-2">
          {todoData.tags.map((tag, index) => (
            <TagCircle key={index} color={getTagColor(tag.value)} />
          ))}
        </div>
        <TodoCheckbox label="Done" checked={todoData.completed} />
      </div>
    </div>
  );
};

export default TodoItem;
