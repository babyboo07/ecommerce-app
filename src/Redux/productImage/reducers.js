import { DESTROY_PRODUCT_IMAGES_FAILURE, DESTROY_PRODUCT_IMAGES_SUCCESS } from "./actions";


const initialState = {
    pending: false,
    destroyProductImage: null,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case DESTROY_PRODUCT_IMAGES_SUCCESS:
            return{
                ...state,
                destroyProductImage: action.payload
            }
        case DESTROY_PRODUCT_IMAGES_FAILURE:
            return{
                ...state
            }
        default:
            return {
                ...state
            }
    }
}