import React from 'react';
import { Form,Input, Button, Checkbox,Space,Row } from 'antd';
import {UserOutlined, LockOutlined} from '@ant-design/icons';
import 'antd/dist/antd.css';
import '../css/login.css'
import {Link} from 'react-router-dom'
import * as userService from '../service/userService'

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};
const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};

export class LoginForm extends React.Component {

    handleSubmit = e => {
        //e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                userService.login(values);
            }
        });
    };
     onFinish = (values: any) => {
        console.log('Success:', values);
         userService.login(values);


    };

     toggleForm = () =>{
        this.props.switch("register");

     }


    render() {
        return(
        // <Form
        //     onFinish={this.onFinish}
        //     {...layout}
        //     name="basic"
        //     initialValues={{ remember: true }}
        //
        // >
        //     <Form.Item
        //         label="Username"
        //         name="username"
        //         rules={[{ required: false, message: 'Please input your username!' }]}
        //     >
        //         <Input />
        //     </Form.Item>
        //
        //     <Form.Item
        //         label="Password"
        //         name="password"
        //         rules={[{ required: false, message: 'Please input your password!' }]}
        //     >
        //         <Input.Password />
        //     </Form.Item>
        //
        //     <Form.Item {...tailLayout} name="remember" valuePropName="checked">
        //         <Checkbox>Remember me</Checkbox>
        //     </Form.Item>
        //
        //     <Form.Item >
        //         {/*<Link to="/">*/}
        //
        //         <Row>
        //         <Button type="primary" htmlType="submit">
        //             Log in
        //         </Button>
        //
        //         <Button>
        //             Register
        //         </Button>
        //         </Row>
        //         {/*</Link>*/}
        //     </Form.Item>
        // </Form>

            <Form
                name="normal_login"
                className="login-form"
                initialValues={{
                    remember: true,
                }}
                onFinish={this.onFinish}
            >
                <Form.Item
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: '请输入您的用户名！',
                        },
                    ]}
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: '请输入您的密码！',
                        },
                    ]}
                >
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="Password"
                    />
                </Form.Item>


                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        登录
                    </Button>
                    Or <a onClick={this.toggleForm}>现在注册！</a>
                </Form.Item>
            </Form>
        );


    }
}
