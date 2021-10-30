/* eslint-disable no-console */
import {
    all,
    put,
    takeLatest
} from 'redux-saga/effects';
import {
    AUTH,
    REGISTER,
    HOME,
    USERS
} from '@Api/Urls';

import get from 'lodash/get';
import Api from '@Api/Api';
import {push} from '@core/middlewares/history';
import {SUBMIT_USER_REQUESTED} from './types';
import {setRequestFlag, fetchLoginRequested} from '../Session/actions';

function* submitUserRequestedSagas(values) {
    try {
        const {id} = values.payload;
        let result = null;
        if (id) {
            const responseUser = yield Api.put(`${USERS}/${id}`, id);
            result = get(responseUser, 'data.success');
            console.log(result);
        }
        const {email, password} = values.payload;
        yield put(setRequestFlag({flag: true}));
        const responseRegister = yield Api.post(`${AUTH}/${REGISTER}`, values.payload);
        const success = get(responseRegister, 'data.success');
        if (success) {
            yield put(fetchLoginRequested({email, password}));
        }
    } catch (err) {
        throw Error(err);
    } finally {
        yield put(setRequestFlag({flag: false}));
        yield push(HOME);
    }
}

export default function* userSagas() {
    yield all([
        takeLatest(SUBMIT_USER_REQUESTED, submitUserRequestedSagas)
    ]);
}
