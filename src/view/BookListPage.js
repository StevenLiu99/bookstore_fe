import React from 'react';
import {Layout} from 'antd'
import {HeaderDemo} from "../components/headerDemo";
import {withRouter} from "react-router-dom";
import {SiderDemo} from "../components/siderDemo";
import {BookList} from "../components/BookList";
import "../css/bookList.css"

const { Header, Content, Footer } = Layout;

let datasource = [
    {
        key:"1",
        image:"http://img3m6.ddimg.cn/96/25/21000966-1_u_12.jpg",
        name:"A Simple Book",
        author:"Jack",
        isbn:"123",
        type:"教育",
        price:55.0,
        inventory: 200,

    },
    {
        key:"2",
        image:"http://img3m7.ddimg.cn/48/0/24106647-1_w_6.jpg",
        name:"A Complex Book",
        author:"Tom",
        isbn:"456",
        type:"科技",
        price:98.5,
        inventory: 20,

    },
    {
        key:"3",
        image:"http://img3m9.ddimg.cn/12/36/1546133799-1_w_1.jpg",
        name:"Java核心技术卷II",
        author:"凯S.霍斯特曼",
        isbn:"234",
        type:"编程",
        price:95.2,
        inventory: 200,

    },
]


export class BookListPage extends React.Component{

    constructor(props) {
        super(props);


    }



    render(){
        return(


            <Layout>
                <HeaderDemo/>
                <Layout style={{ minHeight: '100vh' }}>
                    <SiderDemo selected={["2"]}/>
                    <Content style={{ padding: '0 16px' }}>
                        <div className="home-content">
                            <div className="bookList">
                            <BookList initialData={datasource}/>
                            </div>
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

export default withRouter(BookListPage);