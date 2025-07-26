import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isAuthenticated: false,
  isGuest: false,
}; 

const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    userLoggedIn: (state, action) => {
        state.user = action.payload.user;
        state.isAuthenticated = true;
        state.isGuest = false;
    },
    userLoggedOut:(state) => {
        state.user = null;
        state.isAuthenticated = false;
        state.isGuest = false;
    },
    guestLoggedIn: (state, action) => {
        state.user = action.payload.user;
        state.isAuthenticated = true;
        state.isGuest = true;
    }
  },
});

export const {userLoggedIn, userLoggedOut, guestLoggedIn} = authSlice.actions;
export default authSlice.reducer;
