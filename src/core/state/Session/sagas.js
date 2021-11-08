/* eslint-disable no-console */
import {
    all,
    put,
    takeLatest
} from 'redux-saga/effects';

import get from 'lodash/get';
import {push} from '@core/middlewares/history';
import {
    SUCCESS,
    ERROR
} from '@utils/constants';
import {
    AUTH,
    LOGIN,
    ME,
    HOME,
    ORGANIZATION
} from '@Api/Urls';
import Api from '@Api/Api';
import {
    LOGOUT,
    FETCH_SESSION_REQUESTED,
    FETCH_LOGIN_REQUESTED,
    SUBMIT_SLIDES_REQUESTED
} from './types';

import {
    fetchLoginSucceeded,
    setRequestFlag,
    setSystemMessage,
    submitSlideSucceeded
} from './actions';
// import { push } from 'connected-react-router';

function* fetchLogin({payload}) {
    try {
        yield put(setRequestFlag({flag: true}));
        const responseLogin = yield Api.post(`${AUTH}/${LOGIN}`, payload);
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
                yield put(setSystemMessage(SUCCESS));
                yield push('/');
                return;
            }
        }
        yield put(setSystemMessage(ERROR));
    } catch (err) {
        yield put(setSystemMessage(ERROR));
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
    try {
        yield put(setRequestFlag({flag: true}));
        if (localStorage.getItem('token_agent')) {
            yield localStorage.removeItem('token_agent');
            yield push(HOME);
            yield put(setSystemMessage(SUCCESS));
            yield push('/');
        }
    } catch (err) {
        yield put(setSystemMessage(ERROR));
    } finally {
        yield put(setRequestFlag({flag: false}));
    }
}

function* submitSlideSagas({push, values, id}) {
    const {welcomeText, items} = values;
    try {
        yield put(setRequestFlag({flag: true}));
        if (id) {
            const editForm = yield Api.put(`${ORGANIZATION}/${id}`, {welcomeText, items});
            const success = get(editForm, 'data.success');
            if (success) {
                yield put(submitSlideSucceeded({welcomeText, items}));
                yield put(setSystemMessage(SUCCESS));
                yield push(HOME);
                return;
            }
        }
        yield put(setSystemMessage(ERROR));
    } catch (error) {
        yield put(setSystemMessage(ERROR));
    } finally {
        yield put(setRequestFlag({flag: false}));
    }
}

export default function* sessionSagas() {
    yield all([
        takeLatest(FETCH_LOGIN_REQUESTED, fetchLogin),
        takeLatest(FETCH_SESSION_REQUESTED, verifyUser),
        takeLatest(LOGOUT, logout),
        takeLatest(SUBMIT_SLIDES_REQUESTED, submitSlideSagas)
    ]);
}
