import React from 'react';
import { Form, Input, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete } from 'antd';
import * as userService from "../service/userService";
const { Option } = Select;
const formItemLayout = {
    labelCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 8,
        },
    },
    wrapperCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 16,
        },
    },
};
const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 8,
        },
    },
};


export class RegisterForm extends React.Component{


   onFinish = (values) => {
        console.log('Received values of form: ', values);
        userService.register(values);
    };


    render() {
        return(

                <Form
                    {...formItemLayout}
                    className="register-form"
                    name="register"
                    onFinish={this.onFinish}
                    // initialValues={{
                    //     residence: ['zhejiang', 'hangzhou', 'xihu'],
                    //     prefix: '86',
                    // }}
                    scrollToFirstError
                >
                    <Form.Item
                        name="username"
                        label="用户名"
                        rules={[

                            {
                                required: true,
                                message: '请输入用户名！',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        name="password"
                        label="密码"
                        rules={[
                            {
                                required: true,
                                message: '请输入密码！',
                            },
                        ]}
                        hasFeedback
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item
                        name="confirm"
                        label="确认密码"
                        dependencies={['password']}
                        hasFeedback
                        rules={[
                            {
                                required: true,
                                message: '请确认密码！',
                            },
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                    if (!value || getFieldValue('password') === value) {
                                        return Promise.resolve();
                                    }

                                    return Promise.reject(new Error('两次输入的密码不一致，请重新输入！'));
                                },
                            }),
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item
                        name="nickname"
                        label="昵称"
                        tooltip="你想让其他人怎么称呼你？"
                        rules={[
                            {
                                required: true,
                                message: '请输入昵称！',
                                whitespace: true,
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        name="address"
                        label="电子邮箱"
                        rules={[
                            {
                                type: 'email',
                                message: '输入的不是有效邮箱格式！',
                            },
                            {
                                required: true,
                                message: '请输入你的邮箱！',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        name="tel"
                        label="手机号"
                        rules={[
                            {
                                required: true,
                                message: '请输入你的手机号！',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item {...tailFormItemLayout}>
                        <Button type="primary" htmlType="submit">
                            注册
                        </Button>
                    </Form.Item>
                </Form>

        )
    }


}