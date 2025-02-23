import { configureStore } from "@reduxjs/toolkit";
import userDetailReducer from "../features/UserDetailSice"
const store = configureStore({
  reducer: {
    userStore : userDetailReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
