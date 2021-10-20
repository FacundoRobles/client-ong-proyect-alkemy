import {
    all,
    put,
    takeLatest
} from 'redux-saga/effects';
import {
    NEWS,
    HOME,
    BACKOFFICE
} from '@Api/Urls';
import {
    SUCCESS,
    ERROR
} from '@utils/constants';

import get from 'lodash/get';
import Api from '@Api/Api';
import {push} from '@core/middlewares/history';
import {SUBMIT_NEWS_REQUESTED, FETCH_NEWS_REQUESTED} from './types';
import {setRequestFlag, setSystemMessage} from '../Session/actions';
import {fetchNewsSucceeded, fetchOneNewsSucceeded} from './actions';

function* submitNewsRequestedSagas({values}) {
    try {
        const {id, payload} = values;
        yield put(setRequestFlag({flag: true}));
        if (id) {
            const responseNews = yield Api.put(`${NEWS}/${id.id}`, payload);
            const success = get(responseNews, 'data.success');
            if (success) {
                yield put(setSystemMessage(SUCCESS));
            }
        }
        const responseNews = yield Api.post(`${NEWS}`, payload);
        const success = get(responseNews, 'data.success');
        if (success) {
            yield put(setSystemMessage(SUCCESS));
        }
        return yield push(HOME + BACKOFFICE);
    } catch (err) {
        yield put(setSystemMessage(ERROR));
        throw Error(err);
    } finally {
        yield put(setRequestFlag({flag: false}));
    }
}

function* fetchNewsRequestedSagas({id}) {
    try {
        yield put(setRequestFlag({flag: true}));
        if (id) {
            const response = yield Api.get(`${NEWS}/${id}`);
            const entry = get(response, 'data.data');
            return yield put(fetchOneNewsSucceeded({entry}));
        }
        const entries = yield Api.get(`${NEWS}`);
        const documents = get(entries, 'data.data');
        return yield put(fetchNewsSucceeded({documents}));
    } catch (err) {
        yield put(setSystemMessage(ERROR));
        throw Error(err);
    } finally {
        yield put(setRequestFlag({flag: false}));
    }
}

export default function* userSagas() {
    yield all([
        takeLatest(SUBMIT_NEWS_REQUESTED, submitNewsRequestedSagas),
        takeLatest(FETCH_NEWS_REQUESTED, fetchNewsRequestedSagas)
    ]);
}
