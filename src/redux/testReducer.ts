import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "..//redux/store";

// Define a type for the slice state
interface TestState {
  value: number;
  data: Record<string, any>; // or you can use a more specific type for the data object
}

// Define the initial state using that type
const initialState: TestState = {
  value: 0,
  data: {}, // Initialize the data object as an empty object
};

export const counterSlice = createSlice({
  name: "test-data",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setTestData: (state, action: PayloadAction<Record<string, any>>) => {
      state.data = action.payload;
    },
  },
});

export const { setTestData } = counterSlice.actions;

/* you can also use the actions like this if wanted:
export const setTestData = counterSlice.actions.setTestData;
*/

export default counterSlice.reducer;
