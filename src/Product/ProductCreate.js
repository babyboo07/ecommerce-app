import { Button, Form, Input, Select } from "antd";
import BreadcrumbCommon from "../Common/BreadcrumbCommon";

const { Option } = Select;

const ProductCreate = () => {

    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const tailLayout = {
        wrapperCol: { offset: 14, span: 16 },
      };

    return (
        <div>
            <div>
                <BreadcrumbCommon header={'Product'} title={'Add'}/>
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