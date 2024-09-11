import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: "VOID",
  isConnected: false,
  token: null,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: {
      firstName: "",
      lastName: "",
      userName: "",
    },
    token: null,
    error: null,
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.status = "SUCCEEDED";
      state.isConnected = true;
      state.token = action.payload;
      state.error = null;
    },
    loginFail: (state, action) => {
      state.status = "FAILED";
      state.isConnected = false;
      state.error = action.payload;
    },
    logout: (state) => {
      state.status = "VOID";
      state.isConnected = false;
      state.token = null;
      state.error = null;
    },
    updateUserName: (state, action) => {
      state.user.firstName = action.payload.firstName;
      state.user.lastName = action.payload.lastName;
      state.user.userName = action.payload.userName;
    },
  },
});

export const { loginSuccess, loginFail, logout, updateUserName } =
  authSlice.actions;
export default authSlice.reducer;
