import React from "react";
import Logo from "../../components/Logo";
import IconButton from "../../components/UI/buttons/IconButton";
import Sidebar from "../../components/sidebar/Sidebar";
import TodoList from "../../components/todo/TodoList";

const TodoPage = () => {
  return (
    <div className="todo-container py-8">
      <div className="flex justify-between items-center max-w-full">
        <Logo />
        <IconButton className="">
          <svg
            width="28"
            height="28"
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5 0C5.55228 0 6 0.447715 6 1V4L9 4C9.55228 4 10 4.44772 10 5C10 5.55228 9.55228 6 9 6H6V9C6 9.55229 5.55228 10 5 10C4.44771 10 4 9.55229 4 9V6H1C0.447715 6 0 5.55228 0 5C5.96046e-08 4.44771 0.447715 4 1 4L4 4V1C4 0.447715 4.44771 0 5 0Z"
              className="fill-todo-black"
            />
          </svg>
        </IconButton>
      </div>
      <div className="mt-10 flex gap-4">
        <Sidebar />
        <TodoList />
      </div>
    </div>
  );
};

export default TodoPage;
