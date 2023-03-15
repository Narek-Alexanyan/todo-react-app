import { useMemo } from "react";

export const useTodoFilter = (list, [isHideCompleted, tagsFilter]) => {

  const filteredTodoList = useMemo(() => {

    const filteredList = list.filter(todo => {
      return tagsFilter.every(tagToFilter => {
        return todo.tags.some(tag => tag.id === tagToFilter.id && tag.value === tagToFilter.value)
      })
    })

    if (isHideCompleted) {
      return filteredList.filter((todo) => !todo.completed);
    }

    return filteredList;
  }, [list, isHideCompleted, tagsFilter]);

  return filteredTodoList
}