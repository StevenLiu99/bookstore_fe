import React from 'react';
import { Descriptions, Button } from 'antd';
import {

    ShoppingCartOutlined,
    PlusSquareOutlined ,
    PayCircleOutlined
} from '@ant-design/icons';
import {addIntoCart} from "../service/cartService";




export class BookDetail extends React.Component{
    constructor(props) {
        super(props);
        // let user = localStorage.getItem("user");
        // let user_id = localStorage.getItem("userId")
        // console.log(user);
        // console.log(user_id);
        //
    }

    onAdd = () => {
        let user = localStorage.getItem("user");
        let user_id = parseInt(localStorage.getItem("userId"));
        console.log(user_id);
        let book_id = this.props.info.id;
        console.log('Success:', {user_id,book_id});
        addIntoCart(user_id,book_id);
    };


    render() {

        const {info} = this.props;

        if(info == null){
            return null;
        }

        return (
            <div className={"content"}>
                <div className={"book-detail"}>
                    <div className={"book-image"}><img alt="image" src={info.image} style={{width:"350px", height:"350px"}}/></div>
                    <div className={"descriptions"}>
                        <Descriptions>
                            <Descriptions.Item className={"title"} span={3}>{info.name}</Descriptions.Item>
                            <Descriptions.Item label={"作者"} span={3}>{info.author}</Descriptions.Item>
                            <Descriptions.Item label={"分类"} span={3}>{info.type}</Descriptions.Item>
                            <Descriptions.Item label={"定价"} span={3}>{<span className={"price"}>{'¥' + info.price}</span>}</Descriptions.Item>
                            <Descriptions.Item label={"状态 "} span={3}>{info.inventory !== 0? <span>有货 <span className={"inventory"}>库存{info.inventory}件</span></span> : <span className={"status"}>无货</span>}</Descriptions.Item>
                            <Descriptions.Item label={"作品简介"} span={3}>{info.description}</Descriptions.Item>
                        </Descriptions>
                    </div>
                </div>
                <div className={"button-groups"}>
                    <Button onClick={this.onAdd} size={"large"}>
                        <PlusSquareOutlined />
                        加入购物车
                    </Button>

                    <Button type="primary" size={"large"} style={{marginLeft:"15%"}}>
                        <PayCircleOutlined />
                        立即购买
                    </Button>
                </div>
            </div>


        )

    }

}