import { Table, Tabs } from "antd";
import BreadcrumbCommon from "../Common/BreadcrumbCommon";
import SreachCommon from "../Common/SreachCommon";
import cateMockData from "../Mock/testData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faCheck, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FormOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPurchasedProSelector } from "../Redux/PurchasedProduct/selectors";
import { editStatus, getAllOrders } from "../Redux/PurchasedProduct/actions";


const OrderList = () => {
  const { TabPane } = Tabs;
  const col = [
    {
      title: "Stt",
      dataIndex: "orderId",
      key: "id",
    },
    {
      title: "Product Name",
      dataIndex: "name",
      key: "id",
    },
    {
      title: "Category Name",
      dataIndex: "cateName",
      key: "id",
    },
    {
      title: "Quantity",
      dataIndex: "orderQty",
      key: "id",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "id",
      render:(val)=>{
        return <span>{val.toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}&#8363;</span>
      }
    },
    {
      title: "Address",
      dataIndex: "address_user",
      key: "id",
    },
    // {
    //     title: 'Order Date',
    //     dataIndex: 'orderDate',
    //     key: 'id',
    //     render: (val) => {
    //         return <span>{val.toLocaleString("en-US")}</span>
    //     }
    // },
    {
      title: "Action",
      render: (val, data) => {
        switch (data.status) {
          case 1:
            return (
              <>
                <Link className="btn mr-1" to={""} onClick={onClickCancel(val)}>
                  <FontAwesomeIcon icon={faXmark} color="red" />
                </Link>
                <Link className="btn mr-1" to={""}>
                  <FontAwesomeIcon icon={faCheck} color="green" />
                </Link>
              </>
            );
          case 2:
            return (
              <>
                <Link className="btn mr-1" to={""}>
                  <FontAwesomeIcon icon={faXmark} color="red" />
                </Link>
                <Link className="btn mr-1" to={""}>
                  <FontAwesomeIcon icon={faPaperPlane} color="#6A67CE" />
                </Link>
              </>
            );
          case 3:
            return (
              <>
                <Link className="btn" to={"/order/detail/" + val.orderId}>
                  <FormOutlined style={{ color: "#FFD24C" }} />
                </Link>
              </>
            );
          case 4:
            return (
              <>
                <Link className="btn" to={"/order/cancel/" + val.orderId}>
                  <FormOutlined style={{ color: "#FFD24C" }} />
                </Link>
              </>
            );
        }
      },
    },
  ];

  let cateList = cateMockData.map((i) => {
    return { value: i.id, name: i.categoryName, isSelected: i.id === 1 };
  });
  const [tabActive, setTabActive] = useState(1);
  const [orderList, setOrderList] = useState([]);
  const dispatch = useDispatch();
  const getAllPurchasedpro = useSelector(getPurchasedProSelector);
  const { order } = getAllPurchasedpro;

  useEffect(() => {
    dispatch(getAllOrders(tabActive));
  }, [tabActive]);

  useEffect(() => {
    var list = order.length > 0 ? order.filter((od) => od.status === tabActive) : [];
    setOrderList(list);
  }, [tabActive, order]);

  const onClickCancel=(data)=>{
    data.status = 4;
    // dispatch(editStatus(data));
  }

  return (
    <div>
      <div>
        <BreadcrumbCommon header={"Order"} title={"List"} />
      </div>
      <div className="mt-4">
        <Tabs defaultActiveKey="1" type="card" onChange={(e) => setTabActive(parseInt(e))}>
          <TabPane tab="Ordered" key="1">
            <SreachCommon dataList={cateList} />
            <Table className="mt-2" rowKey={"id"} dataSource={orderList} columns={col} />
          </TabPane>
          <TabPane tab="Processing" key="2">
            <SreachCommon dataList={cateList} />
            <Table className="mt-2" rowKey={"id"} dataSource={orderList} columns={col} />
          </TabPane>
          <TabPane tab="Successful delivery" key="3">
            <SreachCommon dataList={cateList} />
            <Table className="mt-2" rowKey={"id"} dataSource={orderList} columns={col} />
          </TabPane>
          <TabPane tab="Cancel" key="4">
            <Table className="mt-2" rowKey={"id"} dataSource={orderList} columns={col} />
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
};

export default OrderList;
