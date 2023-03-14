import React, { useState } from "react";
import TagList from "../tags/TagList";
import { tags } from "../../constants/tags";
import TodoCheckbox from "../UI/checkbox/TodoCheckbox";
import illustration from "../../assets/images/illustrations/illustration-1.png";

const Sidebar = () => {
  const [hideCompleted, setHideCompleted] = useState(false);

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
          isChecked={hideCompleted}
          onChange={() => setHideCompleted((prev) => !prev)}
        />
      </div>
      <div className="mt-20">
        <img src={illustration} className="w-32 h-32" alt="illustration" />
      </div>
    </div>
  );
};

export default Sidebar;
