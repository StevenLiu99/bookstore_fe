import React from 'react';
import {LoginForm} from '../components/LoginForm';
import {withRouter} from "react-router-dom";
import {RegisterForm} from "../components/RegisterForm";


class LoginView extends React.Component{
    constructor() {
        super();
        this.state={
            FormType:"login"
        }
    }

    switchForm = (value) =>{
        this.setState({
            FormType:value
        })
    }



    render(){
        return(
            <div className="login-page">
                <div className="login-container">
                    <div className="login-box">
                        <h1 className="page-title">{this.state.FormType ==="login"? "登录" : "注册"}</h1>
                        <div className="login-content">
                            {this.state.FormType ==="login"
                            ?<LoginForm switch = {this.switchForm}/>
                            :<RegisterForm switch = {this.switchForm}/>}

                        </div>
                    </div>
                </div>
            </div>
        );

    }
}

export default withRouter(LoginView);