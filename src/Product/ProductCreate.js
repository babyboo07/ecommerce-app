import { Button, Form, Input, Select, Upload } from "antd";
import { useState } from "react";
import BreadcrumbCommon from "../Common/BreadcrumbCommon";
import { PlusOutlined } from '@ant-design/icons';

const { Option } = Select;

const normFile = (e) => {
    if (Array.isArray(e)) {
        return e;
    }

    return e && e.fileList;
};

const ProductCreate = () => {

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const tailLayout = {
        wrapperCol: { offset: 14, span: 16 },
    };

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
                <BreadcrumbCommon header={'Product'} title={'Add'} />
            </div>
            <div className="pt-4">
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
                        label="Product Name"
                        name="productName"
                        rules={[{
                            required: true, message: "Please input your Product Name!"
                        }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item name="categoryId" label="Category" rules={[{ required: true, message: 'Plesse select your Category' }]}>
                        <Select
                            placeholder="Select Category"
                            allowClear
                        >
                            <Option value="male">male</Option>
                            <Option value="female">female</Option>
                            <Option value="other">other</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item
                        label="Description"
                        name="qty"
                        rules={[{
                            required: true,
                            message: 'Please input description!'
                        }]}
                    >
                        <Input.TextArea />
                    </Form.Item>
                    <Form.Item
                        label="Price"
                        name="price"
                        rules={[{
                            required: true,
                            message: 'Price is required'
                        }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Material"
                        name="material"
                        rules={[{
                            required: true,
                            message: 'Material is required!'
                        }]}
                    >
                        <Input />
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

export default ProductCreate;