/* eslint-disable no-console */
import {
    put,
    takeLatest
} from 'redux-saga/effects';
import get from 'lodash/get';
import {ORGANIZATION} from '@Api/Urls';
import Api from '@Api/Api';
import {getRoutes} from '@utils';
import {
    SUCCESS,
    ERROR
} from '@utils/constants';
import {
    FETCH_ORGANIZATION_REQUESTED,
    SUBMIT_ORGANIZATION_REQUESTED,
    DELETE_ORGANIZATION_REQUESTED
} from './types';
import {
    fetchOrganizationSucceeded,
    fetchOrganizationsSucceeded,
    fetchOrganizationFormSucceeded,
    cleanOrganizationForm
} from './actions';
import {
    fetchSlidesSucceeded,
    setRequestFlag,
    setSystemMessage
} from '../Session/actions';

const backOfficeRoutes = getRoutes('backOffice');

function* getOrganizations({id}) {
    try {
        if (id) {
            const getOrganizationsApi = yield Api.get(`${ORGANIZATION}/${id}`);
            const success = get(getOrganizationsApi, 'data.success');
            if (success) {
                const documents = get(getOrganizationsApi, 'data.data');
                yield put(fetchOrganizationSucceeded({documents}));
                yield put(fetchOrganizationFormSucceeded({documents}));
                yield put(fetchSlidesSucceeded({documents}));
                return;
            }
        }

        const getOrganizationsApi = yield Api.get(`${ORGANIZATION}`);
        const success = get(getOrganizationsApi, 'data.success');
        if (success) {
            const documents = get(getOrganizationsApi, 'data.data');
            yield put(fetchOrganizationsSucceeded({documents}));
            return;
        }
    } catch (err) {
        yield put(setSystemMessage(ERROR));
    }
}

function* submitOrganizationSagas({payload, id, push}) {
    console.log(payload);
    console.log(id);
    const {name, image} = payload;
    try {
        yield put(setRequestFlag({flag: true}));

        if (id) {
            const editOrganization = yield Api.put(`${ORGANIZATION}/${id}`, {name, image});
            const success = get(editOrganization, 'data.success');
            if (success) {
                const documents = get(editOrganization, 'data.data');
                yield put(fetchOrganizationFormSucceeded({documents}));
                yield put(setSystemMessage(SUCCESS));
                yield push(backOfficeRoutes.organization.list);
                return;
            }
        }

        const createOrganization = yield Api.post(`${ORGANIZATION}`, {name, image});
        const success = get(createOrganization, 'data.success');
        if (success) {
            yield put(setSystemMessage(SUCCESS));
            yield push(backOfficeRoutes.organization.list);
            return;
        }
    } catch (err) {
        yield put(setSystemMessage(ERROR));
    } finally {
        yield put(setRequestFlag({flag: false}));
        yield put(cleanOrganizationForm());
    }
}

function* deleteOrganizationSagas({id}) {
    try {
        yield put(setRequestFlag({flag: true}));
        if (id) {
            yield Api.delete(`${ORGANIZATION}/${id}`);
            yield put(setSystemMessage(SUCCESS));
            return;
        }
        yield put(setSystemMessage(ERROR));
    } catch (err) {
        yield put(setSystemMessage(ERROR));
    } finally {
        yield put(setRequestFlag({flag: false}));
        yield getOrganizations({});
    }
}

export default function* organizationSagas() {
    yield takeLatest(FETCH_ORGANIZATION_REQUESTED, getOrganizations);
    yield takeLatest(SUBMIT_ORGANIZATION_REQUESTED, submitOrganizationSagas);
    yield takeLatest(DELETE_ORGANIZATION_REQUESTED, deleteOrganizationSagas);
}
