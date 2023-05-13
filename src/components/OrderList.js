
import React, { useState } from 'react';
import {Table, Input, InputNumber, Popconfirm, Form, Typography, Space, List} from 'antd';
import {getAllOrders, getOrder} from "../service/orderService";

const columns = [
    {
        title: '订单编号',
        dataIndex: 'orderID',
        key: 'orderID',
    },
    {
        title: '书籍名称',
        dataIndex: 'bookTitles',
        key: 'bookTitles',
        render:(record)=>
            <Space>{record}</Space>

    },
    {
        title: '用户名',
        dataIndex: 'username',
        key: 'username',

    },
    {
        title: '总价',
        dataIndex: 'totalPrice',
        key: 'totalPrice',
    },

    {
        title: '时间',
        key: 'time',
        dataIndex: 'time',

    },
];


export class OrderList extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            datasource: null,
        };
    }

    componentDidMount() {

        const callback =  (data) => {
            this.setState({datasource:data});
        };
        let user_id = parseInt(localStorage.getItem("userId"));
        let user_type = parseInt(localStorage.getItem("userType"));
        console.log(user_id);
        console.log(user_type);
        if (user_type === 0){
            getAllOrders({},callback);
        }
        else {getOrder(user_id, callback);}


    }


    render() {
        console.log(this.state.datasource);
        return (
            <div >

                <Table columns={columns} dataSource={this.state.datasource} />

            </div>


        );
    }


}