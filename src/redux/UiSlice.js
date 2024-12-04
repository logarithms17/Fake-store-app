import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
    name: "ui",
    initialState: {
        amount: 0,
        cartIsVisible: false,
    },
    reducers: {
        toggleCart(state) {
            state.cartIsVisible = !state.cartIsVisible;
        },
        addToCart(state, action) {
            state.amount += action.payload;
        },
    },
});

export const { addToCart, toggleCart } = uiSlice.actions;

export default uiSlice.reducer;