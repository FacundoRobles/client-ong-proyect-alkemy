/* eslint-disable no-console */
import {
    all,
    put,
    takeLatest
} from 'redux-saga/effects';

import get from 'lodash/get';

import {
    AUTH,
    LOGIN,
    ME

} from '@Api/Urls';

import Api from '@Api/Api';

import {
    LOGOUT,
    FETCH_SESSION_REQUESTED,
    FETCH_LOGIN_REQUESTED
} from './types';

import {
    fetchLoginSucceeded,
    setRequestFlag
} from './actions';

function* fetchLogin(values) {
    try {
        yield put(setRequestFlag({flag: true}));
        const responseLogin = yield Api.post(`${AUTH}/${LOGIN}`, values.payload);
        const success = get(responseLogin, 'data.success');
        if (success) {
            const token = get(responseLogin, 'data.data');
            const storage = localStorage.getItem('token_agent');
            if (!storage) {
                localStorage.setItem('token_agent', token);
            }
            const dataUser = yield Api.get(`${AUTH}/${ME}`);
            const userSuccess = get(dataUser, 'data.success');
            if (userSuccess) {
                const user = get(dataUser, 'data.data');
                yield put(fetchLoginSucceeded(user));
            }
        }
    } catch (err) {
        console.log(err);
    } finally {
        yield put(setRequestFlag({flag: false}));
    }
}

function* verifyUser() {
    try {
        const responseUser = yield Api.get(`${AUTH}/${ME}`);
        const success = get(responseUser, 'data.success');
        if (success) {
            const user = get(responseUser, 'data.data');
            yield put(fetchLoginSucceeded(user));
        }
    } catch (error) {
        console.log(error);
    }
}

function* logout() {
    yield localStorage.removeItem('token_agent');
    yield window.location.reload();
}

export default function* sessionSagas() {
    yield all([
        takeLatest(FETCH_LOGIN_REQUESTED, fetchLogin),
        takeLatest(FETCH_SESSION_REQUESTED, verifyUser),
        takeLatest(LOGOUT, logout)
    ]);
}
