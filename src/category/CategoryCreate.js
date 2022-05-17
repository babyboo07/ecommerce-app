import { Button, Form, Input, Select } from "antd";
import { useState } from "react";
import BreadcrumbCommon from "../Common/BreadcrumbCommon.js";

const { Option } = Select;

const CategoryCreate = (props) => {
    const [level, setLevel] = useState();

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
                <BreadcrumbCommon header={'Category'} title={'Add'} />
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
                        label="Category Name"
                        name="categoryName"
                        rules={[{
                            required: true, message: "Please input your Category Name!"
                        }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item name="level" label="Level" rules={[{ required: true ,message:'Plesse select your Parent' }]}>
                        <Select
                            placeholder="Select a option and change input text above"
                            allowClear
                            onChange={(e) => setLevel(e)}
                        >
                            <Option value={1}>1</Option>
                            <Option value={2}>2</Option>
                            <Option value={3}>3</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item name="parent" label="Parent" rules={[{ required: true ,message:'Plesse select your Parent' }]}>
                        <Select
                            disabled={!level || level === 1? true: false}
                            placeholder="Select a option and change input text above"
                            allowClear
                            // value={cateMockData.parentCategory}
                        >
                            <Option value="male">male</Option>
                            <Option value="female">female</Option>
                            <Option value="other">other</Option>
                        </Select>
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

export default CategoryCreate;