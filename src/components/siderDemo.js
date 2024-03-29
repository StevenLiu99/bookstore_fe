import React from 'react';

import { Layout, Menu} from 'antd';
import {
    HomeOutlined,
    ReadOutlined,
    ShoppingCartOutlined,
    UserOutlined,
    CarryOutOutlined,

} from '@ant-design/icons';
import '../css/sider.css'
import {Link} from "react-router-dom";
import {LoginForm} from "./LoginForm";
import {RegisterForm} from "./RegisterForm";

const { Sider } = Layout;
const { SubMenu } = Menu;


export class SiderDemo extends React.Component {
    state = {
        collapsed: false,
    };



    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({ collapsed });
    };

    render() {
        const { collapsed } = this.state;
        const {selected} = this.props;
        let user_type = parseInt(localStorage.getItem("userType"));

        return (

                <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
                    {/*<div className="logo" >*/}
                    {/*    <h1>Book Store</h1>*/}
                    {/*</div>*/}
                    <Menu theme="dark" defaultSelectedKeys={selected} mode="inline" className="menu">

                        <Menu.Item key="1" icon={<HomeOutlined />}>
                            <Link to="/">
                            首页
                            </Link>
                        </Menu.Item>


                        <Menu.Item key="2" icon={<ReadOutlined />}>
                            <Link to="/bookList">
                                {user_type === 0 ? "书籍管理":"书籍浏览"}
                            </Link>
                        </Menu.Item>

                        <Menu.Item key="3" icon={<ShoppingCartOutlined />}>
                            <Link to="/cart">
                            购物车
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="4" icon={<CarryOutOutlined />}>
                            <Link to="/orderList">
                            订单管理
                            </Link>
                        </Menu.Item>
                        {user_type === 0 ?
                            <Menu.Item key="5" icon={<UserOutlined />}>
                            <Link to="/userList">
                                用户管理
                            </Link>
                            </Menu.Item>
                            :<div></div>}

                        {/*<SubMenu key="sub1" icon={<UserOutlined />} title="User">*/}
                        {/*    <Menu.Item key="3">Tom</Menu.Item>*/}
                        {/*    <Menu.Item key="4">Bill</Menu.Item>*/}
                        {/*    <Menu.Item key="5">Alex</Menu.Item>*/}
                        {/*</SubMenu>*/}
                        {/*<SubMenu key="sub2" icon={<TeamOutlined />} title="Team">*/}
                        {/*    <Menu.Item key="6">Team 1</Menu.Item>*/}
                        {/*    <Menu.Item key="8">Team 2</Menu.Item>*/}
                        {/*</SubMenu>*/}
                        {/*<Menu.Item key="9" icon={<FileOutlined />}>*/}
                        {/*    Files*/}
                        {/*</Menu.Item>*/}
                    </Menu>
                </Sider>
            //     <Layout className="site-layout">
            //         <Header className="site-layout-background" style={{ padding: 0 }} />
            //         <Content style={{ margin: '0 16px' }}>
            //
            //             {/*<div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>*/}
            //             {/*    Bill is a cat.*/}
            //             {/*</div>*/}
            //         </Content>
            //         <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            //     </Layout>
            // </Layout>
        );
    }
}