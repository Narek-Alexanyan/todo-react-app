import React, { useEffect } from "react";
import TodoItem from "./TodoItem";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchTodoList,
  setTodoListCurrentPage,
} from "../../features/todo/todoSlice";
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
  const currentPage = useSelector(state => state.todo.todoListCurrentPage)


  useEffect(() => {
    dispatch(fetchTodoList({ page: currentPage, limit: PageSize }));
  }, [currentPage]);

  const FilteredList = useTodoFilter(todoList, [
    isHideCompleted,
    todoFilter.tagsFilter,
  ]);

  const handleCurrentPage = (page) => {
    dispatch(setTodoListCurrentPage(page));
  };

  if (pending) {
    return (
      <div className="w-full">
        <img src={LoadingSpinner} alt="loading" className="mx-auto" />
      </div>
    );
  }

  if (!FilteredList.length) {
    return <h1>Todo List is empty</h1>;
  }

  return (
    <div>
      <div className="h-full w-full flex flex-wrap gap-4 sm:justify-center">
        {FilteredList?.map((item) => (
          <TodoItem key={item.id} todoData={item} />
        ))}
      </div>
      <Pagination
        className="mt-4"
        currentPage={currentPage}
        totalCount={todoListTotalCount}
        pageSize={PageSize}
        onPageChange={(page) => handleCurrentPage(page)}
      />
    </div>
  );
};

export default TodoList;
