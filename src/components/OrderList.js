
import React, { useState } from 'react';
import { Table, Input, InputNumber, Popconfirm, Form, Typography,Space } from 'antd';
import {getOrder} from "../service/orderService";

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',

    },
    {
        title: 'Total Price',
        dataIndex: 'totalPrice',
        key: 'totalPrice',
    },
    {
        title: 'Address',
        dataIndex: 'addr',
        key: 'addr',
    },
    {
        title: 'State',
        dataIndex: 'state',
        key:'state',
    },
    {
        title: 'Time',
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
        console.log(user_id);
        getOrder(user_id, callback);

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