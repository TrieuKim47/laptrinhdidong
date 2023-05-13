import { createSlice } from '@reduxjs/toolkit'
import moment from 'moment';
const initialState = [{
  id: 1,
  name: 'todo1',
  date: moment().format('DD-MM-yyyy'),
  des: 'hello',
  status: false
}]

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload)
    },
    toggleStatus: (state, action) => {
      const { id } = action.payload;
      state.map(todo => {
        if (todo.id === id) {
          todo.status = !todo.status
        }
        return todo;
      });
    },
    updateTodo: (state, action) => {
      const { id, name, des, date, status } = action.payload;
      const updatedState = state.map(todo => {
        if (todo.id === id) {
          return { ...todo, name, des, date, status };
        }
        return todo;
      });
      return updatedState;
    }

  }
})
export const { addTodo, toggleStatus, updateTodo } = todoSlice.actions
export default todoSlice.reducer