import config from 'config';
import {postRequest, postRequest_v2} from "../utils/ajax";

import {message} from "antd";


export const getOrder = (uid, callback) => {
    const data = {id: uid};
    const url = `${config.apiUrl}/getOrder`;
    postRequest_v2(url, data, callback);
};
export const getAllOrders =(data,callback)=>{
    const url = `${config.apiUrl}/getAllOrder`;
    postRequest(url, data, callback);
}


export const addOrder = (books,uid,orderId,username,totalprice,state,time) => {
    const data = {books:books,user_id: uid ,orderId:orderId, username:username,totalPrice:totalprice,state:state,time:time};
    console.log(data);
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