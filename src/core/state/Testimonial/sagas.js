/* eslint-disable no-console */
import {
    all,
    put,
    takeLatest
} from 'redux-saga/effects';

import get from 'lodash/get';

import {
    SUCCESS,
    ERROR
} from '@utils/constants';

import {
    TESTIMONIAL
} from '@Api/Urls';

import Api from '@Api/Api';

import {
    FETCH_TESTIMONIALS_REQUESTED
} from './types';
import {
    setRequestFlag,
    setSystemMessage
} from '../Session/actions';
import {
    fetchTestimonialsSucceeded
} from './actions';

function* fetchTestimonials() {
    try {
        yield put(setRequestFlag({flag: true}));
        const responseTestimonials = yield Api.get(`${TESTIMONIAL}`);
        const success = get(responseTestimonials, 'data.success');
        if (success) {
            const news = get(responseTestimonials, 'data.data');
            yield put(fetchTestimonialsSucceeded(news));
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
        takeLatest(FETCH_TESTIMONIALS_REQUESTED, fetchTestimonials)
    ]);
}
