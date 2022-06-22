import { Button, DatePicker, Form, Input, Select, Upload } from "antd";
import BreadcrumbCommon from "../Common/BreadcrumbCommon";
import { PlusOutlined } from '@ant-design/icons';
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getUserSelector } from "../Redux/admin/selectors";
import { useDispatch, useSelector } from "react-redux";
import { editUser, showUser, showUserFailure } from "../Redux/admin/actions";
import moment from "moment";
import siteConfig from "../siteConfig";

const normFile = (e) => {
    if (Array.isArray(e)) {
        return e;
    }

    return e && e.fileList;
};

const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};

const tailLayout = {
    wrapperCol: { offset: 14, span: 16 },
};

const { Option } = Select;

const AccountEdit = () => {
    const [img, setImg] = useState([]);
    const dispatch = useDispatch();
    const userSelector = useSelector(getUserSelector);
    const { detailUser } = userSelector;
    const navigation = useNavigate();
    const { id } = useParams();

    const beforeUpload = (file) => {
        const isImg = file.type.includes('image');

        if (isImg) {
            var reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = function () {
                setImg(reader.result)
            };
        } else {
            setImg(null)
        }

        return false;
    }

    const onFinish = (values) => {
        values.image = img
        values.id = id;
        dispatch(editUser(values, navigation));
    };

    const uploadButton = (
        <div>
            <PlusOutlined />
            <div style={{ marginTop: 8 }}>Upload</div>
        </div>
    );

    useEffect(() => {
        dispatch(showUser({ id: id }))
        return () => {
            dispatch(showUserFailure())
        }
    }, [])

    useEffect(() => {
        if (detailUser) {
            setImg(siteConfig.apiRoot + detailUser.imgPath);
        }
    }, [detailUser])

    let userDetail = detailUser ? { ...detailUser } : null;

    if (userDetail) {
        userDetail.dob = moment(userDetail.dob);
    }

    return (
        <div>
            <div>
                <BreadcrumbCommon header={'Account'} title={'Edit'} />
            </div>
            <div className="pt-3">
                {userDetail ?
                    <Form
                        name="basic"
                        labelCol={{ span: 6 }}
                        wrapperCol={{ span: 10 }}
                        initialValues={userDetail}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        <Form.Item
                            label="FullName"
                            name="fullName"
                            rules={[{
                                required: true, message: "Input something bro!!"
                            }]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[{
                                required: true, message: "Input Input something bro!!"
                            }]}
                        >
                            <Input.Password />
                        </Form.Item>
                        <Form.Item
                            label="Phone Number"
                            name="phone"
                            rules={[
                                {
                                    required: true, message: "Input Input something bro!!"
                                },
                                {
                                    pattern: new RegExp(/(0[3|5|7|8|9])+([0-9]{8})\b/),
                                    message: 'This is not phone number format'
                                }
                            ]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="Email"
                            name="email"
                            rules={[
                                {
                                    required: true, message: "Input Input something bro!!"
                                },
                                {
                                    pattern: new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),
                                    message: 'This is not email format'
                                }
                            ]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="Address"
                            name="address"
                            rules={[{
                                required: true, message: "Input Input something bro!!"
                            }]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="DOB"
                            name="dob"
                            rules={[{
                                required: true, message: "Input Input something bro!!"
                            }]}
                        >
                            <DatePicker />
                        </Form.Item>
                        <Form.Item
                            label="Gender"
                            name="gender"
                            rules={[{
                                required: true, message: "Input Input something bro!!"
                            }]}
                        >
                            <Select>
                                <Option value={1}>Male</Option>
                                <Option value={0}>Female</Option>
                                <Option value={2}>Other</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item
                            label="Role"
                            name="roleId"
                            rules={[{
                                required: true, message: "Input Input something bro!!"
                            }]}
                        >
                            <Select>
                                <Option value={1}>Admin</Option>
                                <Option value={2}>Employ</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item label="Image"
                            name="image"
                            getValueFromEvent={normFile}
                            valuePropName="fileList"
                        >
                            <Upload accept="image/*"
                                beforeUpload={beforeUpload}
                                listType="picture-card"
                                className="avatar-uploader"
                                showUploadList={false}
                            >
                                {img ? <img src={img} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
                            </Upload>
                        </Form.Item>
                        <Form.Item {...tailLayout}>
                            <Button className="btn-success" htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item>
                    </Form> : null
                }
            </div>
        </div>
    );
}

export default AccountEdit;