import {
    all,
    put,
    takeLatest
} from 'redux-saga/effects';
import get from 'lodash/get';
import Api from '@Api/Api';
import {
    ACTIVITY
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
    fetchActivitiesSucceeded,
    fetchActivitySucceeded,
    cleanActivityForm,
    fetchActivitiesRequested
} from './actions';
import {
    FETCH_ACTIVITIES_REQUESTED,
    SUBMIT_ACTIVITY_REQUESTED,
    DELETE_ACTIVITY_REQUESTED
} from './types';

// eslint-disable-next-line consistent-return
function* requestActivitiesSagas({id}) {
    try {
        yield put(setRequestFlag({flag: true}));
        if (id) {
            const getActivity = yield Api.get(`${ACTIVITY}/${id}`);
            const success = get(getActivity, 'data.success');
            if (success) {
                const activity = get(getActivity, 'data.data');
                if (!activity) {
                    return yield put(cleanActivityForm({}));
                }
                return yield put(fetchActivitySucceeded({activity}));
            }
        }
        const getActivities = yield Api.get(ACTIVITY);
        const success = get(getActivities, 'data.success');
        if (success) {
            const documents = get(getActivities, 'data.data');
            return yield put(fetchActivitiesSucceeded({documents}));
        }
    } catch (err) {
        yield put(setSystemMessage(ERROR));
    } finally {
        yield put(setRequestFlag({flag: false}));
    }
}

function* submitActivitiesSagas({payload, id}) {
    try {
        if (id) {
            yield put(setRequestFlag({flag: true}));
            const editActivity = yield Api.put(`${ACTIVITY}/${id}`, payload);
            const success = get(editActivity, 'data.success');
            if (success) {
                const activity = get(editActivity, 'data.data');
                yield put(fetchActivitySucceeded({activity}));
                yield put(cleanActivityForm());
                yield put(setSystemMessage(SUCCESS));
                return;
            }
        }

        const createActivity = yield Api.post(`${ACTIVITY}`, payload);
        const success = get(createActivity, 'data.success');
        if (success) {
            yield put(cleanActivityForm());
            yield put(setSystemMessage(SUCCESS));
            yield put(fetchActivitiesRequested());
            return;
        }
    } catch (err) {
        yield put(setSystemMessage(ERROR));
    } finally {
        yield put(setRequestFlag({flag: false}));
    }
}

function* deleteActivitySagas({id}) {
    try {
        yield put(setRequestFlag({flag: true}));
        const deleteActivity = yield Api.delete(`${ACTIVITY}/${id}`);
        const success = get(deleteActivity, 'data.success');
        if (success) {
            yield put(setSystemMessage(SUCCESS));
            yield put(fetchActivitiesRequested());
            return;
        }
    } catch (err) {
        yield put(setSystemMessage(ERROR));
    } finally {
        yield put(setRequestFlag({flag: false}));
    }
}

export default function* testimonialSagas() {
    yield all([
        takeLatest(FETCH_ACTIVITIES_REQUESTED, requestActivitiesSagas),
        takeLatest(SUBMIT_ACTIVITY_REQUESTED, submitActivitiesSagas),
        takeLatest(DELETE_ACTIVITY_REQUESTED, deleteActivitySagas)
    ]);
}
