
import React, { useState } from 'react';
import { Table, Button} from 'antd';


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

    onSelectChange = selectedRowKeys => {
        console.log('selectedRowKeys changed: ', selectedRowKeys);
        this.setState({ selectedRowKeys });
    };

    render() {
        const { loading, selectedRowKeys } = this.state;
        const rowSelection = {
            selectedRowKeys,
            onChange: this.onSelectChange,
        };
        const hasSelected = selectedRowKeys.length > 0;
        return (
            <div className="myCart">
                <div style={{ marginBottom: 16 }}>
                    <Button type="primary" onClick={this.start} disabled={!hasSelected} loading={loading}>
                        刷新
                    </Button>
                    <span style={{ marginLeft: 8 }}>
            {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
          </span>
                    <Button type="primary" onClick={this.start} disabled={!hasSelected} loading={loading}>
                        确定购买
                    </Button>
                </div>
                <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
            </div>
        );
    }
}
