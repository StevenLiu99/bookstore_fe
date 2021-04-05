import React, { useState } from 'react';
import { Table, Button,Typography} from 'antd';
import { Descriptions } from 'antd';
import { Row, Col } from 'antd';
const { Text } = Typography;
const columns = [
    {
        title: '商品信息',
        dataIndex: 'info',
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
        dataIndex: 'total',
    },

];

let data = [
    {
        key:1,
        info:"Book 1",
        price:32,
        number:1,
        total:32,
    },
    {
        key:2,
        info:"Book 2",
        price:32,
        number:1,
        total:32,
    },
    {
        key:3,
        info:"Book 3",
        price:32,
        number:1,
        total:32,
    },
]


export class Orders extends React.Component{

render() {
    return (
        <div>
        <div>
        <Table
            columns={columns}
            dataSource={data}
            pagination={false}
            bordered
            summary={pageData => {
                let totalNumber = 0;
                let totalPrice = 0;

                pageData.forEach(({ number, total }) => {
                    totalNumber += number;
                    totalPrice += total;
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
                                <Text type="danger">{totalPrice}</Text>
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

            <Descriptions.Item label="用户">用户名</Descriptions.Item>
            <Descriptions.Item label="收货地址" span={2}>上海交通大学</Descriptions.Item>
            <Descriptions.Item label="付款方式" >支付宝</Descriptions.Item>
            <Descriptions.Item label="金额">96.00元</Descriptions.Item>
            <Descriptions.Item label="配送方式">普通快递</Descriptions.Item>
            <Descriptions.Item label="备注">
                12345
            </Descriptions.Item>
        </Descriptions>
    </div>
            <div className="confirm">
                <Button type="primary" size="large">下订单</Button>

            </div>


        </div>



    );
}
}
