import { createSlice } from '@reduxjs/toolkit';
import i18n from '../../language/i18n';

export const languageSlice = createSlice({
  name: 'language',
  initialState: {
    language: localStorage.getItem('language') || 'en',
  },
  reducers: {
    setLanguage: (state, action) => {
      state.language = action.payload;
      i18n.changeLanguage(action.payload);
      localStorage.setItem('language', action.payload);
    },
  },
});

export const currentLanguage = (state) => state.language.language;

export const { setLanguage } = languageSlice.actions;

export default languageSlice.reducer;
