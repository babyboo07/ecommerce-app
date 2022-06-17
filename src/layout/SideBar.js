import React from 'react';
import { Menu, Layout } from 'antd';
import {
    AreaChartOutlined,
    UnorderedListOutlined,
    ContainerOutlined,
} from '@ant-design/icons';
import { faCircleUser, faCartArrowDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon, } from '@fortawesome/react-fontawesome';
import logo from '../logo.svg';
import { NavLink, useLocation } from 'react-router-dom';

const { Sider } = Layout;
const SideBar = (props) => {
    const location = useLocation();
    let locationSplit = location.pathname.split("/");

    return (
        <Sider
            style={{
                width: 256
            }}
            collapsed={props.isCollapse}
            theme='light'
        >
            <div className="logo text-center" style={{ height: props.isCollapse ? 50 : 100 }}>
                <img src={logo} height={props.isCollapse ? 50 : 100} />
            </div>
            <Menu
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['/dashboard']}
                mode="inline"
                theme="light"
                id="sidebar"
                selectedKeys={[locationSplit.length > 1 ? locationSplit[1].toLocaleLowerCase() : '']}
            >
                <Menu.Item key="dashboard">
                    <NavLink to="/">
                        <AreaChartOutlined />
                        <span>Dashboard</span>
                    </NavLink>
                </Menu.Item>
                <Menu.Item key="category">
                    <NavLink to="/category/list">
                        <UnorderedListOutlined />
                        <span>Category</span>
                    </NavLink>
                </Menu.Item>
                <Menu.Item key="product">
                    <NavLink to="/product/list">
                        <ContainerOutlined />
                        <span>Product</span>
                    </NavLink>
                </Menu.Item>
                <Menu.Item key="order">
                    <NavLink to="/order/list">
                        <span className='anticon'><FontAwesomeIcon icon={faCartArrowDown}  /></span>
                        <span>Order</span>
                    </NavLink>
                </Menu.Item>
                <Menu.Item key="account">
                    <NavLink to="/account/list">
                        <span className='anticon'><FontAwesomeIcon icon={faCircleUser}  /></span>
                        <span>Account</span>
                    </NavLink>
                </Menu.Item>
            </Menu>
        </Sider>
    );
}
export default SideBar;