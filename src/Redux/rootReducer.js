import { combineReducers } from "redux";

import userReducers from "./admin/reducers";
import cateReducers from "./category/reducers";
import productReducers from "./product/reducers";

const rootReducer = combineReducers({
    users: userReducers,
    cate: cateReducers,
    product: productReducers,
});

export default rootReducer;