import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
    isLoading : false,
  },
  reducers: {
    addUser : (state, action) => {
        state.user = action.payload
    },
    logoutUser: (user) => {
      user.user = null;
    },
  },
});

export const {  logoutUser, addUser } = userSlice.actions;
export default userSlice.reducer;