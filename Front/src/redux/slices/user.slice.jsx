import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: "VOID",
  userData: {},
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUserProfile: (state, action) => {
      state.status = "SUCCEEDED";
      state.userData = action.payload;
    },
    editUsername: (state, action) => {
      state.status = "MODIFIED";
      state.userData.username = action.payload;
    },
    logout: (state) => {
      state.status = "VOID";
      state.userData = {};
    },
    updateProfileSuccess(state, action) {
      state.profile = action.payload;
      state.error = null;
    },
    updateProfileFail(state, action) {
      state.error = action.payload;
    },
  },
});

export const {
  getUserProfile,
  editUsername,
  updateProfileSuccess,
  updateProfileFail,
  logout,
} = userSlice.actions;
export default userSlice.reducer;
