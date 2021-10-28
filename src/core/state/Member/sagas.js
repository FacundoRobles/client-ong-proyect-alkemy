import {
    all,
    put,
    takeLatest
} from 'redux-saga/effects';
import {
    MEMBER
} from '@Api/Urls';
import {
    ERROR
} from '@utils/constants';
import get from 'lodash/get';
import Api from '@Api/Api';
import {
    FETCH_MEMBERS_REQUESTED
} from './types';
import {setRequestFlag, setSystemMessage} from '../Session/actions';
import {
    fetchMembersSucceeded
} from './actions';

function* fetchMembersRequestedSagas() {
    try {
        yield put(setRequestFlag({flag: true}));
        const fetchMembers = yield Api.get(`${MEMBER}`);
        const success = get(fetchMembers, 'data.success');
        if (success) {
            const documents = get(fetchMembers, 'data.data');
            yield put(fetchMembersSucceeded({documents}));
            return;
        }
        yield put(setSystemMessage(ERROR));
    } catch (err) {
        yield put(setSystemMessage(ERROR));
        throw Error(err);
    } finally {
        yield put(setRequestFlag({flag: false}));
    }
}

export default function* memberSagas() {
    yield all([
        takeLatest(FETCH_MEMBERS_REQUESTED, fetchMembersRequestedSagas)
    ]);
}
