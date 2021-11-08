/* eslint-disable no-console */
import {
    all,
    put,
    takeLatest
} from 'redux-saga/effects';
import get from 'lodash/get';
import Api from '@Api/Api';
import {getRoutes} from '@utils';
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
    cleanRegisterForm,
    fetchTestimonialRequested
} from './actions';
import {
    FETCH_TESTIMONIAL_REQUESTED,
    SUBMIT_TESTIMONIAL_REQUESTED,
    DELETE_TESTIMONIAL_REQUESTED
} from './types';

const backOfficeRoutes = getRoutes('backOffice');

function* requestTestimonialSagas(props) {
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

function* submitTestimonialSagas({payload, id, push}) {
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
                yield push(backOfficeRoutes.testimonial.list);
                return;
            }
        }

        const createTestimonial = yield Api.post(`${TESTIMONIAL}`, payload);
        const success = get(createTestimonial, 'data.success');
        if (success) {
            yield put(cleanRegisterForm());
            yield put(setSystemMessage(SUCCESS));
            yield push(backOfficeRoutes.testimonial.list);
            return;
        }
    } catch (err) {
        yield put(setSystemMessage(ERROR));
    } finally {
        yield put(setRequestFlag({flag: false}));
    }
}

function* deleteTestimonialSagas({id}) {
    try {
        yield put(setRequestFlag({flag: true}));
        yield Api.delete(`${TESTIMONIAL}/${id}`);
        yield put(setSystemMessage(SUCCESS));
    } catch (err) {
        yield put(setSystemMessage(ERROR));
    } finally {
        yield put(setRequestFlag({flag: false}));
        yield put(fetchTestimonialRequested({}));
    }
}

export default function* testimonialSagas() {
    yield all([
        takeLatest(FETCH_TESTIMONIAL_REQUESTED, requestTestimonialSagas),
        takeLatest(SUBMIT_TESTIMONIAL_REQUESTED, submitTestimonialSagas),
        takeLatest(DELETE_TESTIMONIAL_REQUESTED, deleteTestimonialSagas)
    ]);
}
