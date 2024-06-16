import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import usersReducer from "../redux/userSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    users: usersReducer,
  },
});
