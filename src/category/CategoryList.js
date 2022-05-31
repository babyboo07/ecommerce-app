import { Button, message, Modal, Table } from "antd";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faPen } from '@fortawesome/free-solid-svg-icons'
import { ExclamationCircleOutlined } from '@ant-design/icons';
import BreadcrumbCommon from "../Common/BreadcrumbCommon.js";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { destroyCate, getCate } from "../Redux/category/actions.js";
import { getCateSelector } from "../Redux/category/selectors.js";


const CategoryList = () => {
    const { confirm } = Modal;
    const dispatch = useDispatch();
    const cateData = useSelector(getCateSelector);

    const { cates } = cateData;

    useEffect(() => {
        dispatch(getCate());
    }, [])

    const showDeleteConfirm = (id) => {
        confirm({
            title: 'Are you sure delete this task ' + id + '?',
            icon: <ExclamationCircleOutlined />,
            content: 'Some descriptions',
            okText: 'Yes',
            okType: 'danger',
            cancelText: 'No',
            onOk() {
                dispatch(destroyCate({id:id}));
            },
            onCancel() {
                message.error('This is an error message');
            },
        });
    }

    const columns = [
        {
            title: 'Stt',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Category Name',
            dataIndex: 'cateName',
            key: 'categoryName',
        },
        {
            title: 'Parent Category',
            dataIndex: 'parentName',
            key: 'parentCategory',
        },
        {
            title: "Action",
            render: (val) => {
                return (
                    <>
                        <Link className="btn mr-3" to={"/category/edit/" + val.id}><FontAwesomeIcon icon={faPen} color="#ffc107" /></Link>
                        <Button className="btn mr-1" onClick={() => showDeleteConfirm(val.id)}><FontAwesomeIcon icon={faTrashCan} color="#dc3545" /></Button>
                    </>
                )
            }
        }
    ];

    return (
        <div >
            <div>
                <BreadcrumbCommon header={'Category'} title={'List'} />
            </div>
            <div className=" d-flex justify-content-end ">
                <Link to={"/category/Create"}>
                    <Button className="btn-success">
                        Add new category
                    </Button>
                </Link>
            </div>
            <Table rowKey={'id'} className="pt-3" dataSource={cates} columns={columns} />
        </div>
    );
}

export default CategoryList;