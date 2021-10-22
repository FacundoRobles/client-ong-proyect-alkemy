/* eslint-disable no-console */
import {
    put,
    takeLatest
} from 'redux-saga/effects';
import get from 'lodash/get';
import {ORGANIZATION} from '@Api/Urls';
import Api from '@Api/Api';
import {
    FETCH_ORGANIZATIONS_REQUESTED
} from './types';
import {
    fetchOrganizationSucceeded
} from './actions';

function* getOrganizations(values) {
    const idRequest = values.idOrganization.id;
    try {
        if (idRequest) {
            const getOrganizationsApi = yield Api.get(`${ORGANIZATION}/${idRequest}`);
            const success = get(getOrganizationsApi, 'data.success');
            if (success) {
                const documents = get(getOrganizationsApi, 'data.data');
                yield put(fetchOrganizationSucceeded({documents}));
            }
            return;
        }
        const getOrganizationsApi = yield Api.get(`${ORGANIZATION}`);
        const success = get(getOrganizationsApi, 'data.success');
        if (success) {
            const documents = get(getOrganizationsApi, 'data.data');
            yield put(fetchOrganizationSucceeded({documents}));
        }
    } catch (err) {
        console.log(err);
    }
}

export default function* organizationSagas() {
    yield takeLatest(FETCH_ORGANIZATIONS_REQUESTED, getOrganizations);
}
