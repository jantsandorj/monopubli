import { SERVER_URL } from '../config';

import URL from 'api/url';
import CODE from 'utils/statics/code';
import axios from 'axios';
import { t } from 'i18next';

//  calling api
export function requestAPI(url, requestOptions) {
    return new Promise(async function (resolve, reject) {
        //  content-type must be application/json
        if (localStorage.getItem('user')) {
            let user = JSON.parse(localStorage.getItem('user'));
            requestOptions['headers'] = { ...requestOptions['headers'], Accept: '*/*' };
            if (requestOptions['headers']['Content-Type'] === '' || !requestOptions['headers']['Content-Type']) {
                requestOptions['headers'] = { ...requestOptions['headers'], 'Content-Type': 'application/json; charset=utf-8' };
            }

            //  attach Bearer token if exists
            requestOptions['headers'] = { ...requestOptions['headers'], Authorization: `Bearer ${user?.token}` };

            axios({
                method: requestOptions['method'],
                url: SERVER_URL + url,
                data: requestOptions['data'],
                headers: requestOptions['headers']
            })
                .then(function (response) {
                    //    requiring login
                    if (response.data.code === '400' && response.data.message === 'error.access.denied') {
                        alert(t('error.auth.required'));
                        window.location.href = URL.LOGIN;
                        resolve('auth');
                    }

                    response.data.isSuccess = true;
                    resolve(response.data);
                })
                .catch(function (error) {
                    error.isSuccess = false;

                    if (error.response) {
                        // The request was made and the server responded with a status code
                        // that falls out of the range of 2xx
                        console.log(error.response.data);
                        console.log(error.response.status);
                        console.log(error.response.headers);

                        //    requiring login
                        if (error.response.status === CODE.RCV_ERROR_AUTH || error.response.status === CODE.RCV_ERROR_AUTH_REQUIRED) {
                            alert(t('error.auth.required'));
                            window.location.href = URL.LOGIN;
                            resolve('auth');
                        }
                    } else if (error.request) {
                        // The request was made but no response was received
                        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                        // http.ClientRequest in node.js
                        console.log(error.request);
                    } else {
                        // Something happened in setting up the request that triggered an Error
                        console.log('Error', error.message);
                    }
                    console.log(error.config);

                    resolve(error);
                });
        }
    });
}
