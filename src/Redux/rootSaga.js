import { all, fork } from "redux-saga/effects";
import UserSaga from "./admin/saga";
import CateSaga from "./category/saga";
import ProductSaga from "./product/saga";


export function* rootSaga(){
    yield all([
        fork(UserSaga),
        fork(CateSaga),
        fork(ProductSaga)
    ]);
}