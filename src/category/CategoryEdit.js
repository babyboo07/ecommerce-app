import { Button, Form, Input, Select } from "antd";
import BreadcrumbCommon from "../Common/BreadcrumbCommon.js";
import cateMockData from "../Mock/testData.js";

const { Option } = Select;

const CategoryEdit = () => {

    

    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const tailLayout = {
        wrapperCol: { offset: 14, span: 16 },
    };

    let category = {...cateMockData}
    return (
        <div>
            <div>
                <BreadcrumbCommon header={'Category'} title={'Edit'}/>
            </div>
            <div className="pt-4">
                {category !== undefined && category && category.id !== undefined ?
                    < Form
                    name="basic"
                labelCol={{ span: 6 }}
                wrapperCol={{ span: 10 }}
                initialValues={category}
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
                <Form.Item name="parent" label="Parent" rules={[{ required: true, message: 'Plesse select your Parent' }]}>
                    <Select
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
            </Form> :null
        }
        </div>
        </div >
    );
}

export default CategoryEdit;