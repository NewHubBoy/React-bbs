import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
    type: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setType: (state, action) => {
      state.type = action.payload;
    },
    fetchUser: (state, action) => {},
  },
});

export const currentUser = (state) => state.user.user;
export const currentType = (state) => state.user.type;
export const { setUser, setType, fetchUser } = userSlice.actions;

export default userSlice.reducer;
