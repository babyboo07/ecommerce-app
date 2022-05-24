import { all, fork } from "redux-saga/effects";
import UserSaga from "./admin/saga";


export function* rootSaga(){
    yield all([
        fork(UserSaga)
    ]);
}