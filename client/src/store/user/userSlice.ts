import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LoginFailure, UpdateFailure } from "context/Actions";
import { RootState, AppThunk } from "../../app/store";
// import { fetchCount } from './counterAPI';

export interface UserState {
  user: Object | null;
  isFetching: boolean;
  error: boolean;
  profilePic: string;
}

const initialState: UserState = {
  user: JSON.parse(localStorage.getItem("user") || "") || null,
  isFetching: false,
  error: false,
  profilePic: "",
};

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    loginStart: (state) => {
      state.user = null;
      state.isFetching = true;
      state.error = false;
    },
    loginSuccess: (state, action: PayloadAction<object>) => {
      console.log(action);
      state.user = action.payload;
      state.isFetching = false;
      state.error = false;
    },
    loginFailure: (state) => {
      state.user = null;
      state.isFetching = false;
      state.error = true;
    },
    updateStart: (state) => {
      state.isFetching = true;
    },
    updateSuccess: (state, action: PayloadAction<object>) => {
      state.user = action.payload;
      state.isFetching = false;
      state.error = false;
    },
    updateFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    logout: (state) => {
      state.user = null;
      state.isFetching = false;
      state.error = false;
    },
  },
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
  //   extraReducers: (builder) => {
  //     builder
  //       .addCase(incrementAsync.pending, (state) => {
  //         state.status = 'loading';
  //       })
  //       .addCase(incrementAsync.fulfilled, (state, action) => {
  //         state.status = 'idle';
  //         state.value += action.payload;
  //       })
  //       .addCase(incrementAsync.rejected, (state) => {
  //         state.status = 'failed';
  //       });
  //   },
});

export const { loginStart, loginSuccess, loginFailure, logout } =
  counterSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
// export const selectCount = (state: RootState) => state.counter.value;
export const getIsFetching = (state: RootState) => state.user.isFetching;
export const getUser = (state: RootState) => state.user.user;

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.

export default counterSlice.reducer;
