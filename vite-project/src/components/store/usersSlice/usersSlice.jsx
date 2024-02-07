import { createSlice } from "@reduxjs/toolkit";

const Users = createSlice({
  name: "users",
  initialState: [],
  reducers: {
    addUser(state, action) {},
    removeUser(state, action) {},
    deleteUsers(state, action) {},
  },
});
export default Users.reducer;
