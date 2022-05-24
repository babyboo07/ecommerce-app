import { ADD_USER, 
    ADD_USER_FAILURE, 
    ADD_USER_SUCCESS, 
    DESTROY_USER, 
    DESTROY_USER_FAILURE, 
    DESTROY_USER_SUCCESS, 
    GET_USER, 
    GET_USER_FAILURE, 
    GET_USER_SUCCESS } from "./actions";

const initialState = {
    pending: false,
    users: [],
    detailUser: null,
    destroyUser: null,
};


export default (state = initialState,action)=>{
    switch(action.type){
        case GET_USER:
            return{
                ...state,
            };
        case GET_USER_SUCCESS:
            return{
                ...state,
                users: action.payload,
            };
        case GET_USER_FAILURE:
            return{
                ...state,
                users:[]
            };
        case ADD_USER:
            return{
                ...state,
                users: action
            };
        case ADD_USER_SUCCESS:
            return{
                ...state,
                users:action.payload
            };
        case ADD_USER_FAILURE:
            return{
                ...state,
                users:[]
            };
        case DESTROY_USER:
            return{
                ...state,
            };
        case DESTROY_USER_SUCCESS:
            return{
                ...state,
                destroyUser:action.payload
            };
        case DESTROY_USER_FAILURE:
            return{
                ...state,
                users:[]
            };
        default:
            return{
                ...state,
            };
        
    }
}