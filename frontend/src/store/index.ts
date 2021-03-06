import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import authReducer from "./auth";
import userReducer from './user';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
