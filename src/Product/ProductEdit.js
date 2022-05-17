import { Button, Form, Input, Select, Upload } from "antd";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BreadcrumbCommon from "../Common/BreadcrumbCommon";
import productData from "../Mock/productData";
import { PlusOutlined } from '@ant-design/icons';

const { Option } = Select;

const normFile = (e) => {
    if (Array.isArray(e)) {
        return e;
    }

    return e && e.fileList;
};

const ProductEdit = () => {
    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const tailLayout = {
        wrapperCol: { offset: 14, span: 16 },
    };

    const uploadButton = (
        <div>
            <PlusOutlined />
            <div style={{ marginTop: 8 }}>Upload</div>
        </div>
    );

    const [img, setImg] = useState(null);

    const [product, setProduct] = useState(null);

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

    const { id } = useParams();

    useEffect(() => {
        setProduct(productData.filter(p => { return p.id === parseInt(id) })[0]);
    })

    return (
        <div>
            <div>
                <BreadcrumbCommon header={'Product'} title={'Edit'} />
            </div>
            <div className="pt-4">
                {product !== undefined && product && product.id !== undefined ?
                    <Form
                        name="basic"
                        labelCol={{ span: 6 }}
                        wrapperCol={{ span: 10 }}
                        initialValues={product}
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
                            name="description"
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
                            label="Quantity"
                            name="qty"
                            rules={[{
                                required: true,
                                message: 'Quantity is required'
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
                            valuePropName="image"
                        >
                            <Upload accept="image/*" beforeUpload={beforeUpload}
                                listType="picture-card"
                                className="avatar-uploader"
                                showUploadList={false}>
                                {product && product.image ? <img src={product.image} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
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

export default ProductEdit;