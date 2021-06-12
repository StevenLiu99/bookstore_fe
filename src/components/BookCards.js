import React from 'react';
import {List} from 'antd'
import {Book} from './Book'
import {getBooks} from "../service/bookService";

// let books = [
//     {
//         id: 1,isbn:1,name:"Java核心技术卷II",type:"编程",author:"凯S.霍斯特曼",price:95.20,description:"本书是Java领域有影响力和价值的著作之一，由拥有20多年教学与研究经验的Java技术专家撰写（获Jolt大奖），与《Java编程思想》齐名，10余年全球畅销不衰，广受好评。第10版根据JavaSE8全面更新，同时修正了第9版中的不足，系统全面讲解了Java语言的核心概念、语法、重要特性和开发方法，包含大量案例，实践性强。",inventory:200,image:"http://img3m9.ddimg.cn/12/36/1546133799-1_w_1.jpg",
//     },
//     {
//         id: 2,isbn:2,name:"深入理解计算机系统",type:"编程",author:"兰德尔·E·布莱恩特",price:136.90,description:"程序员必读经典著作！理解计算机系统*书目，10万程序员共同选择。第二版销售突破100000册，第三版重磅上市！",inventory:200,image:"http://img3m7.ddimg.cn/48/0/24106647-1_w_6.jpg",
//     },
//     {
//         id: 3,isbn:3,name:"小王子",type:"儿童文学",author:"圣-埃克苏佩里",price:8.89,description:"本书是Java领域有影响力和价值的著作之一，由拥有20多年教学与研究经验的Java技术专家撰写（获Jolt大奖），与《Java编程思想》齐名，10余年全球畅销不衰，广受好评。第10版根据JavaSE8全面更新，同时修正了第9版中的不足，系统全面讲解了Java语言的核心概念、语法、重要特性和开发方法，包含大量案例，实践性强。",inventory:200,image:"http://img3m9.ddimg.cn/75/6/25067469-1_u_2.jpg",
//     },
//     {
//         id: 4,isbn:4,name:"魔兽世界编年史套装(全三卷)",type:"魔幻小说",author:"克里斯˙梅森",price:449.20,description:"本书是Java领域有影响力和价值的著作之一，由拥有20多年教学与研究经验的Java技术专家撰写（获Jolt大奖），与《Java编程思想》齐名，10余年全球畅销不衰，广受好评。第10版根据JavaSE8全面更新，同时修正了第9版中的不足，系统全面讲解了Java语言的核心概念、语法、重要特性和开发方法，包含大量案例，实践性强。",inventory:200,image:"http://img3m7.ddimg.cn/43/9/25352557-1_w_3.jpg",
//     },
// ];

export class BookCards extends React.Component{
    constructor(props) {
        super(props);
        this.state = {books:[]};
    }

    componentDidMount() {

        const callback =  (data) => {
            this.setState({books:data});
        };

        getBooks({"search":null}, callback);

    }


    render() {
        return (
            <List
                grid={{gutter: 10, column: 4}}
                dataSource={this.state.books}
                pagination={{
                    onChange: page => {
                        console.log(page);
                    },
                    pageSize: 16,
                }}

                renderItem={item => (
                    <List.Item>
                        <Book info={item} />
                    </List.Item>
                )}
            />
        );
    }

}