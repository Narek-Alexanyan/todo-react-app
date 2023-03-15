import React, { useEffect, useMemo } from "react";
import TodoItem from "./TodoItem";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodoList } from "../../features/todo/todoSlice";
import { useTodoFilter } from "../../hooks/useTodoFilter";

const TodoList = () => {
  const dispatch = useDispatch();
  const todoList = useSelector((state) => state.todo.todoList);
  const isHideCompleted = useSelector((state) => state.todo.isHideCompleted);
  const todoFilter = useSelector((state) => state.todo.todoFilter);

  useEffect(() => {
    dispatch(fetchTodoList());
  }, []);

  const FilteredList = useTodoFilter(todoList, [isHideCompleted, todoFilter.tagsFilter])

  return (
    <div className="h-full flex flex-wrap gap-4 sm:justify-center">
      {FilteredList?.map((item) => (
        <TodoItem key={item.id} todoData={item} />
      ))}
    </div>
  );
};

export default TodoList;
