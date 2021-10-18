/* eslint-disable no-console */
import {
    all,
    put,
    takeLatest
} from 'redux-saga/effects';

import get from 'lodash/get';

import {
    TESTIMONIAL
} from '@Api/Urls';

import Api from '@Api/Api';

import {
    FETCH_TESTIMONIALS_REQUESTED
} from './types';

import {
    fetchTestimonialsSucceeded
} from './actions';

function* fetchTestimonials() {
    try {
        const responseTestimonials = yield Api.get(`${TESTIMONIAL}`);
        const success = get(responseTestimonials, 'data.success');
        if (success) {
            const news = get(responseTestimonials, 'data.data');
            yield put(fetchTestimonialsSucceeded(news));
        }
    } catch (err) {
        console.log(err);
    }
}

export default function* newsSagas() {
    yield all([
        takeLatest(FETCH_TESTIMONIALS_REQUESTED, fetchTestimonials)
    ]);
}
