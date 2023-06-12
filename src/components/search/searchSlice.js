import { createSelector, createSlice } from "@reduxjs/toolkit";

const initialState = {
    search: ""
}

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        searchProduct: (state, action) => {
            state.search = action.payload
        }
    }
})

export const productsIphone = (state) => state.products.products.phone 
export const productsTablet = (state) => state.products.products.tablet 
export const productsWatch = (state) => state.products.products.watch 
export const productsEarphone = (state) => state.products.products.earphone
export const productsLaptop = (state) => state.products.products.laptop
 export const searchProducts = (state) => state.search.search

export const resultSearchIphone = createSelector(
    productsIphone,
    searchProducts,
    (product, search) => {
        return product.filter((pd) => {
        return pd.name.includes(search)
        } )
    }
)
export const resultSearchTablet = createSelector(
    productsTablet,
    searchProducts,
    (product, search) => {
        return product.filter((pd) => {
        return pd.name.includes(search)
        } )
    }
)
export const resultSearchWatch = createSelector(
    productsWatch,
    searchProducts,
    (product, search) => {
        return product.filter((pd) => {
        return pd.name.includes(search)
        } )
    }
)
export const resultSearchEarphone = createSelector(
    productsEarphone,
    searchProducts,
    (product, search) => {
        return product.filter((pd) => {
        return pd.name.includes(search)
        } )
    }
)
export const resultSearchLaptop = createSelector(
    productsLaptop,
    searchProducts,
    (product, search) => {
        return product.filter((pd) => {
        return pd.name.includes(search)
        } )
    }
)


export const { searchProduct } = searchSlice.actions

export default searchSlice.reducer