import React, { useState } from "react";
import TagList from "../tags/TagList";
import { tags } from "../../constants/tags";
import TodoCheckbox from "../UI/checkbox/TodoCheckbox";
import illustration from "../../assets/images/illustrations/illustration-1.png";
import { useDispatch, useSelector } from "react-redux";
import { setIsHideCompleted } from "../../features/todo/todoSlice";

const Sidebar = () => {
  const dispatch = useDispatch();

  const isHideCompleted = useSelector((state) => state.todo.isHideCompleted);

  const handleSelectedList = (selectedList) => {
    console.log(selectedList);
  };

  return (
    <div>
      <TagList
        list={tags}
        className="flex-col gap-8"
        handleList={handleSelectedList}
      />
      <div className="mt-10">
        <TodoCheckbox
          label="Hide Done Tasks"
          isChecked={isHideCompleted}
          onChange={() => dispatch(setIsHideCompleted(!isHideCompleted))}
        />
      </div>
      <div className="mt-20">
        <img src={illustration} className="w-32 h-32" alt="illustration" />
      </div>
    </div>
  );
};

export default Sidebar;
