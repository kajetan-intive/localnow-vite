import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type NavigationStore = {
  visible: boolean;
};

const initialState: NavigationStore = {
  visible: true,
};

const navigationSlice = createSlice({
  name: 'navigation',
  initialState,
  reducers: {
    setVisibility: (state, { payload }: PayloadAction<NavigationStore['visible']>) => {
      state.visible = payload;
    },
    hide: (state) => {
      state.visible = false;
    },
    show: (state) => {
      state.visible = true;
    },
  },
});

export default navigationSlice;

export const navigationActions = navigationSlice.actions;
