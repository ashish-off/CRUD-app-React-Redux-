import { createSlice } from "@reduxjs/toolkit";

export const userDetailSlice = createSlice({
  name: "userDetails",
  initialState: {
    users: [],
    loading : false,
    error: null
  },
  reducers: {}
  
})

export default userDetailSlice.reducer;