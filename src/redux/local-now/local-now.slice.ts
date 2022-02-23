import { createSlice } from '@reduxjs/toolkit';
import { localNowApi } from '..';

type LocalNowStore = {
  experienceId?: string;
};

const initialState: LocalNowStore = {};

const localNowSlice = createSlice({
  name: 'local-now',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(localNowApi.endpoints.getMyMix.matchFulfilled, (state, { payload }) => {
      state.experienceId = payload.experienceId;
    });
  },
});

export default localNowSlice;

export const navigationActions = localNowSlice.actions;
