import { Descriptions } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import BreadcrumbCommon from "../Common/BreadcrumbCommon";
import orderData from "../Mock/orderData";
import { getPurchasedProduct } from "../Redux/PurchasedProduct/actions";
import { getPurchasedProSelector } from "../Redux/PurchasedProduct/selectors";

const OrderDetail = () => {
  const { id } = useParams();
  const getAllPurchasedpro = useSelector(getPurchasedProSelector);
  const { purchasedPro } = getAllPurchasedpro;
  const dispatch = useDispatch();
  const orderTitle = ['',"Đang xử lý", "Đang vận chuyển", "Đã giao hàng thành công", "Đã hủy" , "Hoàn trả"];

  useEffect(() => {
    dispatch(getPurchasedProduct(parseInt(id)));
  }, []);

  return (
    <div>
      <div>
        <BreadcrumbCommon header={"Order"} title={"Detail"} />
      </div>
      <div className="pt-4">
        {purchasedPro? (
          <Descriptions layout="horizontal">
            <Descriptions.Item label="Product Name">
              <span>{purchasedPro[0].name}</span>
            </Descriptions.Item>
            <Descriptions.Item label="Category Name">
              <span>{purchasedPro[0].cateName}</span>
            </Descriptions.Item>
            <Descriptions.Item label="Quantity">
              <span>{purchasedPro[0].orderQty}</span>
            </Descriptions.Item>
            <Descriptions.Item label="Price">
              <span>{(((purchasedPro[0].price * (100 - purchasedPro[0].discount)) / 100) * purchasedPro[0].orderQty)
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  &#8363;</span>
            </Descriptions.Item>
            <Descriptions.Item label="Address">
              <span>{purchasedPro[0].address_user}</span>
            </Descriptions.Item>
            <Descriptions.Item label="Order Date">
              <span>{purchasedPro[0].orderDate}</span>
            </Descriptions.Item>
            <Descriptions.Item label="Status">
              <span>{orderTitle[purchasedPro[0].status]}</span>
            </Descriptions.Item>
          </Descriptions>
        ) : null}
      </div>
    </div>
  );
};
export default OrderDetail;
