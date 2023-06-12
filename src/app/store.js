import { configureStore } from '@reduxjs/toolkit';
import searchReducer from '../components/search/searchSlice';
import cartReducer from '../features/cartSlice';
import productsReducer from '../features/counter/counterSlice';

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
    search: searchReducer,
  },
});

