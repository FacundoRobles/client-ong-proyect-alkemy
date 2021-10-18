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
    try {
        if (values.payload) {
            const getOrganizationsApi = yield Api.get(`${ORGANIZATION}/${values.payload}`);
            const success = get(getOrganizationsApi, 'data.success');
            if (success) {
                const data = get(getOrganizationsApi, 'data.data');
                console.log(data);
                yield put(fetchOrganizationSucceeded(data));
            }
            return;
        }
        const getOrganizationsApi = yield Api.get(`${ORGANIZATION}`);
        const success = get(getOrganizationsApi, 'data.success');
        if (success) {
            const data = get(getOrganizationsApi, 'data.data');
            console.log(data);
            yield put(fetchOrganizationSucceeded(data));
        }
        return;
    } catch (err) {
        console.log(err);
    }
}

export default function* organizationSagas() {
    yield takeLatest(FETCH_ORGANIZATIONS_REQUESTED, getOrganizations);
}
