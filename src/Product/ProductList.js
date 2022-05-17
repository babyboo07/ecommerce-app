import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faPen } from '@fortawesome/free-solid-svg-icons'
import { ExclamationCircleOutlined ,FormOutlined } from '@ant-design/icons';
import { Button, Modal, Table } from "antd";
import { Link } from "react-router-dom";
import productData from "../Mock/productData"
import BreadcrumbCommon from "../Common/BreadcrumbCommon";

const ProductList = () => {
    const { confirm } = Modal;

    const showDeleteConfirm = () => {
        confirm({
            title: 'Are you sure delete this task?',
            icon: <ExclamationCircleOutlined />,
            content: 'Some descriptions',
            okText: 'Yes',
            okType: 'danger',
            cancelText: 'No',
            onCancel() {
                console.log('Cancel');
            },
            onOk() {
                console.log('OK');
            },
        });
    }

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
            title: 'Price',
            dataIndex: 'price',
            key: 'id',
        },
        {
            title: 'Quantity',
            dataIndex: 'qty',
            key: 'id',
        },
        {
            title: 'Category',
            dataIndex: 'categoryId',
            key: 'id',
        },
        {
            title: 'Material',
            dataIndex: 'material',
            key: 'id',
        },
        {
            title: 'Description',
            dataIndex: 'description',
            key: 'id',
        },
        {
            title: "Action",
            render: (val) => {
                return (
                    <>
                        <Link className="btn mr-3" to={"/product/edit/" + val.id}><FontAwesomeIcon icon={faPen} color="#ffc107" /></Link>
                        <Link className="btn mr-3" to={"/product/detail/" + val.id}><FormOutlined  color="#ffc107" /></Link>
                        <Button className="btn mr-1" onClick={showDeleteConfirm}><FontAwesomeIcon icon={faTrashCan} color="#dc3545" /></Button>
                    </>
                )
            }
        }
    ]
    return (
        <div>
            <div>
                <BreadcrumbCommon header={"Product"} title={"List"} />
            </div>
            <div className=" d-flex justify-content-end ">
                <Link to={"/product/Create"}>
                    <Button className="btn-success">
                        Add new Product
                    </Button>
                </Link>
            </div>
            <div>
                <Table columns={col} rowKey={'id'} className="pt-3" dataSource={productData} />
            </div>
        </div>
    );
}

export default ProductList;