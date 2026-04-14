// src/store/store.ts
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '@/store/slices/cartSlice';
import authReducer from '@/store/slices/authSlice'
import { api } from '@/api/api';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    [api.reducerPath]: api.reducer,
    auth: authReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

// TypeScript ke liye types export kar rahe hain (Taaki useSelector me error na aaye)
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;