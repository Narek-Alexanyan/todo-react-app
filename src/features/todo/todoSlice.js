import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const defaultPageLimit = 6

const initialState = {
  todoList: [],
  todoListTotalCount: 0,
  todoListCurrentPage: 1,
  status: "",
  error: null,
  todoModal: {
    isOpen: false,
    isEdit: false
  },
  editedItemData: {},
  isHideCompleted: false,
  todoFilter: {
    tagsFilter: []
  }
};

export const fetchTodoList = createAsyncThunk("todo/fetchTodoList",
  async ({ page, limit = defaultPageLimit, query = "" }, { rejectWithValue, dispatch }) => {
    try {
      const result = await axios.get(`http://localhost:8080/todoList?_page=${page}&_limit=${limit}&q=${query}`)

      dispatch(setTodoList(result.data))
      dispatch(setTodoListTotalCount(result.headers["x-total-count"]))

      return result.data
    } catch (error) {
      return rejectWithValue(error.response.data)
    }
  }
)

export const createTodo = createAsyncThunk("todo/createTodo",
  async (todoData, { rejectWithValue, dispatch, getState }) => {
    const { todo } = getState();

    try {
      const result = await axios.post("http://localhost:8080/todoList", todoData)

      dispatch(fetchTodoList({ page: todo.todoListCurrentPage, limit: defaultPageLimit }))

      return result.data
    } catch (error) {
      return rejectWithValue(error.response.data)
    }
  }
)

export const editTodoItem = createAsyncThunk("todo/editTodoItem",
  async ({ id, updatedItem }, { rejectWithValue, dispatch, getState }) => {
    const { todo } = getState();

    try {
      const result = await axios.patch(`http://localhost:8080/todoList/${id}`, updatedItem)

      dispatch(fetchTodoList({ page: todo.todoListCurrentPage, limit: defaultPageLimit }))

      return result.data
    } catch (error) {
      return rejectWithValue(error.response.data)
    }
  }
)

export const deleteTodoItem = createAsyncThunk("todo/deleteTodoItem",
  async (id, { rejectWithValue, dispatch, getState }) => {
    const { todo } = getState();

    try {
      const result = await axios.delete(`http://localhost:8080/todoList/${id}`)

      dispatch(fetchTodoList({ page: todo.todoListCurrentPage, limit: defaultPageLimit }))

      return result.data
    } catch (error) {
      return rejectWithValue(error.response.data)
    }
  }
)

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    setTodoList: (state, action) => {
      state.todoList = action.payload
    },
    setTodoListTotalCount: (state, action) => {
      state.todoListTotalCount = action.payload
    },
    setTodoListCurrentPage: (state, action) => {
      state.todoListCurrentPage = action.payload
    },
    setTodoModal: (state, action) => {
      state.todoModal = action.payload
    },
    setEditedItemData: (state, action) => {
      state.editedItemData = action.payload
    },
    setIsHideCompleted: (state, action) => {
      state.isHideCompleted = action.payload
    },
    setFilterDependencies: (state, action) => {
      state.todoFilter = { ...state.todoFilter, tagsFilter: action.payload }
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTodoList.pending, (state) => {
      state.error = null
      state.status = "pending"
    })
    builder.addCase(fetchTodoList.fulfilled, (state) => {
      state.status = "resolve"
    })
    builder.addCase(fetchTodoList.rejected, (state, action) => {
      state.status = "rejected"
      state.error = action.payload
    })
  }
})

export const { setTodoList,
  setTodoModal,
  setEditedItemData,
  setIsHideCompleted,
  setFilterDependencies,
  setTodoListTotalCount,
  setTodoListCurrentPage
} = todoSlice.actions;

export default todoSlice.reducer;