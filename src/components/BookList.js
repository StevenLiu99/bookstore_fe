
import React, { useState } from 'react';
import { Table, Input, InputNumber, Popconfirm, Form, Typography,Space } from 'antd';
import {deleteOne, getBooks, updateBook} from "../service/bookService";
import {history} from '../utils/history'

const { Search } = Input;



const EditableCell = ({
                          editing,
                          dataIndex,
                          title,
                          inputType,
                          record,
                          index,
                          children,
                          ...restProps
                      }) => {
    const inputNode = inputType === 'number' ? <InputNumber /> : <Input />;
    return (
        <td {...restProps}>
            {editing ? (
                <Form.Item
                    name={dataIndex}
                    style={{
                        margin: 0,
                    }}
                    rules={[
                        {
                            required: true,
                            message: `Please Input ${title}!`,
                        },
                    ]}
                >
                    {inputNode}
                </Form.Item>
            ) : (
                children
            )}
        </td>
    );
};


const EditableTable = (props)=> {
    let user_type = parseInt(localStorage.getItem("userType"));
    console.log(props.givendata);
    const predata = props.givendata;
    const [form] = Form.useForm();
    const [data, setData] = useState(predata);
    // const data = props.givendata;
    console.log(data);
    const [editingKey, setEditingKey] = useState('');

    const isEditing = (record) => record.id === editingKey;

    // const edit = (record: Partial<Item> & { key: React.Key }) => {
    //     form.setFieldsValue({
    //         name: '',
    //         author: '',
    //         type: '',
    //         price: '',
    //         inventory: '', ...record
    //     });
    //     setEditingKey(record.key);
    // };

    const edit = (record) => {
        form.setFieldsValue({
            name: '',
            author: '',
            type: '',
            price: '',
            inventory: '', ...record
        });
        setEditingKey(record.id);
    };


    const cancel = () => {
        setEditingKey('');
    };

    // const save = async (key: React.Key) => {
    //     try {
    //         const row = (await form.validateFields())
    //
    //         const newData = [...data];
    //         const index = newData.findIndex((item) => key === item.key);
    //         if (index > -1) {
    //             const item = newData[index];
    //             newData.splice(index, 1, {
    //                 ...item,
    //                 ...row,
    //             });
    //             // setData(newData);
    //             setEditingKey('');
    //             console.log(item);
    //         } else {
    //             newData.push(row);
    //             // setData(newData);
    //             setEditingKey('');
    //         }
    //     } catch (errInfo) {
    //         console.log('Validate Failed:', errInfo);
    //     }
    // };
    const save = async (id) => {
        try {
            const row = await form.validateFields();
            const newData = props.givendata;
            const index = newData.findIndex((item) => id === item.id);

            if (index > -1) {
                const item = newData[index];
                newData.splice(index, 1, { ...item, ...row });
                setData(newData);
                setEditingKey('');

                const callback =  (data) => {
                };
                const newitem =  newData[index];
                console.log(newitem);
                updateBook(newitem, callback);
                // Window.location.reload();


            } else {
                newData.push(row);
                setData(newData);
                setEditingKey('');
            }
        } catch (errInfo) {
            console.log('Validate Failed:', errInfo);
        }
    };

    const deleteBook = (id) => {
        try {
            console.log(id);
            const callback =  (data) => {
            };
            deleteOne(id,callback);
            window.location.reload();

        }

        catch (errInfo) {
            console.log('Validate Failed:', errInfo);
        }
    }
    const columns_user = [
        {
            title: '封面',
            dataIndex: 'image',
            key: 'image',
            render:(record)=><img src={record} width="100px" />,
            editable: true,

        },
        {
            title: '书名',
            dataIndex: 'name',
            key: 'name',
            editable: true,

        },
        {
            title: '作者',
            dataIndex: 'author',
            key: 'author',
            editable: true,
        },
        {
            title: 'ISBN号',
            dataIndex: 'isbn',
            key: 'isbn',
            editable: true,
        },
        {
            title: '定价',
            dataIndex: 'price',
            key: 'price',
            defaultSortOrder: 'ascend',
            sorter: (a, b) => a.price - b.price,
            editable: true,
        },
        {
            title: '库存',
            dataIndex: 'inventory',
            key: 'inventory',
            defaultSortOrder: 'descend',
            sorter: (a, b) => a.inventory - b.inventory,
            editable: true,
        },
    ]

    const columns = [
        {
            title: '封面',
            dataIndex: 'image',
            key: 'image',
            render:(record)=><img src={record} width="100px" />,
            editable: true,

        },
        {
            title: '书名',
            dataIndex: 'name',
            key: 'name',
            editable: true,

        },
        {
            title: '作者',
            dataIndex: 'author',
            key: 'author',
            editable: true,
        },
        {
            title: 'ISBN号',
            dataIndex: 'isbn',
            key: 'isbn',
            editable: true,
        },
        {
            title: '定价',
            dataIndex: 'price',
            key: 'price',
            defaultSortOrder: 'ascend',
            sorter: (a, b) => a.price - b.price,
            editable: true,
        },
        {
            title: '库存',
            dataIndex: 'inventory',
            key: 'inventory',
            defaultSortOrder: 'descend',
            sorter: (a, b) => a.inventory - b.inventory,
            editable: true,
        },
        {
            title: '操作',
            dataIndex: 'operation',
            render: (_, record) => {
                const editable = isEditing(record);
                return editable ? (
                    <span>
            <a href="http://localhost:3000/bookList" onClick={() => save(record.id)} style={{marginRight: 8}}>
              保存
            </a>
            <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
              <a>取消</a>
            </Popconfirm>
          </span>
                ) : (
                    <Space size = "middle">
                    <Typography.Link disabled={editingKey !== ''} onClick={() => edit(record)}>
                        编辑
                    </Typography.Link>
                    <Popconfirm title="确认要删除这本书吗？" onConfirm={() => deleteBook(record.id)}>
                    <Typography.Link>
                        删除
                    </Typography.Link>
                    </Popconfirm>
                    </Space>
                );
            },
        },
    ];
    const mergedColumns = columns.map((col) => {
        if (!col.editable) {
            return col;
        }
        return {
            ...col,
            onCell: (record) => ({
                record,
                inputType: col.dataIndex === 'inventory' ? 'number' : 'text',
                dataIndex: col.dataIndex,
                title: col.title,
                editing: isEditing(record),
            }),
        };
    });


    return (
        <Form form={form} component={false}>
            {user_type === 0
                ? <Table
                components={{
                    body: {
                        cell: EditableCell,
                    },
                }}
                bordered
                dataSource={props.givendata}
                columns={mergedColumns}
                rowClassName="editable-row"
                pagination={{
                    onChange: cancel,
                }}
            />
                :
                <Table

                    bordered
                    dataSource={props.givendata}
                    columns={columns_user}

                />
            }

        </Form>
    )
}



export class BookList extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            datasource: null,
            search: false,
            searchData: null,
        };
    }
    componentDidMount() {

        const callback =  (data) => {
            this.setState({datasource:data});
        };

        getBooks({"search":null}, callback);
        console.log(this.state.datasource);
    }



    handleTitleSearch = (input) => {
        if(this.state.search == false) {
            let f = this.state.datasource.filter(book => book.name.match(input));
            this.setState({searchData: f,search: true});
            console.log(this.state.searchData);
        }
        else{
            this.setState({search:false});
        }
    }



    render() {
        if(this.state.search ){
            return (
                <div className={"content"}>
                    <Search placeholder="input search text" onSearch={this.handleTitleSearch} style={{ width: 200 }} />
                    {console.log(this.state.searchData)}
                    <EditableTable givendata={this.state.searchData} />
                </div>
            );
        }
       else{
           return (
               <div className={"content"}>
                   <Search placeholder="input search text" onSearch={this.handleTitleSearch} style={{ width: 200 }} />

                   <EditableTable givendata={this.state.datasource} />
               </div>

           )
        }




    }

}

