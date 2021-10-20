/* eslint-disable no-console */
import {
    all,
    put,
    takeLatest
} from 'redux-saga/effects';

import {
    SUCCESS,
    ERROR
} from '@utils/constants';

import get from 'lodash/get';

import {
    NEWS
} from '@Api/Urls';

import Api from '@Api/Api';

import {
    FETCH_NEWS_REQUESTED
} from './types';

import {
    fetchNewsSucceeded
} from './actions';
import {
    setRequestFlag,
    setSystemMessage
} from '../Session/actions';

function* fetchNews() {
    try {
        yield put(setRequestFlag({flag: true}));
        const responseNews = yield Api.get(`${NEWS}`);
        const success = get(responseNews, 'data.success');
        if (success) {
            const news = get(responseNews, 'data.data');
            yield put(fetchNewsSucceeded(news));
            yield put(setSystemMessage(SUCCESS));
            return;
        }
    } catch (err) {
        yield put(setSystemMessage(ERROR));
    } finally {
        yield put(setRequestFlag({flag: false}));
    }
}

export default function* newsSagas() {
    yield all([
        takeLatest(FETCH_NEWS_REQUESTED, fetchNews)
    ]);
}
