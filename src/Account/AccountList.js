import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Modal, Table } from "antd";
import { Link, useParams } from "react-router-dom";
import BreadcrumbCommon from "../Common/BreadcrumbCommon";
import { faTrashCan, faPen } from '@fortawesome/free-solid-svg-icons'
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { destroyUser, getUser } from "../Redux/admin/actions";
import { getUserSelector } from "../Redux/admin/selectors";
import siteConfig from "../siteConfig";

const AccountList = () => {
    const {id} = useParams()
    const dispatch = useDispatch();
    const userData = useSelector(getUserSelector);
    const { confirm } = Modal;
    const {users } = userData;

    useEffect(()=>{
        dispatch(getUser());
    }, [])

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
                dispatch(destroyUser({id:id}));
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
            title: 'FullName',
            dataIndex: 'fullName',
            key: 'id',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'id',
        },
        {
            title: 'Phone',
            dataIndex: 'phone',
            key: 'id',
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'id',
        },
        {
            title: 'DOB',
            dataIndex: 'dob',
            key: 'id',
            render: (val) => {
                return <span>{val.toLocaleString("en-US")}</span>
            }
        },
        {
            title: 'Role',
            dataIndex: 'roleName',
            key: 'id'
        },
        {
            title: 'Image',
            dataIndex: 'imgPath',
            key: 'id',
            render: (val) => (
                <img width={100} height={100} src={siteConfig.apiRoot + val} />
            )
        },
        {
            title: "Action",
            render: (val) => {
                return (
                    <>
                        <Link className="btn mr-3" to={"/account/edit/" + val.id}><FontAwesomeIcon icon={faPen} color="#ffc107" /></Link>
                        <Button className="btn mr-1" onClick={showDeleteConfirm}><FontAwesomeIcon icon={faTrashCan} color="#dc3545" /></Button>
                    </>
                )
            }
        }
    ]

    return (
        <div>
            <div>
                <BreadcrumbCommon header={"Account"} title={"List"} />
            </div>
            <div className=" d-flex justify-content-end ">
                <Link to={"/account/add"}>
                    <Button className="btn-success">
                        Add new Employ
                    </Button>
                </Link>
            </div>
            <div className="pt-4">
                <Table columns={col} rowKey={'id'} dataSource={users} />
            </div>
        </div>
    );
}

export default AccountList;