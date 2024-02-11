import { configureStore } from '@reduxjs/toolkit';
import { searchApi } from './searchApi';
import searchSlice from './searchSlice';

export const store = configureStore({
  reducer: {
    [searchApi.reducerPath]: searchApi.reducer,
    search: searchSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(searchApi.middleware),
});