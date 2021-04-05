
import React, { useState } from 'react';
import { Table, Button,Typography} from 'antd';
import "../css/cart.css"
import {Link} from "react-router-dom";
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

const data = [];
for (let i = 0; i < 46; i++) {
    data.push({
        key: i,
        info: `Book ${i}`,
        price: 32,
        number: 1,
        total: 32,
    });
}





export class Cart extends React.Component{


    state = {
        selectedRowKeys: [], // Check here to configure the default column
        loading: false,
        totalprice: 0,
    };

    start = () => {
        this.setState({ loading: true });
        // ajax request after empty completing
        setTimeout(() => {
            this.setState({
                selectedRowKeys: [],
                loading: false,
            });
        }, 1000);
    };

    onSelectChange = (selectedRowKeys) => {
        console.log('selectedRowKeys changed: ', selectedRowKeys);
        console.log(selectedRowKeys[0]);
        this.setState({ selectedRowKeys });
        this.state.totalprice = 0;
        for (var i=0;i<selectedRowKeys.length;i++)
        {
            this.state.totalprice += data[selectedRowKeys[i]].total;
        }


    };

    render() {
        const { loading, selectedRowKeys,totalprice } = this.state;
        const rowSelection = {
            selectedRowKeys,
            onChange: this.onSelectChange,
        };
        const hasSelected = selectedRowKeys.length > 0;


        return (
            <div className="myCart">
                <div style={{ marginBottom: 16 }}>
                    <Button type="primary" onClick={this.start} disabled={!hasSelected} loading={loading}>
                        删除
                    </Button>
                    <span style={{ marginLeft: 8 }}>
            {hasSelected ? `选中 ${selectedRowKeys.length} 件商品` : ''}
          </span>
                    <Link to="/orders">
                    <Button className="buyButton" type="primary" disabled={!hasSelected} loading={loading}>
                        确定购买
                    </Button>
                    </Link>
                    <span className="totalprice">
                        总计{this.state.totalprice}元
                    </span>
                </div>
                <Table
                    rowSelection={rowSelection} columns={columns} dataSource={data} />
            </div>
        );
    }
}
