import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import BreadcrumbCommon from "../Common/BreadcrumbCommon";
import { Button, Form, Input } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { editPass } from "../Redux/admin/actions";
import { logout } from "../Redux/auth/actions";

const ChangePassword = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onFinish = (values) => {
    values.id = id;
    dispatch(editPass(values, navigate, "/login" + id));
    dispatch(logout());
    localStorage.removeItem("token");
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
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
            name="password"
            label="Mật khẩu mới "
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
            hasFeedback
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="confirm"
            label="Nhập lại mật khẩu mới"
            dependencies={["password"]}
            hasFeedback
            rules={[
              {
                required: true,
                message: "Please confirm your password!",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }

                  return Promise.reject(
                    new Error("The two passwords that you entered do not match!")
                  );
                },
              }),
            ]}
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
};

export default ChangePassword;
