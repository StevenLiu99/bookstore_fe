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
        name:"A Simple Book",
        author:"Jack",
        type:"教育",
        price:55.0,
        inventory: 200,

    },
    {
        key:"2",
        name:"A Complex Book",
        author:"Tom",
        type:"科技",
        price:98.5,
        inventory: 20,

    },
    {
        key:"3",
        name:"Java核心技术卷II",
        author:"凯S.霍斯特曼",
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