import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/auth.slice";
import userReducer from "./slices/user.slice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
  },
  devTools: true,
});

export default store;
