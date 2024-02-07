import { configureStore } from "@reduxjs/toolkit";
import Users from "./usersSlice/usersSlice";

const Store = configureStore({
  reducer: {
    users: Users,
  },
});

export default Store;
