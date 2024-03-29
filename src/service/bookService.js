import config from 'config';
import {postRequest, postRequest_v2} from "../utils/ajax";


export const getBooks = (data, callback) => {
    const url = `${config.apiUrl}/getBooks`;
    postRequest(url, data, callback);
};

export const getBook = (id, callback) => {
    const data = {id: id};
    const url = `${config.apiUrl}/getBook`;
    postRequest_v2(url, data, callback);

};

export const updateBook =(data,callback)=>{
    const url = `${config.apiUrl}/updateBook`;
    postRequest(url, data, callback);
}

export const deleteOne =(id,callback)=>{
    const data = {id: id};
    const url = `${config.apiUrl}/deleteBook`;
    postRequest(url, data, callback);
}