import config from 'config';
import {postRequest, postRequest_v2} from "../utils/ajax";

import {message} from "antd";


export const getOrder = (uid, callback) => {
    const data = {id: uid};
    const url = `${config.apiUrl}/getOrder`;
    postRequest_v2(url, data, callback);
};

export const addOrder = (uid,username,addr,totalprice,state,time) => {
    const data = {user_id: uid , username:username,addr:addr,totalPrice:totalprice,state:state,time:time};
    const callback = (data) => {
        if(data.status >= 0) {
            message.success(data.msg);
        }
        else{
            message.error(data.msg);
        }
    };
    const url = `${config.apiUrl}/addOrder`;
    postRequest(url, data, callback);

};