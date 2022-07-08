import { message } from "antd";
import { all, call, takeLatest, put } from "redux-saga/effects";
import SuperFetch from "../../services/SuperFetch"
import {
    addUserFailure,
    addUserSuccess,
    ADD_USER,
    destroyUserFailure,
    destroyUserSuccess,
    DESTROY_USER,
    editPassFailure,
    editPassSuccess,
    editUserFailure,
    editUserSuccess,
    EDIT_PASSWORD,
    EDIT_USER,
    getUser,
    getUserFailure,
    getUserSuccess,
    GET_USER,
    showUserFailure,
    showUserSuccess,
    SHOW_USER
} from "./actions";

const getUserList = (data) => {
    return new SuperFetch().get('/api/users', data);
}

const addUser = (data) => {
    return new SuperFetch().post('/api/users/add', data);
}

const showUser = (data) => {
    return new SuperFetch().get('/api/users/show/' + data.id);
}

const destroyUser = (data) => {
    return new SuperFetch().get('/api/users/delete/' + data.id);
}

const editUser = (data) => {
    return new SuperFetch().post('/api/users/edit/' + data.id, data)
}

const editPass = (data) => {
    return new SuperFetch().post('api/users/editpassword/' + data.id, data)
}

function* getUsers(data) {
    try {
        const response = yield call(getUserList, data.payload);
        yield put(getUserSuccess(response));
    } catch (e) {
        yield put(getUserFailure())
    }
}

function* addUsers(action) {
    try {
        const response = yield call(addUser, action.payload);
        if (response) {
            message.success('This is a success message');
            yield put(addUserSuccess(response));
            action.navigate(action.path);
        }
    } catch (e) {
        message.error('This is an error message');
        yield put(addUserFailure())
    }
}


function* showUsers(data) {
    try {
        const response = yield call(showUser, data.payload);
        yield put(showUserSuccess(response))
    } catch (e) {
        yield put(showUserFailure());
    }
}

function* destroyUsers(data) {
    try {
        const response = yield call(destroyUser, data.payload);
        yield put(getUser(data.searchData));
    } catch (e) {
        yield put(destroyUserFailure());
    }
}

function* editUsers(action) {
    try {
        const response = yield call(editUser, action.payload);
        if (response){
            message.success('This is a success message');
            action.navigate("/account/list");
        }
    } catch (e) {
        message.error('This is an error message');
        yield put(editUserFailure());
    }
}

function* editPassword (action){
    try {
        const response = yield call(editPass, action.payload);
        if(response){
            yield put(editPassSuccess(response));
            message.success('This is a success message');
            action.navigate(action.path);
        }
    } catch (error) {
        message.error('This is an error message');
        yield put(editPassFailure)
    }
}

function* UserSaga() {
    yield all([
        takeLatest(GET_USER, getUsers),
        takeLatest(ADD_USER, addUsers),
        takeLatest(SHOW_USER, showUsers),
        takeLatest(DESTROY_USER, destroyUsers),
        takeLatest(EDIT_USER, editUsers),
        takeLatest(EDIT_PASSWORD,editPassword)
    ])
}

export default UserSaga;