import { configureStore } from '@reduxjs/toolkit';
import authreducer from '../features/auth/authSlice'
import goalreducer from '../features/goal/goalSlice'
export const store = configureStore({
  reducer: {
    auth:authreducer,
    goal:goalreducer
  },
});
