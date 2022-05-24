import { combineReducers } from "redux";

import userReducers from "./admin/reducers"

const rootReducer = combineReducers({
    users: userReducers,
});

export default rootReducer;