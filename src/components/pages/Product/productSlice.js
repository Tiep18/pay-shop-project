import { createSlice } from "@reduxjs/toolkit";

const initialState = localStorage.getItem("cartItem")
    ? JSON.parse(localStorage.getItem("cartItem"))
    : [];

export default createSlice({
    name: "product",
    initialState: initialState,
    reducers: {
        addProductToCart: (state, action) => {
            const exitProduct = state.find(
                (product) =>
                    product.id === action.payload.id &&
                    product.size === action.payload.size &&
                    product.color === action.payload.color
            );
            if (exitProduct) {
                exitProduct.qty += parseInt(action.payload.qty);
            } else state.push(action.payload);

            localStorage.setItem("cartItem", JSON.stringify(state));
        },
        updateQtyProductInCart: (state, action) => {
            const exitProduct = state.find(
                (product) => product.uuid === action.payload.uuid
            );
            if (exitProduct) exitProduct.qty = action.payload.qty;
            localStorage.setItem("cartItem", JSON.stringify(state));
        },
        removeProduct: (state, action) => {
            const productRemove = state.find(
                (product) => product.uuid === action.payload.uuid
            );
            const index = state.indexOf(productRemove);
            state.splice(index, 1);
            localStorage.setItem("cartItem", JSON.stringify(state));
        },
    },
});
