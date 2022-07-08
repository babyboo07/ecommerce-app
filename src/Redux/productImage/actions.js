export const DESTROY_PRODUCT_IMAGES = 'DESTROY_PRODUCT_IMAGES';
export const DESTROY_PRODUCT_IMAGES_SUCCESS = 'DESTROY_PRODUCT_IMAGES_SUCCESS';
export const DESTROY_PRODUCT_IMAGES_FAILURE = 'DESTROY_PRODUCT_IMAGES_FAILURE';

export const destroyProductImage = (payload) =>({
    type:'DESTROY_PRODUCT_IMAGES',
    payload
});

export const destroyProductImageSuccess =(payload) =>({
    type:'DESTROY_PRODUCT_IMAGES_SUCCESS',
    payload
});

export const destroyProductImagetFailure = (payload)=>({
    type:'DESTROY_PRODUCT_IMAGES_FAILURE',
    payload
});