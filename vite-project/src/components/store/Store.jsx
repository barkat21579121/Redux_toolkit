import { configureStore } from "@reduxjs/toolkit";
import Users from "./usersSlice/usersSlice";

const Store = configureStore({
  reducer: {
    user: Users,
  },
});

export default Store;
