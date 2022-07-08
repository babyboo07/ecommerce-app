import { message } from "antd";
import { all, call, put, takeLatest } from "redux-saga/effects";
import SuperFetch from "../../services/SuperFetch";
import {
  addPurchasedProductFailure,
  addPurchasedProductSuccess,
  ADD_PURCHASED_PRODUCT,
  editStatusFailure,
  editStatusSuccess,
  EDIT_STATUS,
  getAllOrdersFailure,
  getAllOrdersSuccess,
  getPurchasedProductFailure,
  getPurchasedProductSuccess,
  GET_ALL_ORDER,
  GET_PURCHASED_PRODUCT,
} from "./actions";

const addPurchasedPro = (data) => {
  return new SuperFetch().post("/api/purchasedProducts/add", data);
};

const getPurchasedProduct = (data) => {
  return new SuperFetch().get(`/api/purchasedProducts/orderId/${data}`);
};

const getall = (data) => {
  return new SuperFetch().get(`/api/purchasedProducts/status/${data}`);
};

const updateOrder = (data)=>{
  return new SuperFetch().put("/api/purchasedProducts/edit/"+ data , data);
}

function* getAllOrder(data) {
  try {
    const res = yield call(getall, data.payload);
    if (res) {
      yield put(getAllOrdersSuccess(res));
    }
  } catch (e) {
    console.log(e);
    yield put(getAllOrdersFailure());
  }
}

function* getAllPurchasedPro(data) {
  try {
    const res = yield call(getPurchasedProduct, data.payload);
    if (res) {
      yield put(getPurchasedProductSuccess(res));
    }
  } catch (e) {
    console.log(e);
    yield put(getPurchasedProductFailure());
  }
}

function* addPurchasedProduct(action) {
  try {
    const response = yield call(addPurchasedPro, action.payload);
    if (response) {
      yield put(addPurchasedProductSuccess(response));
      message.success("Đặt hàng thành công");
      localStorage.removeItem("orderList");
      // const payload = { id: action.payload.cartId };
      // yield put(deleteCart(payload));
      action.navigate(action.path);
    }
  } catch (e) {
    message.error("Lỗi trong việc đặt đơn hàng");
    console.log(e);
    yield put(addPurchasedProductFailure());
  }
}

function* editStatusOrder(data) {
  try {
    const res = yield call(updateOrder,data.payload);
    if(res){
      yield put(editStatusSuccess(res));
      message.success("Cập nhật đơn hàng thành công");
    }
  } catch (e) {
    message.error("Lỗi trong việc cập nhật đơn hàng");
    console.log(e);
    yield put(editStatusFailure());
  }
}

function* PurchasedProSaga() {
  yield all([
    takeLatest(ADD_PURCHASED_PRODUCT, addPurchasedProduct),
    takeLatest(GET_PURCHASED_PRODUCT, getAllPurchasedPro),
    takeLatest(GET_ALL_ORDER , getAllOrder),
    takeLatest(EDIT_STATUS , editStatusOrder),
  ]);
}

export default PurchasedProSaga;
