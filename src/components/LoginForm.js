import React from 'react';
import { Form,Input, Button, Checkbox } from 'antd';
import Icon from '@ant-design/icons';
import 'antd/dist/antd.css';
import '../css/login.css'
import {Link} from 'react-router-dom'

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};
const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};

export class LoginForm extends React.Component {


    render() {
        return(
        <Form
            {...layout}
            name="basic"
            initialValues={{ remember: true }}

        >
            <Form.Item
                label="Username"
                name="username"
                rules={[{ required: false, message: 'Please input your username!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[{ required: false, message: 'Please input your password!' }]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item {...tailLayout}>
                <Link to="/">
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
                </Link>
            </Form.Item>
        </Form>
        )

    }
}