import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faPen, faEye } from '@fortawesome/free-solid-svg-icons'
import { ExclamationCircleOutlined, FormOutlined } from '@ant-design/icons';
import { Button, Modal, Table } from "antd";
import { Link } from "react-router-dom";
import BreadcrumbCommon from "../Common/BreadcrumbCommon";
import { useDispatch, useSelector } from "react-redux";
import { getProductSelector } from "../Redux/product/selectors";
import { useEffect } from "react";
import { destroyProduct, getProduct } from "../Redux/product/actions";

const ProductList = () => {
    const { confirm } = Modal;
    const dispatch = useDispatch();
    const productData = useSelector(getProductSelector);

    const { product } = productData;

    useEffect(() => {
        dispatch(getProduct());
    }, [])

    const showDeleteConfirm = (id) => {
        confirm({
            title: 'Are you sure delete this task ' + id + '?',
            icon: <ExclamationCircleOutlined />,
            content: 'Some descriptions',
            okText: 'Yes',
            okType: 'danger',
            cancelText: 'No',
            onCancel() {
                console.log('Cancel');
            },
            onOk() {
                dispatch(destroyProduct({ id: id }))
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
            dataIndex: 'name',
            key: 'id',
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'id',
            render:(val)=>{
                return <span>{val.toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}&#8363;</span>
              }
        },
        {
            title: 'Quantity',
            dataIndex: 'qty',
            key: 'id',
        },
        {
            title: 'Category',
            dataIndex: 'cateName',
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
            render: (value) => {
                if (value !== undefined && value) {
                    return (
                        <span style={{ wordBreak: 'break-word' }}>
                            {value.length > 150 ? value.substring(0, 149) : value}
                        </span>
                    )
                }
                return null;
            }
        },
        {
            title: 'Evaluate',
            dataIndex: 'evaluate',
            key: 'id',
        },
        {
            title: "Action",
            render: (val) => {
                return (
                    <>
                        <Link className="btn mr-3" to={"/product/detail/" + val.id}><FontAwesomeIcon icon={faEye} color="pink" /></Link>
                        <Link className="btn mr-3" to={"/product/edit/" + val.id}><FontAwesomeIcon icon={faPen} color="#ffc107" /></Link>
                        <Button className="btn mr-1" onClick={() => showDeleteConfirm(val.id)}><FontAwesomeIcon icon={faTrashCan} color="#dc3545" /></Button>
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
                <Table columns={col} rowKey={'id'} className="pt-3" dataSource={product} />
            </div>
        </div>
    );
}

export default ProductList;