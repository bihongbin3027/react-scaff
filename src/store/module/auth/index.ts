import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
// import { AppThunk } from "@/store";

interface AuthStateType {
  token: string;
  status: "idle" | "loading" | "failed";
}

const initialState: AuthStateType = {
  token: "0",
  status: "idle",
};

function fetchToken() {
  return new Promise<{ data: number }>((resolve) =>
    setTimeout(() => resolve({ data: Math.random() }), 500),
  );
}

export const setAsyncRandomToken = createAsyncThunk(
  "auth/setAsyncRandomToken",
  async () => {
    const res = await fetchToken();
    return res.data;
  },
);

// export const setAsyncRandomToken =
//   (): AppThunk => async (dispatch, getState) => {
//     const state = getState();
//     dispatch(actions.setStatus("loading"));
//     try {
//       const res = await fetchToken();
//       dispatch(actions.setToken(state.auth.token + res.data));
//     } finally {
//       dispatch(actions.setStatus("failed"));
//     }
//   };

export const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<AuthStateType["token"]>) => {
      state.token = action.payload;
    },
    setStatus: (state, action: PayloadAction<AuthStateType["status"]>) => {
      state.status = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(setAsyncRandomToken.pending, (state) => {
        state.status = "loading";
      })
      .addCase(setAsyncRandomToken.fulfilled, (state, action) => {
        state.status = "failed";
        state.token = state.status + action.payload;
      });
  },
});

export const actions = authSlice.actions;

export default authSlice.reducer;
