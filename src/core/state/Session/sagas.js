/* eslint-disable no-console */
import {
    all,
    takeLatest
} from 'redux-saga/effects';
import {
    getRoutes
} from '@utils';

import {
    LOGOUT,
    FETCH_LOGIN_REQUESTED
} from './types';

const mainRoutes = getRoutes('mainRoutes');

function* fetchLogin() {
    try {
        yield console.log(mainRoutes);
    } catch (error) {
        console.log(error);
    }
}

function logout() {
    localStorage.clear();
    window.location = '/';
}

export default function* sessionSagas() {
    yield all([
        takeLatest(FETCH_LOGIN_REQUESTED, fetchLogin),
        takeLatest(LOGOUT, logout)
    ]);
}
