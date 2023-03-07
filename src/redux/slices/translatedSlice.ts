import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export type LangState = {
  lang: string;
};

const initialState: LangState = {
  lang: 'en',
};

export const translatedSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    changeLang: (state, action: PayloadAction<string>) => {
      state.lang = action.payload
    }
  },
});

export const translatedReducer = translatedSlice.reducer;
export const translatedAction = translatedSlice.actions;