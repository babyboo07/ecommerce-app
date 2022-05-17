import { Button, Form, Input, Select, Upload } from "antd";
import BreadcrumbCommon from "../Common/BreadcrumbCommon";
import { PlusOutlined } from '@ant-design/icons';
import { useState } from "react";


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
    const [img, setImg] = useState(null);

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
        
        console.log('Success:', values);
    };

    const uploadButton = (
      <div>
        <PlusOutlined />
        <div style={{ marginTop: 8 }}>Upload</div>
      </div>
    );

    return (
        <div>
            <div>
                <BreadcrumbCommon header={'Account'} title={'Edit'} />
            </div>
            <div className="pt-3">
                <Form
                    name="basic"
                    labelCol={{ span: 6 }}
                    wrapperCol={{ span: 10 }}
                    initialValues={{ remember: true }}
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
                        label="UserName"
                        name="userName"
                        rules={[{
                            required: true, message: "Input somethings bro!!"
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
                        <Input.Password disabled={true}  />
                    </Form.Item>
                    <Form.Item
                        label="Phone Number"
                        name="phone"
                        rules={[{
                            required: true, message: "Input Input something bro!!"
                        }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[{
                            required: true, message: "Input Input something bro!!"
                        }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Address"
                        name="Address"
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
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Gender"
                        name="gender"
                        rules={[{
                            required: true, message: "Input Input something bro!!"
                        }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Role"
                        name="role"
                        rules={[{
                            required: true, message: "Input Input something bro!!"
                        }]}
                    >
                        <Select>
                            <Option value="jack">Jack</Option>
                            <Option value="lucy">Lucy</Option>
                            <Option value="disabled" disabled>
                                Disabled
                            </Option>
                            <Option value="Yiminghe">yiminghe</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item label="Image"
                        name="image"
                        rules={[{
                            required: true, message: "Input Input something bro!!"
                        }]}
                        getValueFromEvent={normFile}
                        valuePropName="fileList" 
                    >
                        <Upload accept="image/*" beforeUpload={beforeUpload}
                            listType="picture-card"
                            className="avatar-uploader"
                            showUploadList={false}>
                            {img ? <img src={img} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
                        </Upload>
                    </Form.Item>

                    <Form.Item {...tailLayout}>
                        <Button className="btn-success" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
}

export default AccountEdit;