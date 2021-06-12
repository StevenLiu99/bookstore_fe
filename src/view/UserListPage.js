import React from 'react';
import {Layout} from 'antd'
import {HeaderDemo} from "../components/headerDemo";
import {withRouter} from "react-router-dom";
import {SiderDemo} from "../components/siderDemo";
import {UserList} from "../components/UserList";
import "../css/userList.css"
const { Header, Content, Footer } = Layout;
export class UserListPage extends React.Component{
    constructor(props) {
        super(props);

    }

    render(){
        return(


            <Layout>
                <HeaderDemo/>
                <Layout style={{ minHeight: '100vh' }}>
                    <SiderDemo selected={["5"]}/>
                    <Content style={{ padding: '0 16px' }}>
                        <div className="home-content">
                            <div className="userList">
                                <UserList/>
                            </div>
                            <div className={"foot-wrapper"}>
                            </div>
                        </div>
                    </Content>
                </Layout>

            </Layout>

        );
    }
}

export default withRouter(UserListPage);