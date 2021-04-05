import React from 'react';
import {Layout} from 'antd'
import {HeaderDemo} from "../components/headerDemo";
import {withRouter} from "react-router-dom";
import {SiderDemo} from "../components/siderDemo";
import {Orders} from "../components/Orders";
import "../css/orders.css"


const { Header, Content, Footer } = Layout;

let datasource = [
    {
        key:"1",
        name:"A Simple Book",
        author:"Jack",
        type:"教育",
        price:55.0,
        inventory: 200,

    },
    {
        key:"2",
        name:"A Complex Book",
        author:"Tom",
        type:"科技",
        price:98.5,
        inventory: 20,

    },
    {
        key:"3",
        name:"Java核心技术卷II",
        author:"凯S.霍斯特曼",
        type:"编程",
        price:95.2,
        inventory: 200,

    },
]


export class OrderPage extends React.Component{

    constructor(props) {
        super(props);


    }



    render(){
        return(


            <Layout>
                <HeaderDemo/>
                <Layout style={{ minHeight: '100vh' }}>
                    <SiderDemo selected={["3"]}/>
                    <Content style={{ padding: '0 16px' }}>
                        <div className="home-content">
                            <div className="myOrders">
                                <Orders />
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

export default withRouter(OrderPage);