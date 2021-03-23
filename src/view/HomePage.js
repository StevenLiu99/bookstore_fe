import React from 'react';
import {Layout, Carousel} from 'antd'
import {SiderDemo} from "../components/siderDemo";
import {HeaderDemo} from "../components/headerDemo";
import {BookCarousel} from "../components/BookCarousel";
import "../css/Home.css"
import {BookCards} from "../components/BookCards";
import {withRouter} from "react-router-dom";

const { Header, Content, Footer } = Layout;

export class HomePage extends React.Component{

    constructor(props) {
        super(props);

    }
    render(){
        return(
            <Layout>
            <HeaderDemo/>
            <Layout style={{ minHeight: '100vh' }}>
                <SiderDemo selected={['1']} />
                <Content className="main_content" style={{ padding: '0 16px' }}>
                    <div className="home-content">
                        <BookCarousel />
                        <BookCards />
                        <div className={"foot-wrapper"}>
                        </div>
                    </div>
                </Content>
            </Layout>

            </Layout>
        );
    }
}

export default withRouter(HomePage);