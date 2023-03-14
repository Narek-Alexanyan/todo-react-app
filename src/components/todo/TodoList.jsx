import React, { useEffect, useMemo } from "react";
import TodoItem from "./TodoItem";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodoList } from "../../features/todo/todoSlice";

const TodoList = () => {
  const dispatch = useDispatch();
  const todoList = useSelector((state) => state.todo.todoList);
  const isHideCompleted = useSelector((state) => state.todo.isHideCompleted);

  useEffect(() => {
    dispatch(fetchTodoList());
  }, []);

  const notCompletedList = useMemo(() => {
    if (isHideCompleted) {
      return todoList.filter((todo) => !todo.completed);
    }
    return todoList
  }, [todoList, isHideCompleted]);

  return (
    <div className="h-full flex flex-wrap gap-4">
      {notCompletedList?.map((item) => (
        <TodoItem key={item.id} todoData={item} />
      ))}
    </div>
  );
};

export default TodoList;
