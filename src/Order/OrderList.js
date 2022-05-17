import { Table, Tabs } from "antd";
import BreadcrumbCommon from "../Common/BreadcrumbCommon";
import SreachCommon from "../Common/SreachCommon";
import orderData from "../Mock/orderData";
import cateMockData from "../Mock/testData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faCheck, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FormOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const { TabPane } = Tabs;
const col = [
    {
        title: 'Stt',
        dataIndex: 'id',
        key: 'id',
    },
    {
        title: 'Product Name',
        dataIndex: 'productName',
        key: 'id',
    },
    {
        title: 'Category Name',
        dataIndex: 'categoryName',
        key: 'id',
    },
    {
        title: 'Quantity',
        dataIndex: 'qty',
        key: 'id',
    },
    {
        title: 'Price',
        dataIndex: 'price',
        key: 'id',
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'id',
    },
    {
        title: 'Order Date',
        dataIndex: 'orderDate',
        key: 'id',
        render: (val) => {
            return <span>{val.toLocaleString("en-US")}</span>
        }
    },
    {
        title: "Action",
        render: (val, data) => {
            switch (data.type) {
                case 1:
                    return (
                        <>
                            <Link className="btn mr-1" to={""}><FontAwesomeIcon icon={faXmark} color="red" /></Link>
                            <Link className="btn mr-1" to={""}><FontAwesomeIcon icon={faCheck} color="green" /></Link>
                        </>
                    )
                case 2:
                    return (
                        <>
                            <Link className="btn mr-1" to={""}><FontAwesomeIcon icon={faXmark} color="red" /></Link>
                            <Link className="btn mr-1" to={""}><FontAwesomeIcon icon={faPaperPlane} color="#6A67CE" /></Link>
                        </>
                    )
                case 3:
                    return (
                        <>
                            <Link className="btn" to={"/order/detail/"+ val.id}><FormOutlined style={{ color: '#FFD24C' }} /></Link>
                        </>
                    )
                case 4:
                    return (
                        <>
                            <Link className="btn" to={"/order/cancel/"+ val.id}><FormOutlined style={{ color: '#FFD24C' }} /></Link>
                        </>
                    )
            }
        }
    }
];

const OrderList = () => {
    let cateList = cateMockData.map(i => {
        return { value: i.id, name: i.categoryName, isSelected: i.id === 1 }
    });
    const [tabActive, setTabActive] = useState(1);
    const [orderList, setOrderList] = useState([]);

    useEffect(() => {
        switch (tabActive) {
            case 1:
                setOrderList(orderData.filter(od => { return od.type === 1 }));
                break;

            case 2:
                setOrderList(orderData.filter(od => { return od.type === 2 }));
                break;

            case 3:
                setOrderList(orderData.filter(od => { return od.type === 3 }));
                break;

            case 4:
                setOrderList(orderData.filter(od => { return od.type === 4 }));
                break;
        }
    }, [tabActive]);

    return (
        <div>
            <div>
                <BreadcrumbCommon header={'Order'} title={'List'} />
            </div>
            <div className="mt-4">
                <Tabs defaultActiveKey="1" type="card" onChange={(e) => setTabActive(parseInt(e))}>
                    <TabPane tab="Ordered" key="1">
                        <SreachCommon dataList={cateList} />
                        <Table className="mt-2" rowKey={'id'} dataSource={orderList} columns={col} />
                    </TabPane>
                    <TabPane tab="Processing" key="2">
                        <SreachCommon dataList={cateList} />
                        <Table className="mt-2" rowKey={'id'} dataSource={orderList} columns={col} />
                    </TabPane>
                    <TabPane tab="Successful delivery" key="3">
                        <SreachCommon dataList={cateList} />
                        <Table className="mt-2" rowKey={'id'} dataSource={orderList} columns={col} />
                    </TabPane>
                    <TabPane tab="Cancel" key="4">
                        <Table className="mt-2" rowKey={'id'} dataSource={orderList} columns={col} />
                    </TabPane>
                </Tabs>
            </div>
        </div>
    );
}

export default OrderList;