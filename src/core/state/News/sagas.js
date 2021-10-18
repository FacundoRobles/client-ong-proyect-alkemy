/* eslint-disable no-console */
import {
    all,
    put,
    takeLatest
} from 'redux-saga/effects';

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

function* fetchNews() {
    try {
        const responseNews = yield Api.get(`${NEWS}`);
        const success = get(responseNews, 'data.success');
        if (success) {
            const news = get(responseNews, 'data.data');
            yield put(fetchNewsSucceeded(news));
        }
    } catch (err) {
        console.log(err);
    }
}

export default function* newsSagas() {
    yield all([
        takeLatest(FETCH_NEWS_REQUESTED, fetchNews)
    ]);
}
