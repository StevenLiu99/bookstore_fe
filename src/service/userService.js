import config from 'config';
import {postRequest} from "../utils/ajax";
import {history} from '../utils/history';
import {message} from 'antd';




export const register =(data)=>{
    const url = `${config.apiUrl}/register`;
    const callback =(data)=>{
        if(data.code === 0) {
            history.push("/");
            message.success("注册成功！");
        }
        if(data.code === 12){
            message.error("用户名重复。请重新输入！")
        }
    }
    postRequest(url, data, callback);
}

export const setUserState =(username,state,callback)=>{
    const data = {username: username,userState:state};
    const url = `${config.apiUrl}/setUserState`;
    postRequest(url, data, callback);
}

export const getUsers = (callback) =>{
    const url = `${config.apiUrl}/getUsers`;
    postRequest(url, {}, callback);
}

export const login = (data) => {
    const url = `${config.apiUrl}/login`;
    const callback = (data) => {
        if(data.status >= 0) {
            localStorage.setItem('user', JSON.stringify(data.data));
            localStorage.setItem('userId',JSON.stringify(data.data["userId"]));
            localStorage.setItem('username',JSON.stringify(data.data["username"]));
            localStorage.setItem('userType',JSON.stringify(data.data["userType"]))
            history.push("/");
            message.success(data.msg);
        }
        else{
            message.error(data.msg);
        }
    };
    postRequest(url, data, callback);
};

export const logout = () => {
    const url = `${config.apiUrl}/logout`;

    const callback = (data) => {
        if(data.status >= 0) {
            localStorage.removeItem("user");
            history.push("/login");
            message.success(data.msg);
        }
        else{
            message.error(data.msg);
        }
    };
    postRequest(url, {}, callback);
};

export const checkSession = (callback) => {
    const url = `${config.apiUrl}/checkSession`;
    postRequest(url, {}, callback);
};

