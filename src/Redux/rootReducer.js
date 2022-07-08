import { combineReducers } from "redux";
import userReducers from "./admin/reducers";
import cateReducers from "./category/reducers";
import productReducers from "./product/reducers";
import authReducer from "./auth/reducers";
import purchasedproReducers from "./PurchasedProduct/reducers";
import productImageReducers from "./productImage/reducers";

const rootReducer = combineReducers({
    auth: authReducer,
    users: userReducers,
    cate: cateReducers,
    product: productReducers,
    purchasedpro: purchasedproReducers,
    productImage : productImageReducers,
});

export default rootReducer;