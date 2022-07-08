import { message } from "antd";
import { all, call, put, takeLatest } from "redux-saga/effects";
import SuperFetch from "../../services/SuperFetch"
import { destroyProductImageSuccess, destroyProductImagetFailure, DESTROY_PRODUCT_IMAGES } from "./actions";

const destroyProductImage = (data) => {
    return new SuperFetch().get('api/product/delete/' + data.id);
}

function* deleteProductImage(data) {
    try {
        const response = yield call(destroyProductImage, data.payload);
        yield put(destroyProductImageSuccess(response));
        // message.success('This is a success message');
    } catch (e) {
        message.error('This is an error message');
        yield put(destroyProductImagetFailure());
    }
}

function* ProductImageSaga() {
    yield all([
        takeLatest(DESTROY_PRODUCT_IMAGES, deleteProductImage),
    ])
}

export default ProductImageSaga;