import React, { useEffect } from "react";
import TodoItem from "./TodoItem";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodoList } from "../../features/todo/todoSlice";

const TodoList = () => {
  const dispatch = useDispatch();
  const todoList = useSelector((state) => state.todo.todoList);

  useEffect(() => {
    dispatch(fetchTodoList());
  }, []);

  return (
    <div className="h-full flex flex-wrap gap-4">
      {todoList?.map((item) => (
        <TodoItem key={item.id} todoData={item} />
      ))}
    </div>
  );
};

export default TodoList;
