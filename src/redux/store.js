import { configureStore, createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  count: 0,
  status: 'idle',
  error: null,
};

export const fetchIncrementAsync = createAsyncThunk(
  'counter/fetchIncrement',
  async (amount = 1) => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(amount), 500);
    });
  }
);

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state) {
      state.count += 1;
    },
    decrement(state) {
      state.count -= 1;
    },
    reset() {
      return initialState;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchIncrementAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchIncrementAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.count += action.payload;
      })
      .addCase(fetchIncrementAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { increment, decrement, reset } = counterSlice.actions;

export const store = configureStore({
  reducer: counterSlice.reducer,
  devTools: true,
});
