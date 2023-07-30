import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../redux/store";

// Define a type for the slice state
interface UserState {
  message: string;
  status: number;
  token: string;
  isLoggedIn: boolean;
  first_name: string;
  last_name: string;
}

// Define the initial state using that type
const initialState: UserState = {
  message: "",
  status: 0,
  token: "",
  first_name:'',
  last_name: '',
  isLoggedIn: false
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState>) => {
      state.message = action.payload.message;
      state.status = action.payload.status;
      state.token = action.payload.token;
      state.first_name = action.payload.first_name;
      state.last_name = action.payload.last_name;
      state.isLoggedIn = true
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
