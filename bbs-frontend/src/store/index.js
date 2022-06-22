import { configureStore } from '@reduxjs/toolkit';

import languageReducer from '../features/language/languageSlice';
import userReducer from '../features/user/userSlice';

export default configureStore({
  reducer: {
    language: languageReducer,
    user: userReducer,
  },
});
