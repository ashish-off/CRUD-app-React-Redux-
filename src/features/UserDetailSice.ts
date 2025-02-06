import { createSlice , createAsyncThunk} from "@reduxjs/toolkit";

//create action
export const createUser = createAsyncThunk(
  "createUser",
  async (data, { rejectWithValue }) => {
    console.log("data", data);
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
      const result = await response.json();
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

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