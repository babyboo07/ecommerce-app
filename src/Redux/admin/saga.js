import { all, call, takeLatest, put } from "redux-saga/effects";
import SuperFetch from "../../services/SuperFetch"
import { addUserFailure, 
    addUserSuccess, 
    ADD_USER, 
    getUserFailure, 
    getUserSuccess, 
    GET_USER } from "./actions";

const getUserList=(data) =>{
    return new SuperFetch().get('/api/users',data);
}

const addUser = (data) =>{
    return new SuperFetch().post('/api/users/add',data);
}

function* getUsers(data) {
    try {
        const response = yield call(getUserList,data.payload);
        yield put(getUserSuccess(response));
    } catch (e) {
        yield put(getUserFailure())
    }
}

function* addUsers(data) {
    try {
        const response = yield call(addUser,data.payload);
        if(response!=null) yield put(addUserSuccess(response));
    } catch (e) {
        yield put(addUserFailure())
    }
}

function* UserSaga(){
    yield all([
        takeLatest(GET_USER , getUsers),
        takeLatest(ADD_USER, addUsers)
    ])
}

export default UserSaga;