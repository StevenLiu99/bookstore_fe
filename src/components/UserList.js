
import React from 'react';
import {Table, Tag, Space, Typography, Popconfirm} from 'antd';
import {deleteOne, getBooks} from "../service/bookService";
import {getUsers, setUserState} from "../service/userService";

const setUser = (username,state) =>{
    try {
        console.log(username);
        const callback =  (data) => {
        };
        setUserState(username,state);
        window.location.reload();

    }

    catch (errInfo) {
        console.log('Validate Failed:', errInfo);
    }
}

const columns = [
    {
        title: 'ID',
        dataIndex: 'userId',
        key:'userId',
        render: text => <a>{text}</a>,
    },
    {
        title: '用户名',
        dataIndex: 'username',
        key: 'username',
    },
    {
        title: '用户类型',
        dataIndex: 'userType',
        key: 'userType',
        render: (text, record) => (

            record.userType === 0?
                <text>管理员</text>
                :
                <text>普通用户</text>
        )
    },
    {
        title: '用户状态',
        dataIndex: 'userState',
        key: 'userState',
        render: (text, record) => (

            record.userState === 0?
                <text>正常</text>
                :
                <text>已禁用</text>
        )
    },
    {
        title: '操作',
        key: 'action',
        render: (text, record) => (
            <Space size="middle">
                <Popconfirm title="确认要禁用该用户吗？" onConfirm={() => setUser(record.username,1)}>
                    <Typography.Link>
                       禁用
                    </Typography.Link>
                </Popconfirm>
                <Popconfirm title="确认要解禁该用户吗？" onConfirm={() => setUser(record.username,0)}>
                    <Typography.Link>
                        解禁
                    </Typography.Link>
                </Popconfirm>
            </Space>
        ),

    },

];

export class UserList extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            usersData: null,
        };
    }
    componentDidMount() {

        const callback =  (data) => {
            this.setState({usersData:data});
        };

        getUsers(callback);
        console.log(this.state.datasource);
    }
    render() {
        return(
            <Table columns={columns} dataSource={this.state.usersData} />

        )

    }


}