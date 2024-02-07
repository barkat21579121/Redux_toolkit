import { createSlice } from "@reduxjs/toolkit";

const Users = createSlice({
  name: "users",
  initialState: [],
  reducers: {
    addUser(state, action) {
      state.push(action.payload);
      console.log(action.payload);
    },
    removeUser(state, action) {
      state.splice(action.payload, 1);
    },
    deleteUsers(state, action) {
      return [];
    },
  },
});
export const { addUser, removeUser, deleteUsers } = Users.actions;
export default Users.reducer;
