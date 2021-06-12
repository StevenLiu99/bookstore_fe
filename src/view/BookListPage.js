import React from 'react';
import {Layout} from 'antd'
import {HeaderDemo} from "../components/headerDemo";
import {withRouter} from "react-router-dom";
import {SiderDemo} from "../components/siderDemo";
import {BookList} from "../components/BookList";
import "../css/bookList.css"
import {getBooks} from "../service/bookService";

const { Header, Content, Footer } = Layout;

// let datasource = [
//     {
//         key:"1",
//         image:"http://img3m6.ddimg.cn/96/25/21000966-1_u_12.jpg",
//         name:"A Simple Book",
//         author:"Jack",
//         isbn:"123",
//         type:"教育",
//         price:55.0,
//         inventory: 200,
//
//     },
// ]


export class BookListPage extends React.Component{

    constructor(props) {
        super(props);
        // this.state = {books:[]};
    }

    // componentDidMount() {
    //
    //     const callback =  (data) => {
    //         this.setState({books:data});
    //     };
    //
    //     getBooks({"search":null}, callback);
    //     console.log(this.state.books);
    // }




    render(){
        return(


            <Layout>
                <HeaderDemo/>
                <Layout style={{ minHeight: '100vh' }}>
                    <SiderDemo selected={["2"]}/>
                    <Content style={{ padding: '0 16px' }}>
                        <div className="home-content">
                            <div className="bookList">
                            <BookList />
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