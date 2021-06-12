
import React, { useState } from 'react';
import { Table, Button,Typography} from 'antd';
import "../css/cart.css"
import {Link} from "react-router-dom";
import {getCart} from "../service/cartService";
import {getBooks} from "../service/bookService";
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

// const data = [];
// for (let i = 0; i < 46; i++) {
//     data.push({
//         key: i,
//         info: `Book ${i}`,
//         price: 32,
//         number: 1,
//         total: 32,
//     });
// }





export class Cart extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            items:[],
            selectedRowKeys: [], // Check here to configure the default column
            loading: false,
            totalprice: 0,
            selectedItems:[],};

    }

    componentDidMount() {

        const callback =  (data) => {
            this.setState({items:data});
        };
        let user_id = parseInt(localStorage.getItem("userId"));
        getCart(user_id,callback);

    }



    // state = {
    //     selectedRowKeys: [], // Check here to configure the default column
    //     loading: false,
    //     totalprice: 0,
    // };

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
        this.state.selectedItems=[];
        for (var i=0;i<selectedRowKeys.length;i++)
        {
            this.state.totalprice += this.state.items[selectedRowKeys[i]].totalPrice;
            this.state.selectedItems.push(this.state.items[selectedRowKeys[i]]);
        }


    };

    render() {
        const { loading, selectedRowKeys,totalprice } = this.state;
        const rowSelection = {
            selectedRowKeys,
            onChange: this.onSelectChange,
        };
        const hasSelected = selectedRowKeys.length > 0;
        console.log(this.state.items);

        return (
            <div className="myCart">
                <div style={{ marginBottom: 16 }}>
                    <Button type="primary" onClick={this.start} disabled={!hasSelected} loading={loading}>
                        删除
                    </Button>
                    <span style={{ marginLeft: 8 }}>
            {hasSelected ? `选中 ${selectedRowKeys.length} 件商品` : ''}
          </span>
                    <Link to={{
                        pathname: `/orders`,
                        state: this.state.selectedItems
                    }}>
                    <Button className="buyButton" type="primary" disabled={!hasSelected} loading={loading}>
                        确定购买
                    </Button>
                    </Link>
                    <span className="totalprice">
                        总计{this.state.totalprice.toFixed(2)}元
                    </span>
                </div>
                <Table
                    rowSelection={rowSelection} columns={columns} dataSource={this.state.items} />
            </div>
        );
    }
}
