import {
    all,
    put,
    takeLatest
} from 'redux-saga/effects';
import {
    AUTH,
    REGISTER
} from '@Api/Urls';

import Api from '@Api/Api';
import {SUBMIT_USER_REQUESTED} from './types';
import {setRequestFlag} from '../Session/actions';

function* submitUserRequestedSagas(values) {
    try {
        yield put(setRequestFlag({flag: true}));
        yield Api.post(`${AUTH}/${REGISTER}`, values.payload);
    } catch (err) {
        throw Error(err);
    }
    finally{
        yield put(setRequestFlag({flag: false}));
    }
}

export default function* userSagas() {
    yield all([
        takeLatest(SUBMIT_USER_REQUESTED, submitUserRequestedSagas)
    ]);
}
