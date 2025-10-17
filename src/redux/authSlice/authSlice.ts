import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState, userState } from "./interfaces";

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    setUser: (state, action: PayloadAction<userState>) => {
      state.user = action.payload;
    },
    clearToken: (state) => {
      state.token = null;
      state.user = null;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export const { setToken, clearToken, setLoading, setUser } = authSlice.actions;
export default authSlice.reducer;
