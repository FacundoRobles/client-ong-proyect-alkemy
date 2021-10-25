/* eslint-disable no-console */
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
    cleanActivityForm
} from './actions';
import {
    FETCH_ACTIVITIES_REQUESTED,
    SUBMIT_ACTIVITY_REQUESTED,
    DELETE_ACTIVITY_REQUESTED
} from './types';

// eslint-disable-next-line consistent-return
function* requestActivitiesSagas({idActivity}) {
    try {
        yield put(setRequestFlag({flag: true}));
        if (idActivity) {
            const getActivity = yield Api.get(`${ACTIVITY}/${idActivity}`);
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
            const activity = get(getActivities, 'data.activities');
            return yield put(fetchActivitiesSucceeded({activity}));
        }
    } catch (err) {
        yield put(setSystemMessage(ERROR));
    } finally {
        yield put(setRequestFlag({flag: false}));
    }
}

function* submitActivitiesSagas({
    payload, id
}) {
    const obj = {
        name: payload.name,
        image: payload.image,
        content: payload.content
    };
    const idActivity = id.id;
    try {
        if (idActivity) {
            yield put(setRequestFlag({flag: true}));
            const editActivity = yield Api.put(`${ACTIVITY}/${idActivity}`, obj);
            const success = get(editActivity, 'data.success');
            if (success) {
                const activity = get(editActivity, 'data.activities');
                yield put(fetchActivitySucceeded({activity}));
                yield put(cleanActivityForm());
                yield put(setSystemMessage(SUCCESS));
                return;
            }
        }
        yield put(setRequestFlag({flag: true}));
        const createActivity = yield Api.post(`${ACTIVITY}`, obj);
        const success = get(createActivity, 'data.success');
        if (success) {
            yield put(cleanActivityForm());
            yield put(setSystemMessage(SUCCESS));
            yield requestActivitiesSagas({idActivity: null});
            return;
        }
    } catch (err) {
        yield put(setSystemMessage(ERROR));
    } finally {
        yield put(setRequestFlag({flag: false}));
    }
}

function* deleteActivitySagas(values) {
    try {
        yield put(setRequestFlag({flag: true}));
        const deleteActivity = yield Api.delete(`${ACTIVITY}/${values.idActivity}`);
        const success = get(deleteActivity, 'data.success');
        if (success) {
            yield put(cleanActivityForm());
            yield put(setSystemMessage(SUCCESS));
            yield requestActivitiesSagas({idActivity: null});
            return;
        }
        yield put(setSystemMessage(ERROR));
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
