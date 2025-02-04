import { configureStore } from "@reduxjs/toolkit";
import userDetailReducer from "../features/UserDetailSice"
const store = configureStore({
  reducer: {
    app : userDetailReducer,
  },
});

export default store;
