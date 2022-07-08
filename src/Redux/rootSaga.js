import { all, fork } from "redux-saga/effects";
import UserSaga from "./admin/saga";
import AuthSaga from "./auth/sagas";
import CateSaga from "./category/saga";
import ProductSaga from "./product/saga";
import ProductImageSaga from "./productImage/saga";
import PurchasedProSaga from "./PurchasedProduct/saga";

export function* rootSaga(){
    yield all([
        fork(AuthSaga),
        fork(UserSaga),
        fork(CateSaga),
        fork(ProductSaga),
        fork(PurchasedProSaga),
        fork(ProductImageSaga),
    ]);
}