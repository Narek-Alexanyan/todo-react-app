import React, { memo } from "react";
import TagList from "../tags/TagList";
import { tags } from "../../constants/tags";
import TodoCheckbox from "../UI/checkbox/TodoCheckbox";
import illustration from "../../assets/images/illustrations/illustration-1.png";
import { useDispatch, useSelector } from "react-redux";
import {
  setFilterDependencies,
  setIsHideCompleted,
} from "../../features/todo/todoSlice";

const Sidebar = memo(() => {
  const dispatch = useDispatch();

  const isHideCompleted = useSelector((state) => state.todo.isHideCompleted);

  const handleSelectedList = (selectedList) => {
    dispatch(setFilterDependencies(selectedList));
  };

  return (
    <div>
      <TagList
        list={tags}
        className="flex-col gap-8 sm:flex-row sm:gap-0 sm:justify-between sm:overflow-auto pretty-scrollbar"
        handleList={handleSelectedList}
      />
      <div className="mt-10 sm:mt-4">
        <TodoCheckbox
          label="Hide Done Tasks"
          isChecked={isHideCompleted}
          onChange={() => dispatch(setIsHideCompleted(!isHideCompleted))}
        />
      </div>
      <div className="mt-20 sm:hidden">
        <img src={illustration} className="w-32 h-32" alt="illustration" />
      </div>
    </div>
  );
});

export default Sidebar;
