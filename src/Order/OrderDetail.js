import { Descriptions } from "antd";
import { useParams } from "react-router-dom";
import BreadcrumbCommon from "../Common/BreadcrumbCommon";
import orderData from "../Mock/orderData";


const OrderDetail = () => {
    const { id } = useParams();

    const order = orderData.filter(p => { return p.id === parseInt(id) })[0];

    return (
        <div>
            <div>
                <BreadcrumbCommon header={'Order'} title={'Detail'} />
            </div>
            <div className="pt-4">
                {order !== undefined && order && order.id !== undefined ?
                    < Descriptions layout="horizontal">
                        <Descriptions.Item label="Product Name"><span>{order.productName}</span></Descriptions.Item>
                        <Descriptions.Item label="Category Name"><span>{order.categoryName}</span></Descriptions.Item>
                        <Descriptions.Item label="Quantity"><span>{order.qty}</span></Descriptions.Item>
                        <Descriptions.Item label="Price"><span>{order.price}</span></Descriptions.Item>
                        <Descriptions.Item label="Address"><span>{order.address}</span></Descriptions.Item>
                        <Descriptions.Item label="Order Date"><span>{order.orderDate}</span></Descriptions.Item>
                        <Descriptions.Item label="Type"><span>{order.type}</span></Descriptions.Item>
                    </Descriptions> : null
                }
            </div>
        </div >
    );
}
export default OrderDetail;