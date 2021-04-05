
import React, { useState } from 'react';
import { Table, Input, InputNumber, Popconfirm, Form, Typography,Space } from 'antd';

const { Search } = Input;




interface Item {
    key: string;
    name: string;
    author: string;
    type: string;
    price: number;
    inventory:number;
}

interface EditableCellProps extends React.HTMLAttributes<HTMLElement> {
    editing: boolean;
    dataIndex: string;
    title: any;
    inputType: 'number' | 'text';
    record: Item;
    index: number;
    children: React.ReactNode;
}

const EditableCell: React.FC<EditableCellProps> = ({
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
                    style={{ margin: 0 }}
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
    console.log(props.givendata);
    let predata = props.givendata;
    const [form] = Form.useForm();
    const [data, setData] = useState(predata);

    console.log(data);
    const [editingKey, setEditingKey] = useState('');

    const isEditing = (record: Item) => record.key === editingKey;

    const edit = (record: Partial<Item> & { key: React.Key }) => {
        form.setFieldsValue({
            name: '',
            author: '',
            type: '',
            price: '',
            inventory: '', ...record
        });
        setEditingKey(record.key);
    };

    const cancel = () => {
        setEditingKey('');
    };

    const save = async (key: React.Key) => {
        try {
            const row = (await form.validateFields())

            const newData = [...data];
            const index = newData.findIndex(item => key === item.key);
            if (index > -1) {
                const item = newData[index];
                newData.splice(index, 1, {
                    ...item,
                    ...row,
                });
                setData(newData);
                setEditingKey('');
            } else {
                newData.push(row);
                setData(newData);
                setEditingKey('');
            }
        } catch (errInfo) {
            console.log('Validate Failed:', errInfo);
        }
    };


    const columns = [
        {
            title: '封面',
            dataIndex: 'image',
            key: 'image',
            render:(record)=><img src={record} width="100px" />,
            editable: false,

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
            title: 'operation',
            dataIndex: 'operation',
            render: (_: any, record: Item) => {
                const editable = isEditing(record);
                return editable ? (
                    <span>
            <a href="javascript:;" onClick={() => save(record.key)} style={{marginRight: 8}}>
              Save
            </a>
            <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
              <a>Cancel</a>
            </Popconfirm>
          </span>
                ) : (
                    <Typography.Link disabled={editingKey !== ''} onClick={() => edit(record)}>
                        Edit
                    </Typography.Link>
                );
            },
        },
    ];
    const mergedColumns = columns.map(col => {
        if (!col.editable) {
            return col;
        }
        return {
            ...col,
            onCell: (record: Item) => ({
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
            <Table
                components={{
                    body: {
                        cell: EditableCell,
                    },
                }}
                bordered
                dataSource={data}
                columns={mergedColumns}
                rowClassName="editable-row"
                pagination={{
                    onChange: cancel,
                }}
            />
        </Form>
    )
}



export class BookList extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.initialData,
            search: false,
            searchData: null,
        };


    }




    handleTitleSearch = (input) => {
        if(this.state.search == false) {
            let f = this.props.initialData.filter(book => book.name.match(input));
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

                   <EditableTable givendata={this.state.data} />
               </div>

           )
        }




    }

}

