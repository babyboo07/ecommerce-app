export const GET_USER = 'GET_USER';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const GET_USER_FAILURE = 'GET_USER_FAILURE';

export const DESTROY_USER = 'DESTROY_USER';
export const DESTROY_USER_SUCCESS = 'DESTROY_USER_SUCCESS';
export const DESTROY_USER_FAILURE = 'DESTROY_USER_FAILURE';

export const ADD_USER = 'ADD_USER';
export const ADD_USER_SUCCESS = 'ADD_USER_SUCCESS';
export const ADD_USER_FAILURE = 'ADD_USER_FAIlURE';

export const getUser = (payload) =>({
    type:GET_USER,
    payload
});

export const getUserSuccess = (payload) =>({
    type:GET_USER_SUCCESS,
    payload
});

export const getUserFailure = (payload) =>({
    type:GET_USER_FAILURE,
    payload
});

export const destroyUser = (payload) =>({
    type: DESTROY_USER,
    payload
});

export const destroyUserSuccess = (payload)=>({
    type:DESTROY_USER_SUCCESS,
    payload
});

export const destroyUserFailure= (payload) =>({
    type:DESTROY_USER_FAILURE,
    payload
});

export const addUser = (payload) =>({
    type:ADD_USER,
    payload
});

export const addUserSuccess = (payload) =>({
    type:ADD_USER_SUCCESS,
    payload
});

export const addUserFailure = (payload) =>({
    type:ADD_USER_FAILURE,
    payload
})