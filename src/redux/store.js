import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../components/pages/Product/productSlice";

const store = configureStore({
    reducer: {
        product: productSlice.reducer,
    },
});

export default store;
