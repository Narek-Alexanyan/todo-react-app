import React from "react";
import TagList from "../tags/TagList";
import { tags } from "../../constans/tags";
import TodoCheckbox from "../UI/checkbox/TodoCheckbox";
import illustration from "../../assets/images/illustrations/illustration-1.png";

const Sidebar = () => {
  return (
    <div>
      <TagList list={tags} />
      <div className="mt-10">
        <TodoCheckbox label="Hide Done Tasks" />
      </div>
      <div className="mt-20">
        <img src={illustration} className="w-32 h-32" alt="illustration" />
      </div>
    </div>
  );
};

export default Sidebar;
