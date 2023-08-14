/**
 * COMMON FUNCTIONS
 */
import { t } from 'i18next';

var loggedInUser = '';
export var userToken = ''; //  token for logged in user

//  setting loggedin user
export function setLoggedInUser(userData) {
    loggedInUser = userData;
}

//  setting userToken
export function setUserToken(newToken) {
    userToken = newToken;
}

export function getLoggedInUser() {
    return loggedInUser;
}

//  getting translated text
export function getTranslatedText(text) {
    return t(text);
}

export function getCurrentUrl(){
    return window.location.pathname;
}

//@author: Dral
//get corresponding name
export function findCorName(id, column, list, corr) {
    if (list && list.length > 0) {
        const item = list.find((item) => {
            if (corr) {
                return id == item[corr];
            }
            return id == item.code;
        });
        return item ? item[column] : 'no item';
    }
    return '';
}

//@author: Dral
//get calculated seq
export const calcSeq = (data, index) => {
    if (data?.totalElements) {
        return +data?.totalElements - +data?.number - index;
    }
    return 0;
};

export function RequireValueNow(inputRef, labelText, type = 'text', showAlert = false) {
    if (inputRef?.current !== null) {
        inputRef = inputRef?.current;
    }

    let isFailed = false;
    let errorMessage = '';

    //	checking for text data
    if (type === 'text') {
        if (inputRef?.value === '') {
            errorMessage = t(labelText) + ' - ' + t('warning.require.input');
            isFailed = true;
        }
    }

    //	checking for email
    if (type === 'email') {
        var email = inputRef?.value;
        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
            errorMessage = t(labelText) + ' - ' + t('warning.require.input') + ' ex: mymail@example.com';
            isFailed = true;
        }
    }

    if (isFailed && showAlert) {
        inputRef.focus();
        console.log({ errorMessage });
    }
    return isFailed;
}

export function addComma(n) {
    var reg = /(^[+-]?\d+)(\d{3})/; // 정규식
    n += ''; // 숫자를 문자열로 변환

    while (reg.test(n)) n = n.replace(reg, '$1' + ',' + '$2');

    return n;
}

export function removeComma(str) {
    var reg = /[,]/g;
    var val = str.replace(reg, '');

    if (isNaN(val)) return str;
    else return parseInt(val, 10);
}
