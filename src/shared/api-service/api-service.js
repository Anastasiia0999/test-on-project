import axios from 'axios';

import { BASE_URL } from './config.js';
import { requestInterceptor, responseErrorInterceptor, responseInterceptor } from './interceptors.js';
import {Cookie} from "../../utils/helpers";

axios.interceptors.request.use(requestInterceptor, (error) => Promise.reject(error));
axios.interceptors.response.use(responseInterceptor, responseErrorInterceptor);

export class ApiService {
    static sendRequest = async (
        url,
        method,
        data = null,
        headers = {},
        params = {}
    ) => {

        console.log('i am here');
        let paramsReq = {
            ...params,
            SessionId: Cookie.get('sessionId')
        };

        if(method !== 'GET'){
            data = {
                ...data,
                sessionId: Cookie.get('sessionId')
            }
            paramsReq = null
        }

        const response = await axios(url, {
            method,
            data,
            headers: headers ?? {},
            params: paramsReq ?? {}
        });

        if (!(response.status >= 200 && response.status < 300)) {
            throw response;
        }
        return response.data;
    };

    static load = (url, data, params) => ApiService.sendRequest(`${BASE_URL}${url}`, 'GET', data, params);

    static create = (url, data) => ApiService.sendRequest(`${BASE_URL}${url}`, 'POST', data);

    static update = (url, data) => ApiService.sendRequest(`${BASE_URL}${url}`, 'PUT', data);

    static remove = (url, data) => ApiService.sendRequest(`${BASE_URL}${url}`, 'DELETE', data);
}
