import React, { useEffect, useState } from "react";
import TodoItem from "./TodoItem";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodoList } from "../../features/todo/todoSlice";
import { useTodoFilter } from "../../hooks/useTodoFilter";
import Pagination from "../UI/pagination/Pagination";
import LoadingSpinner from "../UI/spinners/LoadingSpinner.svg";

let PageSize = 6;

const TodoList = () => {
  const dispatch = useDispatch();
  const todoList = useSelector((state) => state.todo.todoList);
  const isHideCompleted = useSelector((state) => state.todo.isHideCompleted);
  const todoFilter = useSelector((state) => state.todo.todoFilter);
  const todoListTotalCount = useSelector(
    (state) => state.todo.todoListTotalCount
  );
  const pending = useSelector((state) => state.todo.status === "pending");

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(fetchTodoList({ page: currentPage, limit: PageSize }));
  }, [currentPage]);

  const FilteredList = useTodoFilter(todoList, [
    isHideCompleted,
    todoFilter.tagsFilter,
  ]);

  if (pending) {
    return (
      <div className="w-full">
        <img src={LoadingSpinner} alt="loading" className="mx-auto" />
      </div>
    );
  }

  return (
    <div>
      <div className="h-full w-full flex flex-wrap gap-4 sm:justify-center">
        {FilteredList?.map((item) => (
          <TodoItem key={item.id} todoData={item} />
        ))}
      </div>
      <Pagination
        className=""
        currentPage={currentPage}
        totalCount={todoListTotalCount}
        pageSize={PageSize}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
};

export default TodoList;
