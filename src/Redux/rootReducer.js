import { combineReducers } from "redux";

import userReducers from "./admin/reducers";
import cateReducers from "./category/reducers";
import productReducers from "./product/reducers";
import authReducer from "./auth/reducers";

const rootReducer = combineReducers({
    auth: authReducer,
    users: userReducers,
    cate: cateReducers,
    product: productReducers,
});

export default rootReducer;