import React from 'react';
import {withRouter} from "react-router-dom";
import {RegisterForm} from "../components/RegisterForm";


class RegisterView extends React.Component{


    render(){
        return(
            <div className="register-page">
                <div className="register-container">
                    <div className="register-box">
                        <h1 className="page-title">Register</h1>
                        <div className="register-content">
                            <RegisterForm />
                        </div>
                    </div>
                </div>
            </div>
        );

    }
}

export default withRouter(RegisterView);