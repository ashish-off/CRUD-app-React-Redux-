import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { userDetailSliceType, userType } from "../type";

const initialState: userDetailSliceType = {
  users: [],
  loading: false,
  error: null,
};

//create action
export const createUser = createAsyncThunk(
  "createUser",
  async (data: userType, { rejectWithValue }) => {
    const response = await fetch(
      "https://67a23a30409de5ed5254bc5d.mockapi.io/ashishcrud",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    try {
      if (response.ok) {
        const result = await response.json();
        return result;
      }
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  }
);

export const showUser = createAsyncThunk(
  "showUser",
  async (_, { rejectWithValue }) => {
    const response = await fetch(
      "https://67a23a30409de5ed5254bc5d.mockapi.io/ashishcrud"
    );

    try {
      if (response.ok) {
        const result = await response.json();
        return result;
      }
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const userDetailSlice = createSlice({
  name: "userDetails",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    //create operations
      .addCase(createUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users.push(action.payload);
      })
      .addCase(createUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      //read operations
      .addCase(showUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(showUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(showUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
  },
});

export default userDetailSlice.reducer;

//29:38
