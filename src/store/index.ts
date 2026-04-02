import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import authReducer from './slices/cartSlice';
// import { api } from '../services/api'; // When you create your RTK Query API

export const store = configureStore({
  reducer: {
    auth: authReducer,
    // [api.reducerPath]: api.reducer, // Add your API reducer here
  },
  // Adding the api middleware enables caching, invalidation, polling, and other useful features of rtk-query.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(), // .concat(api.middleware)
});

// Optional: enables refetchOnFocus/refetchOnReconnect behaviors
setupListeners(store.dispatch);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;