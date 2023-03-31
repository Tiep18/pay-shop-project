import { createSelector } from "@reduxjs/toolkit";

const productSelector = (state) => state.product;

export const productRemainingSelector = createSelector(
    productSelector,
    (products) => products
);
