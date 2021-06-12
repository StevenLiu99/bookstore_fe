import React from 'react';
import {Layout} from 'antd'
import {HeaderDemo} from "../components/headerDemo";
import {withRouter} from "react-router-dom";
import {SiderDemo} from "../components/siderDemo";
import {OrderList} from "../components/OrderList";
import "../css/orderList.css"

const { Header, Content, Footer } = Layout;

export class OrderListPage extends React.Component{

    constructor(props) {
        super(props);
    }

    render(){
        return(


            <Layout>
                <HeaderDemo/>
                <Layout style={{ minHeight: '100vh' }}>
                    <SiderDemo selected={["4"]}/>
                    <Content style={{ padding: '0 16px' }}>
                        <div className="home-content">
                            <div className="orderList">
                                <OrderList />
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

export default withRouter(OrderListPage);