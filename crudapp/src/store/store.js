import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "../userreducerslice/UserReducerslice";

export const store = configureStore({
  reducer: {
    users: UserReducer,
  },
});
