import React, { useRef, useState } from "react";
import IconButton from "../UI/buttons/IconButton";
import DotsHorizontalIcon from "../UI/icons/DotsHorizontalIcon";
import TagCircle from "../tags/TagCircle";
import TodoCheckbox from "../UI/checkbox/TodoCheckbox";
import { getTagColor } from "../../helpers/getTagColor";
import Dropdown from "../UI/modal/Dropdown";
import { useDispatch } from "react-redux";
import {
  deleteTodoItem,
  editTodoItem,
  setEditedItemData,
  setTodoModal,
} from "../../features/todo/todoSlice";
import { useOnClickOutside } from "../../hooks/useOnClickOutside";

const dropDownList = [
  {
    id: 1,
    title: "Edit",
    value: "edit",
  },
  {
    id: 2,
    title: "Delete",
    value: "delete",
  },
];

const TodoItem = ({ todoData }) => {
  const dispatch = useDispatch();

  const dropDownRef = useRef(null);

  const [isDropDownOpen, setIsDropDownOpen] = useState(false);

  useOnClickOutside(dropDownRef, () => setIsDropDownOpen(false));

  const handleDropDownAction = (action) => {
    switch (action) {
      case "edit":
        dispatch(setEditedItemData(todoData));
        dispatch(
          setTodoModal({
            isOpen: true,
            isEdit: true,
          })
        );
        break;
      case "delete":
        dispatch(deleteTodoItem(todoData.id));
        break;
      default:
        break;
    }
  };

  const handleCompleted = () => {
    dispatch(
      editTodoItem({
        id: todoData.id,
        updatedItem: {
          completed: !todoData.completed,
        },
      })
    );
  };

  return (
    <div className="bg-todo-yellow rounded p-3 w-[320px] h-fit flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <h5 className="text-xl text-todo-black font-medium">
          {todoData.title}
        </h5>
        <div ref={dropDownRef} className="relative">
          <IconButton onClick={() => setIsDropDownOpen((prev) => !prev)}>
            <DotsHorizontalIcon />
          </IconButton>
          <Dropdown
            list={dropDownList}
            isOpen={isDropDownOpen}
            handleClick={handleDropDownAction}
            setIsOpen={setIsDropDownOpen}
          />
        </div>
      </div>
      <div className="text-base text-todo-gray">{todoData.description}</div>
      <div className="flex justify-between items-center">
        <div className="flex gap-2">
          {todoData.tags.map((tag, index) => (
            <TagCircle key={index} color={getTagColor(tag.value)} />
          ))}
        </div>
        <TodoCheckbox
          label="Done"
          isChecked={todoData.completed}
          onChange={handleCompleted}
        />
      </div>
    </div>
  );
};

export default TodoItem;
