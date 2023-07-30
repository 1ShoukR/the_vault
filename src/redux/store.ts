import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./testReducer";
import { userSlice } from "./userAccountSlice";

export const store = configureStore({
  reducer: {
    testReducer: counterSlice.reducer,
    userAuth: userSlice.reducer
    // posts: postsReducer,
    // comments: commentsReducer,
    // users: usersReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
