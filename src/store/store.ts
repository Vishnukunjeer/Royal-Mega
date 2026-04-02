// src/store/store.ts
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '@/store/slices/cartSlice'; // Ye wo slice hai jo humne pehle banaya tha

export const store = configureStore({
  reducer: {
    cart: cartReducer, // Cart state ko store me register kar diya
  },
});

// TypeScript ke liye types export kar rahe hain (Taaki useSelector me error na aaye)
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;