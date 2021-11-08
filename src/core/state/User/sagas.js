/* eslint-disable no-console */
import {
    all,
    put,
    takeLatest
} from 'redux-saga/effects';
import {
    AUTH,
    USER,
    REGISTER,
    HOME
} from '@Api/Urls';
import {ERROR, SUCCESS} from '@utils/constants';
import {getRoutes} from '@utils';
import get from 'lodash/get';
import Api from '@Api/Api';
import {push} from '@core/middlewares/history';
import {
    SUBMIT_USER_REQUESTED,
    FETCH_USER_REQUESTED,
    DELETE_USER_REQUESTED
} from './types';
import {
    setRequestFlag,
    fetchLoginRequested,
    setSystemMessage
} from '../Session/actions';
import {
    fetchUserSucceeded,
    fetchUsersSucceeded,
    fetchUserRequested,
    cleanRegisterForm
} from './actions';

const backOfficeRoutes = getRoutes('backOffice');

function* submitUserRequestedSagas({payload, id}) {
    try {
        yield put(setRequestFlag({flag: true}));
        const {email, password} = payload;
        if (id) {
            const responseUser = yield Api.put(`${USER}/${id.id}`, payload);
            const successEdit = get(responseUser, 'data.success');
            if (successEdit) {
                yield push(backOfficeRoutes.user.list);
                yield put(fetchUserRequested({}));
                return yield put(setSystemMessage(SUCCESS));
            }
        }
        if (!id) {
            const responseRegister = yield Api.post(`${AUTH}/${REGISTER}`, payload);
            const successRegister = get(responseRegister, 'data.success');
            if (successRegister) {
                yield put(fetchLoginRequested({email, password}));
                yield push(HOME);
            }
        }
        return yield put(cleanRegisterForm({}));
    } catch (err) {
        yield put(setSystemMessage(ERROR));
        throw Error(err);
    } finally {
        yield put(setRequestFlag({flag: false}));
    }
}

function* fetchUserRequestedSagas({id}) {
    try {
        yield put(setRequestFlag({flag: true}));
        if (id) {
            const response = yield Api.get(`${USER}/${id}`);
            const user = get(response, 'data.data');
            return yield put(fetchUserSucceeded({user}));
        }
        const entries = yield Api.get(`${USER}`);
        const documents = get(entries, 'data.data');
        return yield put(fetchUsersSucceeded({documents}));
    } catch (err) {
        yield put(setSystemMessage(ERROR));
        throw Error(err);
    } finally {
        yield put(setRequestFlag({flag: false}));
    }
}

function* deleteUserRequestedSagas({id}) {
    try {
        console.log(id);
        yield put(setRequestFlag({flag: true}));
        yield Api.delete(`${USER}/${id}`);
        return yield put(setSystemMessage(SUCCESS));
    } catch (err) {
        yield put(setSystemMessage(ERROR));
        throw Error(err);
    } finally {
        yield put(setRequestFlag({flag: false}));
    }
}

export default function* userSagas() {
    yield all([
        takeLatest(SUBMIT_USER_REQUESTED, submitUserRequestedSagas),
        takeLatest(FETCH_USER_REQUESTED, fetchUserRequestedSagas),
        takeLatest(DELETE_USER_REQUESTED, deleteUserRequestedSagas)
    ]);
}
