/* eslint-disable no-console */
import {
    all,
    put,
    takeLatest
} from 'redux-saga/effects';
import get from 'lodash/get';
import Api from '@Api/Api';
import {
    TESTIMONIAL
} from '@Api/Urls';
import {
    SUCCESS,
    ERROR
} from '@utils/constants';
import {
    setRequestFlag,
    setSystemMessage
} from '@core/state/Session/actions';
import {
    fetchTestimonialsSucceeded,
    fetchTestimonialSucceeded,
    cleanRegisterForm
} from './actions';
import {
    FETCH_TESTIMONIAL_REQUESTED,
    SUBMIT_TESTIMONIAL_REQUESTED,
    DELETE_TESTIMONIAL_REQUESTED
} from './types';

function* requestTestimonialSagas(props) {
    console.log(props[0])
    try {
        yield put(setRequestFlag({flag: true}));

        if (props[0]) {
            const fetchTestimonial = yield Api.get(`${TESTIMONIAL}/${props[0]}`);
            const success = get(fetchTestimonial, 'data.success');
            if (success) {
                const testimonial = get(fetchTestimonial, 'data.data.testimonials');
                yield put(fetchTestimonialSucceeded({testimonial}));
                return;
            }
        }

        const fetchTestimonials = yield Api.get(`${TESTIMONIAL}`);
        const success = get(fetchTestimonials, 'data.success');
        if (success) {
            const testimonial = get(fetchTestimonials, 'data.data.testimonials');
            yield put(fetchTestimonialsSucceeded({testimonial}));
            return;
        }

        yield put(setSystemMessage(ERROR));
    } catch (err) {
        yield put(setSystemMessage(ERROR));
    } finally {
        yield put(setRequestFlag({flag: false}));
    }
}

function* submitTestimonialSagas({payload, id}) {
    try {
        yield put(setRequestFlag({flag: true}));

        if (id) {
            const editTestimonial = yield Api.put(`${TESTIMONIAL}/${id}`, payload);
            const success = get(editTestimonial, 'data.success');
            if (success) {
                const testimonial = get(editTestimonial, 'data.data.testimonials');
                yield put(fetchTestimonialSucceeded({testimonial}));
                yield put(cleanRegisterForm());
                yield put(setSystemMessage(SUCCESS));
                return;
            }
        }

        const createTestimonial = yield Api.post(`${TESTIMONIAL}`, payload);
        const success = get(createTestimonial, 'data.success');
        if (success) {
            yield put(cleanRegisterForm());
            yield put(setSystemMessage(SUCCESS));
            return;
        }

        yield put(setSystemMessage(ERROR));
    } catch (err) {
        yield put(setSystemMessage(ERROR));
    } finally {
        yield put(setRequestFlag({flag: false}));
    }
}

function* deleteTestimonialSagas({id}) {
    try {
        yield put(setRequestFlag({flag: true}));
        const deleteTestimonial = yield Api.delete(`${TESTIMONIAL}/${id}`);
        const success = get(deleteTestimonial, 'data.success');
        if (success) {
            yield put(setSystemMessage(SUCCESS));
            return;
        }
        yield put(setSystemMessage(ERROR));
    } catch (err) {
        yield put(setSystemMessage(ERROR));
    } finally {
        yield put(cleanRegisterForm());
        yield put(setRequestFlag({flag: false}));
        yield requestTestimonialSagas({});
    }
}

export default function* testimonialSagas() {
    yield all([
        takeLatest(FETCH_TESTIMONIAL_REQUESTED, requestTestimonialSagas),
        takeLatest(SUBMIT_TESTIMONIAL_REQUESTED, submitTestimonialSagas),
        takeLatest(DELETE_TESTIMONIAL_REQUESTED, deleteTestimonialSagas)
    ]);
}
