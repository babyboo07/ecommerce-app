import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import BreadcrumbCommon from "../Common/BreadcrumbCommon";
import { Button, Form, Input } from "antd";

const ChangePassword = () => {

    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    }
    const tailLayout = {
        wrapperCol: { offset: 14, span: 16 },
    };

    return (
        <div>
            <div>
                <BreadcrumbCommon header={<FontAwesomeIcon icon={faHouse} />} title={"Change password"} />
            </div>
            <div className="pt-3">
                <Form
                    name="basic"
                    labelCol={{ span: 6 }}
                    wrapperCol={{ span: 10 }}
                    // initialValues={}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Currelt Password"
                        name="password"
                        rules={[{
                            required: true, message: "Password is required!!"
                        }]}
                    >
                        <Input.Password />
                    </Form.Item>
                    <Form.Item
                        label="New password"
                        rules={[{
                            required: true, message: "Password is required!!"
                        }]}
                    >
                        <Input.Password />
                    </Form.Item>
                    <Form.Item
                        label="Confrirm password"
                        rules={[{
                            required: true, message: "Password is required!!"
                        }]}
                    >
                        <Input.Password />
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

export default ChangePassword;