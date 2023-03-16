import React, { useCallback, useEffect, useState } from "react";
import ModalWrapper from "../UI/modal/ModalWrapper";
import BaseButton from "../UI/buttons/BaseButton";
import BaseInput from "../UI/fields/BaseInput";
import BaseTextarea from "../UI/fields/BaseTextarea";
import TagList from "../tags/TagList";
import { tags } from "../../constants/tags";
import { useDispatch, useSelector } from "react-redux";
import {
  createTodo,
  setTodoModal,
  setEditedItemData,
  editTodoItem,
} from "../../features/todo/todoSlice";

const AddTodo = () => {
  const dispatch = useDispatch();
  const isModalOpen = useSelector((state) => state.todo.todoModal.isOpen);
  const isEdit = useSelector((state) => state.todo.todoModal.isEdit);
  const editedData = useSelector((state) => state.todo.editedItemData);

  const [todoForm, setTodoForm] = useState({
    title: "",
    description: "",
    tags: [],
  });

  useEffect(() => {
    if (isEdit && Object.keys(editedData).length) {
      setTodoForm({
        title: editedData?.title,
        description: editedData?.description,
        tags: editedData?.tags,
      });
    }
    return () => {
      setTodoForm((prev) => ({
        ...prev,
        title: "",
        description: "",
      }));
    };
  }, [isModalOpen]);

  const handleSelectedList = useCallback((selectedList) => {
    setTodoForm((prev) => ({ ...prev, tags: selectedList }));
  }, []);

  const addTodo = () => {
    if (todoForm.title) {
      dispatch(createTodo(todoForm));
      closeModal();
      setTodoForm({
        title: "",
        description: "",
        tags: [],
      });
    }
  };

  const editTodo = () => {
    dispatch(
      editTodoItem({
        id: editedData.id,
        updatedItem: {
          ...todoForm,
        },
      })
    );
    closeModal();
  };

  const closeModal = () => {
    dispatch(
      setTodoModal({
        isOpen: false,
        isEdit,
      })
    );
    dispatch(setEditedItemData({}));
  };

  return (
    <ModalWrapper isOpen={isModalOpen} closeModal={closeModal}>
      <div className="w-[567px] max-w-full bg-todo-white p-5 rounded-lg sm:h-full">
        <div className="flex items-center justify-between">
          <button className="text-base text-todo-gray" onClick={closeModal}>
            cancel
          </button>
          <BaseButton onClick={isEdit ? editTodo : addTodo}>
            {isEdit ? "Edit" : "Add"}
          </BaseButton>
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
        <div className="mt-5 sm:w-44">
          <p className="text-xl text-todo-black block font-medium mb-2">Tags</p>
          <TagList
            list={tags}
            tags={editedData.tags}
            isModal={true}
            className="sm:flex-col gap-6"
            handleList={handleSelectedList}
          />
        </div>
      </div>
    </ModalWrapper>
  );
};

export default AddTodo;
