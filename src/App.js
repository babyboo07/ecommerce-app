import './App.css';
import 'antd/dist/antd.css';
import SideBar from './layout/SideBar';
import { Layout } from 'antd';
import HeaderLayout from './layout/Header';
import CategoryList from './category/CategoryList';
import "./css/Header.css";
import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom';
import CategoryCreate from './category/CategoryCreate';
import CategoryEdit from './category/CategoryEdit';
import ProductList from './Product/ProductList';
import ProductCreate from './Product/ProductCreate';
import { useState } from 'react';
import ProductEdit from './Product/ProductEdit';
import ProductDetail from './Product/ProductDetail';
import OrderList from './Order/OrderList';
import AccountList from './Account/AccountList';
import AccountEdit from './Account/AccountEdit';
import AccountAdd from './Account/AccountAdd';
import OrderDetail from './Order/OrderDetail';
import OrderCancel from './Order/OrderCancel';
import ChangePassword from './Account/ChangePassword';
import Information from './Account/Information';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import Login from './Account/Login';
import { getAuthSelector } from './Redux/auth/selectors';
import { useSelector } from 'react-redux';
import Signup from './Account/Signup';
import Dashboard from './Account/Dashboard';
import boot from './Redux/boot';


const { Content, Footer } = Layout;

function App() {
  const [isCollapse, setIsCollapse] = useState(false);
  const auth = useSelector(getAuthSelector);

  return (
    <BrowserRouter>
      {auth.isAuth ?
        <Layout>
          <SideBar isCollapse={isCollapse} ></SideBar>
          <Layout>
            <HeaderLayout isCollapse={isCollapse} setIsCollapse={setIsCollapse} />
            <Content style={{ margin: "24px 16px 0" }}>
              <div
                className="site-layout-background"
                style={{ padding: 24, minHeight: 360 }}
              >
                <Routes>
                  <Route path="/login" element={<Navigate to={"/"} />} />
                  <Route path='/' element={<Dashboard />} />
                  <Route path='/category/List' element={<CategoryList />} />
                  <Route path='/category/Create' element={<CategoryCreate />} />
                  <Route path='/category/Edit/:id' element={<CategoryEdit />} />
                  <Route path='/product/List' element={<ProductList />} />
                  <Route path='/product/Create' element={<ProductCreate />} />
                  <Route path='/product/edit/:id' element={<ProductEdit />} />
                  <Route path='/product/detail/:id' element={<ProductDetail />} />
                  <Route path='/order/list' element={<OrderList />} />
                  <Route path='/order/detail/:id' element={<OrderDetail />} />
                  <Route path='/order/cancel/:id' element={<OrderCancel />} />
                  <Route path='/account/list' element={<AccountList />} />
                  <Route path='/account/edit/:id' element={<AccountEdit />} />
                  <Route path='/account/add' element={<AccountAdd />} />
                  <Route path='/changepass' element={<ChangePassword />} />
                  <Route path='/information' element={<Information />} />
                </Routes>
              </div>
            </Content>
            <Footer style={{ textAlign: "center" }}>
              Ecommerce ©2022 Created by Babyboo with <FontAwesomeIcon icon={faHeart} color={"red"} />
            </Footer>
          </Layout>
        </Layout> :

        <Routes>
          <Route path='*' element={<Navigate to="/login" />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
      }
    </BrowserRouter>
  );
}

boot()
  .then(() => App())
  .catch(error => console.error(error));

export default App;
