import React, { useState } from 'react';
import { Table, Button,Typography} from 'antd';
import { Descriptions } from 'antd';
import { Row, Col } from 'antd';
import {addIntoCart, getCart} from "../service/cartService";
import {addOrder} from "../service/orderService";
const { Text } = Typography;
const columns = [
    {
        title: '商品信息',
        dataIndex: 'bookTitle',
    },
    {
        title: '单价',
        dataIndex: 'price',
    },
    {
        title: '数量',
        dataIndex: 'number',
    },
    {
        title: '总价',
        dataIndex: 'totalPrice',
    },

];

// let data = [
//     {
//         key:1,
//         info:"Book 1",
//         price:32,
//         number:1,
//         total:32,
//     },
//     {
//         key:2,
//         info:"Book 2",
//         price:32,
//         number:1,
//         total:32,
//     },
//     {
//         key:3,
//         info:"Book 3",
//         price:32,
//         number:1,
//         total:32,
//     },
// ]

export class Orders extends React.Component{



    constructor(props) {
        super(props);
        let username = localStorage.getItem("username");

        let array = this.props.data;
        let sumprice = array.reduce(function (total, currentValue, currentIndex, arr) {
            return total + currentValue.totalPrice;
        }, 0);
        console.log('for reduce sumprice',sumprice);


        this.state={
            totalMoney:sumprice,
            username:username,
        }
    }

    onAddOrder = () => {
       // let user = localStorage.getItem("user");
        let user_id = parseInt(localStorage.getItem("userId"));
        let username = localStorage.getItem("username")
        let time = new Date();
        let orderId = '';
        for (var i = 0; i < 6; i++) //6位随机数，用以加在时间戳后面。
        {
            orderId += Math.floor(Math.random() * 10);
        }
        orderId = time.getTime() + orderId;
        let changetime=time.getFullYear() + '-' + (time.getMonth() + 1) + '-' + time.getDate() + ' ' + time.getHours() + ':' + time.getMinutes() + ':' + time.getSeconds();
        console.log(orderId);
        console.log(user_id);
        console.log(changetime);
        // const data = {books:this.props.data,user_id: user_id ,orderId:orderId, username:username,totalPrice:this.state.totalMoney,state:0,time:changetime};
        console.log(this.state.totalMoney);
        addOrder(this.props.data,user_id,orderId,username,this.state.totalMoney,0,changetime);
    };
    // componentDidMount() {
    //
    //
    //
    //     const callback =  (data) => {
    //         this.setState({items:data});
    //     };
    //     let user_id = parseInt(localStorage.getItem("userId"));
    //
    // }


render() {
    return (
        <div>
        <div>
        <Table
            columns={columns}
            dataSource={this.props.data}
            pagination={false}
            bordered
            summary={pageData => {
                let totalNumber = 0;
                let money =  0;

                pageData.forEach(({ number, totalPrice }) => {
                    totalNumber += number;
                    money += totalPrice;
                });

                return (
                    <>
                        <Table.Summary.Row>
                            <Table.Summary.Cell>总计</Table.Summary.Cell>
                            <Table.Summary.Cell></Table.Summary.Cell>
                            <Table.Summary.Cell>
                                <Text type="danger">{totalNumber}</Text>
                            </Table.Summary.Cell>
                            <Table.Summary.Cell>
                                <Text type="danger">{money.toFixed(2)}</Text>
                            </Table.Summary.Cell>
                        </Table.Summary.Row>

                    </>
                );
            }}
        />
        </div>
    <div className="orderInfo">
        <Descriptions
            title="订单信息"
            bordered
        >

            <Descriptions.Item label="用户">{this.state.username}</Descriptions.Item>
            <Descriptions.Item label="收货地址" span={2}>上海交通大学</Descriptions.Item>
            <Descriptions.Item label="付款方式" >支付宝</Descriptions.Item>
            <Descriptions.Item label="金额">{this.state.totalMoney.toFixed(2)}</Descriptions.Item>
            <Descriptions.Item label="配送方式">普通快递</Descriptions.Item>
            <Descriptions.Item label="备注">
                12345
            </Descriptions.Item>
        </Descriptions>
    </div>
            <div className="confirm">
                <Button onClick={this.onAddOrder} type="primary" size="large">下订单</Button>

            </div>


        </div>



    );
}
}
