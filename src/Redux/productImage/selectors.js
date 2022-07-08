import { createSelector } from "reselect";

const getProductImage = (state) => state.productImage;

export const getProductSelector = createSelector(getProductImage, (productImage) => productImage);