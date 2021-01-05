import { createSlice } from '@reduxjs/toolkit';

// Initial State
export const initialState = {
  data: [],
  error: null,
  isLoading: false,
  hasError: false,
};

// Slice for Reducers
const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    getData: (state) => {
      state.isLoading = true;
    },
    getDataSuccess: (state, { payload }) => {
      state.data = payload;
      state.isLoading = false;
      state.hasError = false;
    },
    getDataFailure: (state) => {
      state.isLoading = false;
      state.hasError = true;
    },
    removeData: (state) => {
      state.data = [];
    },
  },
});

// Actions
export const { getData, getDataSuccess, getDataFailure, removeDataStatus } = dataSlice.actions;

// Selector
export const dataSelector = (state) => state.data;

// Reducer
export default dataSlice.reducer;

// Async Fetch Action
export const fetchData = (url) => async (dispatch) => {
  dispatch(getData());
  try {
    const response = await fetch(url);
    const data = await response.json();
    dispatch(getDataSuccess(data));
  } catch (error) {
    dispatch(getDataFailure());
  }
};
