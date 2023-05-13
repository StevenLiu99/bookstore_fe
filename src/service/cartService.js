import config from 'config';
import {postRequest, postRequest_v2} from "../utils/ajax";
import {history} from "../utils/history";
import {message} from "antd";


export const getCart = (uid, callback) => {
    const data = {id: uid};
    const url = `${config.apiUrl}/getCart`;
    postRequest_v2(url, data, callback);
};

export const addIntoCart = (uid,bid) => {
    const data = {user_id: uid , book_id:bid};
    const callback = (data) => {
        if(data.status >= 0) {
            message.success(data.msg);
        }
        else{
            message.error(data.msg);
        }
    };
    const url = `${config.apiUrl}/addIntoCart`;
    postRequest(url, data, callback);
    message.success("添加成功！");

};