import React from 'react';
import { Layout, Menu } from 'antd';
import "../css/header.css"
import {Link} from 'react-router-dom'

const { SubMenu } = Menu;
const { Header } = Layout;

export class HeaderDemo extends React.Component {

    render(){

        return(
            <Header className="header" style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
                <div className="logo" />

                <Menu theme="dark" mode="horizontal" >
                    <SubMenu key="SubMenu" title="UserName" className="userinfo">
                            <Menu.Item key="setting:1">个人信息</Menu.Item>

                            <Menu.Item key="setting:2"><Link to="/login">退出</Link></Menu.Item>



                    </SubMenu>
                </Menu>
            </Header>
        );
    }
}