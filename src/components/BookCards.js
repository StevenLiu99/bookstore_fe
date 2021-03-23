import React from 'react';
import {List} from 'antd'
import {Book} from './Book'

const books = [
    {
        id: 1,isbn:1,name:"Java核心技术卷II",type:"编程",author:"凯S.霍斯特曼",price:95.20,description:"本书是Java领域有影响力和价值的著作之一，由拥有20多年教学与研究经验的Java技术专家撰写（获Jolt大奖），与《Java编程思想》齐名，10余年全球畅销不衰，广受好评。第10版根据JavaSE8全面更新，同时修正了第9版中的不足，系统全面讲解了Java语言的核心概念、语法、重要特性和开发方法，包含大量案例，实践性强。",inventory:200,image:"http://img3m9.ddimg.cn/12/36/1546133799-1_w_1.jpg",
    },
    {
        id: 2,isbn:2,name:"Java核心技术卷II",type:"编程",author:"凯S.霍斯特曼",price:95.20,description:"本书是Java领域有影响力和价值的著作之一，由拥有20多年教学与研究经验的Java技术专家撰写（获Jolt大奖），与《Java编程思想》齐名，10余年全球畅销不衰，广受好评。第10版根据JavaSE8全面更新，同时修正了第9版中的不足，系统全面讲解了Java语言的核心概念、语法、重要特性和开发方法，包含大量案例，实践性强。",inventory:200,image:"http://img3m9.ddimg.cn/12/36/1546133799-1_w_1.jpg",
    },
    {
        id: 3,isbn:3,name:"Java核心技术卷II",type:"编程",author:"凯S.霍斯特曼",price:95.20,description:"本书是Java领域有影响力和价值的著作之一，由拥有20多年教学与研究经验的Java技术专家撰写（获Jolt大奖），与《Java编程思想》齐名，10余年全球畅销不衰，广受好评。第10版根据JavaSE8全面更新，同时修正了第9版中的不足，系统全面讲解了Java语言的核心概念、语法、重要特性和开发方法，包含大量案例，实践性强。",inventory:200,image:"http://img3m9.ddimg.cn/12/36/1546133799-1_w_1.jpg",
    },
    {
        id: 4,isbn:4,name:"Java核心技术卷II",type:"编程",author:"凯S.霍斯特曼",price:95.20,description:"本书是Java领域有影响力和价值的著作之一，由拥有20多年教学与研究经验的Java技术专家撰写（获Jolt大奖），与《Java编程思想》齐名，10余年全球畅销不衰，广受好评。第10版根据JavaSE8全面更新，同时修正了第9版中的不足，系统全面讲解了Java语言的核心概念、语法、重要特性和开发方法，包含大量案例，实践性强。",inventory:200,image:"http://img3m9.ddimg.cn/12/36/1546133799-1_w_1.jpg",
    },
];

export class BookCards extends React.Component{



    render() {
        return (
            <List
                grid={{gutter: 10, column: 4}}
                dataSource={books}
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