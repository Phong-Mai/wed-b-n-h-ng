import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
const initialState = {
    cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const itemIdex = state.cartItems.findIndex(
                (item) => item.id === action.payload.id
                );
            if (itemIdex >= 0) {
                state.cartItems[itemIdex].cartQuantity += 1;
                toast.info(`increased ${state.cartItems[itemIdex].name} cart quantity`,{
                    position:'bottom-left',
                });
            }else {
                const tempProduct = { ...action.payload, cartQuantity: 1 }
                state.cartItems.push(tempProduct)
                toast.success(`${action.payload.title} added to cart`, {
                    position:'bottom-left',
                });
            }
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
        },
        removeFromCart: (state,action) => {
            const nextCartItems = state.cartItems.filter(
                cartItem => cartItem.id !== action.payload.id
            )
            state.cartItems = nextCartItems
            localStorage.setItem("cartItem", JSON.stringify(state.cartItems))
            toast.error(`${action.payload.name} removed from cart`, {
                position:'bottom-left',
            });
        },
        decreaseCart: (state, action) => {
            const itemIdex = state.cartItems.findIndex(
                cartItem => cartItem.id === action.payload.id
            )
            if(state.cartItems[itemIdex].cartQuantity > 1) {
                state.cartItems[itemIdex].cartQuantity -= 1
                toast.info(`Decreased ${action.payload.name} cart quantity`, {
                    position:'bottom-left',
                });
            } else if (state.cartItems[itemIdex].cartQuantity === 1) {
                const nextCartItems = state.cartItems.filter(
                    cartItem => cartItem.id !== action.payload.id
                )
                state.cartItems = nextCartItems;

                toast.error(`${action.payload.name} removed from cart`, {
                    position:'bottom-left',
                });
            }
            localStorage.setItem("cartItem", JSON.stringify(state.cartItems))
        },
        clearCart: (state, action) => {
            state.cartItems = [];
            toast.error(`Cart cleared`, {
                position:'bottom-left',
            });
            localStorage.setItem("cartItem", JSON.stringify(state.cartItems))
        },
        getTotals: (state,action) =>{
          let {total,quantity} = state.cartItems.reduce(
            (cartTotal, cartItem) => {
                const {price, cartQuantity } = cartItem;
                const itemTotal = price * cartQuantity;

                cartTotal.total += itemTotal
                cartTotal.quantity += cartQuantity
                return cartTotal
            }, {
                total:0,
                quantity:0,
            })
            state.cartTotalQuantity = quantity;
            state.cartTotalAmount = total
        }
    }
})

export const { addToCart, removeFromCart,decreaseCart,clearCart,getTotals } = cartSlice.actions;

export default cartSlice.reducer;