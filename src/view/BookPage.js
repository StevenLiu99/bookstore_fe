import React from 'react';
import {Layout} from 'antd'
import {HeaderDemo} from "../components/headerDemo";
import '../css/bookDetail.css'
import {withRouter} from "react-router-dom";

import {getBook} from "../service/bookService";
import {BookDetail} from "../components/bookDetail";
import {SiderDemo} from "../components/siderDemo";


const { Header, Content, Footer } = Layout;

// const data =
//     {
//         id: 1,isbn:1,name:"Java核心技术卷II",type:"编程",author:"凯S.霍斯特曼",price:95.20,description:"本书是Java领域有影响力和价值的著作之一，由拥有20多年教学与研究经验的Java技术专家撰写（获Jolt大奖），与《Java编程思想》齐名，10余年全球畅销不衰，广受好评。第10版根据JavaSE8全面更新，同时修正了第9版中的不足，系统全面讲解了Java语言的核心概念、语法、重要特性和开发方法，包含大量案例，实践性强。",inventory:200,image:"http://img3m9.ddimg.cn/12/36/1546133799-1_w_1.jpg",
//     }


export class BookPage extends React.Component{

    constructor(props) {
        super(props);

        this.state = {bookInfo:null};


    }

    componentDidMount(){
        let user = localStorage.getItem("user");
        this.setState({user:user});
        const query = this.props.location.search;
        const arr = query.split('&');
        const bookId = arr[0].substr(4);
        getBook(bookId, (data) => {this.setState({bookInfo: data})})

    }

    render(){
        return(


            <Layout>
                <HeaderDemo/>
                <Layout style={{ minHeight: '100vh' }}>
                    <SiderDemo />
                    <Content style={{ padding: '0 16px' }}>
                        <div className="home-content">
                            <BookDetail info={this.state.bookInfo} />
                            <div className={"foot-wrapper"}>
                            </div>
                        </div>
                    </Content>
                </Layout>

            </Layout>

            // <Layout className="layout">
            //
            //     <Header>
            //         <HeaderDemo />
            //     </Header>
            //     <Layout>
            //         <SideBar />
            //         <Content style={{ padding: '0 50px' }}>
            //             <div className="home-content">
            //                 <bookDetail.js info={this.state.bookInfo} />
            //
            //                 <div className={"foot-wrapper"}>
            //                 </div>
            //             </div>
            //         </Content>
            //     </Layout>
            // </Layout>
        );
    }
}

export default withRouter(BookPage);