import {
    all,
    put,
    takeLatest
} from 'redux-saga/effects';
import {
    NEWS
} from '@Api/Urls';
import {
    SUCCESS,
    ERROR
} from '@utils/constants';
import {getRoutes} from '@utils';
import get from 'lodash/get';
import Api from '@Api/Api';
import {push} from '@core/middlewares/history';
import {
    SUBMIT_NEWS_REQUESTED,
    FETCH_NEWS_REQUESTED,
    DELETE_NEWS_REQUESTED
} from './types';
import {setRequestFlag, setSystemMessage} from '../Session/actions';
import {
    fetchNewsRequested,
    fetchNewsSucceeded,
    fetchOneNewsSucceeded,
    cleanNewsForm
} from './actions';

const mainRoutes = getRoutes('mainRoutes');
const backOfficeRoutes = getRoutes('backOffice');

function* submitNewsRequestedSagas({payload, id: {id}}) {
    try {
        let success = null;
        yield put(setRequestFlag({flag: true}));
        if (id) {
            const responseNews = yield Api.put(`${NEWS}/${id}`, payload);
            success = get(responseNews, 'data.success');
            yield push(`${mainRoutes.news}/${id}`);
        }
        if (!id) {
            const responseNews = yield Api.post(`${NEWS}`, payload);
            success = get(responseNews, 'data.success');
            yield push(backOfficeRoutes.news.list);
        }
        if (success) {
            yield put(setSystemMessage(SUCCESS));
            yield put(cleanNewsForm({}));
            yield put(fetchNewsRequested({}));
        }
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
            if (!entry) {
                return yield put(cleanNewsForm({}));
            }
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

function* deleteNewsRequestedSagas({id}) {
    try {
        yield put(setRequestFlag({flag: true}));
        yield Api.delete(`${NEWS}/${id}`);
        yield put(fetchNewsRequested());
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
        takeLatest(SUBMIT_NEWS_REQUESTED, submitNewsRequestedSagas),
        takeLatest(FETCH_NEWS_REQUESTED, fetchNewsRequestedSagas),
        takeLatest(DELETE_NEWS_REQUESTED, deleteNewsRequestedSagas)
    ]);
}
