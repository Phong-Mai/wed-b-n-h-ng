import {  createSlice } from '@reduxjs/toolkit';

import data from '../../data/data.json'
const initialState = data



export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
  },
});

//export const { } = productsSlice.actions;

export const selectProducts = (state) => state.products.products.phone;
export const selectProduct = (state) => state.products.products;
export const selectLaptop = (state) => state.products.products.laptop;
export const selectTablet = (state) => state.products.products.tablet;
export const selectWatch = (state) => state.products.products.watch;
export const selectEarphone = (state) => state.products.products.earphone;


export default productsSlice.reducer;
