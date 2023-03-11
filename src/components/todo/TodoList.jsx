import React from "react";
import TodoItem from "./TodoItem";

const todoList = [
  {
    id: 1,
    title: "The first task title",
    body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam, quaerat vero vel quisquam sed voluptatem dicta amet neque! Ab.",
    completed: false,
    tags: [
      {
        id: 1,
        value: "work",
      },
      {
        id: 2,
        value: "study",
      },
    ],
  },
  {
    id: 2,
    title: "The first task title",
    body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam, quaerat vero vel quisquam sed voluptatem dicta amet neque! Ab. quaerat vero vel quisquam sed voluptatem dicta amet neque! Ab.",
    completed: false,
    tags: [
      {
        id: 1,
        value: "work",
      },
      {
        id: 2,
        value: "study",
      },
    ],
  },
  {
    id: 3,
    title: "The first task title",
    body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam, quaerat vero vel quisquam sed voluptatem dicta amet neque! Ab.",
    completed: true,
    tags: [
      {
        id: 1,
        value: "work",
      },
      {
        id: 2,
        value: "study",
      },
    ],
  },
];

const TodoList = () => {
  return (
    <div className="flex flex-wrap gap-4">
      {todoList.map((item) => (
        <TodoItem key={item.id} todoData={item} />
      ))}
    </div>
  );
};

export default TodoList;
