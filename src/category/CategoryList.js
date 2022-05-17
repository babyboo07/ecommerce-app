import { Button, Modal, Table } from "antd";
import { Link } from "react-router-dom";
import cateMockData from "../Mock/testData.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faPen } from '@fortawesome/free-solid-svg-icons'
import { ExclamationCircleOutlined } from '@ant-design/icons';
import BreadcrumbCommon from "../Common/BreadcrumbCommon.js";


const CategoryList = (props) => {
    const { confirm } = Modal;

    const showDeleteConfirm = () => {
        confirm({
            title: 'Are you sure delete this task?',
            icon: <ExclamationCircleOutlined />,
            content: 'Some descriptions',
            okText: 'Yes',
            okType: 'danger',
            cancelText: 'No',
            onOk() {
                console.log('OK');
            },
            onCancel() {
                console.log('Cancel');
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
            dataIndex: 'categoryName',
            key: 'categoryName',
        },
        {
            title: 'Parent Category',
            dataIndex: 'parentCategory',
            key: 'parentCategory',
        },
        {
            title: "Action",
            render: (val) => {
                return (
                    <>
                        <Link className="btn mr-3" to={"/category/edit/" + val.id}><FontAwesomeIcon icon={faPen} color="#ffc107" /></Link>
                        <Button className="btn mr-1" onClick={showDeleteConfirm}><FontAwesomeIcon icon={faTrashCan} color="#dc3545" /></Button>
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
            <Table rowKey={'id'} className="pt-3" dataSource={cateMockData} columns={columns} />
        </div>
    );
}

export default CategoryList;