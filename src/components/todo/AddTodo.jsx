import React, { useCallback, useState } from "react";
import ModalWrapper from "../UI/modal/ModalWrapper";
import BaseButton from "../UI/buttons/BaseButton";
import BaseInput from "../UI/fields/BaseInput";
import BaseTextarea from "../UI/fields/BaseTextarea";
import TagList from "../tags/TagList";
import { tags } from "../../constants/tags";
import { useDispatch } from "react-redux";
import { createTodo } from "../../features/todo/todoSlice";

const AddTodo = ({ isModalOpen, setIsModalOpen }) => {
  const dispatch = useDispatch();
  const [todoForm, setTodoForm] = useState({
    title: "",
    description: "",
    tags: [],
  });

  const handleSelectedList = useCallback((selectedList) => {
    setTodoForm((prev) => ({ ...prev, tags: selectedList }));
  }, []);

  const addTodo = () => {
    dispatch(createTodo(todoForm));
    setIsModalOpen(false);
    setTodoForm({
      title: "",
      description: "",
      tags: [],
    });
  };

  return (
    <ModalWrapper isOpen={isModalOpen} setIsOpen={setIsModalOpen}>
      <div className="w-[567px] max-w-full bg-todo-white p-5 rounded-lg">
        <div className="flex items-center justify-between">
          <button
            className="text-base text-todo-gray"
            onClick={() => setIsModalOpen(false)}
          >
            cancel
          </button>
          <BaseButton onClick={addTodo}>Add</BaseButton>
        </div>
        <div className="mt-5 flex flex-col gap-3">
          <BaseInput
            label="Title"
            type="text"
            placeholder="add a title ..."
            value={todoForm.title}
            onChange={(value) =>
              setTodoForm((prev) => ({ ...prev, title: value }))
            }
          />
          <BaseTextarea
            label="Description"
            placeholder="add a description ..."
            rows="4"
            value={todoForm.description}
            onChange={(value) =>
              setTodoForm((prev) => ({ ...prev, description: value }))
            }
          />
        </div>
        <div className="mt-5">
          <p className="text-xl text-todo-black block font-medium mb-2">Tags</p>
          <TagList
            list={tags}
            isModal={true}
            className="gap-6"
            handleList={handleSelectedList}
          />
        </div>
      </div>
    </ModalWrapper>
  );
};

export default AddTodo;
