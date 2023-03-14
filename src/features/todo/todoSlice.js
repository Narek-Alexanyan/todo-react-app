import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  todoList: [],
  status: "",
  error: null,
  todoModal: {
    isOpen: false,
    isEdit: false
  },
  editedItemData: {}
};

export const fetchTodoList = createAsyncThunk("todo/fetchTodoList",
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const result = await axios.get("http://localhost:8080/todoList")

      dispatch(setTodoList(result.data))

      return result.data
    } catch (error) {
      return rejectWithValue(error.response.data)
    }
  }
)

export const createTodo = createAsyncThunk("todo/createTodo",
  async (todoData, { rejectWithValue, dispatch }) => {
    try {
      const result = await axios.post("http://localhost:8080/todoList", todoData)

      dispatch(fetchTodoList())

      return result.data
    } catch (error) {
      return rejectWithValue(error.response.data)
    }
  }
)

export const editTodoItem = createAsyncThunk("todo/editTodoItem",
  async ({ id, updatedItem }, { rejectWithValue, dispatch }) => {
    try {
      const result = await axios.patch(`http://localhost:8080/todoList/${id}`, updatedItem)

      dispatch(fetchTodoList())

      return result.data
    } catch (error) {
      return rejectWithValue(error.response.data)
    }
  }
)

export const deleteTodoItem = createAsyncThunk("todo/deleteTodoItem",
  async (id, { rejectWithValue, dispatch }) => {
    try {
      const result = await axios.delete(`http://localhost:8080/todoList/${id}`)

      dispatch(fetchTodoList())

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
    setTodoModal: (state, action) => {
      state.todoModal = action.payload
    },
    setEditedItemData: (state, action) => {
      state.editedItemData = action.payload
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

export const { setTodoList, setTodoModal, setEditedItemData } = todoSlice.actions;

export default todoSlice.reducer;