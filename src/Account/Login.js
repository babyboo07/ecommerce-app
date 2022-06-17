import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "@mui/material";
import { Button, Form, Input, Layout } from "antd"
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../Redux/auth/actions";

const Login = () => {
    const { Header, Footer, Content } = Layout;
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (data) => {
        dispatch(login(data));
    }

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }
    return (
        <Layout>
            <Header className="bg-white row" style={{ height: "auto" }}>
                <div className="d-flex align-items-center col">
                    <a href="/" className="mb-3" >
                        <img alt="logo" style={{ width: 60, height: 40 }} src="https://salt.tikicdn.com/ts/upload/1c/11/e6/d8211526b5bdc67aaaef2af9e8cf7dc8.png" />
                    </a>
                    <span className="divider"></span>
                    <span className="fs-3 text-primary ps-3">Đăng nhập</span>
                </div>
                <div className="col pt-2">
                    <Link className="float-end" style={{ textDecoration: "none" }} to={'#'} >Bạn cần giúp đỡ ?</Link>
                </div>
            </Header>
            <Content className='login-background'>
                <div className='row'
                    style={{
                        padding: '24px',
                    }}
                >
                    <div className='col d-flex align-items-center'>
                        <div className="w-100 text-center">
                            <img className="mb-3" style={{ width: 300 }} src="https://salt.tikicdn.com/ts/upload/ae/f5/15/2228f38cf84d1b8451bb49e2c4537081.png" />
                            <br />
                            <strong className="text-white">Nền tảng thương mại điện tử</strong>
                            <br />
                            <strong className="text-white">ngu dốt nhất Việt Nam</strong>
                        </div>
                    </div>
                    <div className="col">
                        <div className='bg-white form-login shadow p-3 mb-5 bg-body rounded'>
                            <Form className="p-3"
                                labelCol={{
                                    span: 6,
                                }}
                                wrapperCol={{
                                    span: 24,
                                }}
                                layout="horizontal"
                                onFinish={handleSubmit}
                                initialValues={{
                                    email,
                                    password
                                }}
                            >
                                <Form.Item>
                                    <h4 className="fw-normal">Đăng Nhập</h4>
                                </Form.Item>
                                <Form.Item
                                    name='email'
                                    className="w-100"
                                    rules={[{
                                        required: true,
                                        message: 'Điện thoại không được để trống'
                                    },
                                    {
                                        pattern: new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),
                                        message: 'Email không đúng với định dạng'
                                    }
                                    ]}
                                >
                                    <Input
                                        value={email}
                                        size="large"
                                        placeholder="Email@gmail.com"
                                        onChange={(e)=> setEmail(e.target.value)} />
                                </Form.Item>
                                <Form.Item
                                    name='password'
                                    rules={[{
                                        required: true,
                                        message: 'Mật khẩu không được để trống'
                                    },
                                    ]}
                                >
                                    <Input.Password
                                        value={password}
                                        size="large"
                                        placeholder="Mật khẩu"
                                        onChange={(e) => setPassword(e.target.value)} />
                                </Form.Item>
                                <Form.Item>
                                    <Button block type="primary" htmlType="submit" size="large" disabled={!validateForm()}>Đăng nhập</Button>
                                </Form.Item>
                            </Form>
                            <div className="text-center p-4">
                                <p className='social-heading'><span>Hoặc tiếp tục bằng</span></p>
                                <ul className="social__items">
                                    <li className="social__items mx-1">
                                        <img width={"58"} height={"58"} src="https://salt.tikicdn.com/ts/upload/3a/22/45/0f04dc6e4ed55fa62dcb305fd337db6c.png" alt="facebook" />
                                    </li>
                                    <li className="social__items mx-1">
                                        <img width={"58"} height={"58"} src="https://salt.tikicdn.com/ts/upload/1c/ac/e8/141c68302262747f5988df2aae7eb161.png" alt="google" />
                                    </li>
                                </ul>
                                <p className='note'>Bằng việc tiếp tục, bạn đã chấp nhận
                                    <a href="#" className="menu-item"> điều khoản sử dụng</a>
                                </p>
                                <p className='note'>Bạn mới biết đến Shopee ?
                                    <a href="/signup" className="menu-item"> Đăng Ký</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Content>
            <Footer style={{ textAlign: "center" }}>
                Ecommerce ©2022 Created by Babyboo with <FontAwesomeIcon icon={faHeart} color={"red"} />
            </Footer>
        </Layout>
    );
}

export default Login;