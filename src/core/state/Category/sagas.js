import {
    all,
    put,
    takeLatest
} from 'redux-saga/effects';
import {
    CATEGORIES
} from '@Api/Urls';
import {
    SUCCESS,
    ERROR
} from '@utils/constants';

import get from 'lodash/get';
import Api from '@Api/Api';
import {
    SUBMIT_CATEGORY_REQUESTED,
    FETCH_CATEGORY_REQUESTED,
    DELETE_CATEGORY_REQUESTED
} from './types';
import {setRequestFlag, setSystemMessage} from '../Session/actions';
import {
    fetchCategoryRequested,
    fetchCategorySucceeded,
    fetchCategoriesSucceeded,
    cleanCategoryForm
} from './actions';

function* submitCategoryRequestedSagas({payload, id}) {
    try {
        let success = null;
        yield put(setRequestFlag({flag: true}));
        if (id) {
            const responseCategory = yield Api.put(`${CATEGORIES}/${id}`, payload);
            success = get(responseCategory, 'data.success');
        }
        if (!id) {
            const responseCategory = yield Api.post(`${CATEGORIES}`, payload);
            success = get(responseCategory, 'data.success');
        }
        if (success) {
            yield put(setSystemMessage(SUCCESS));
            yield put(cleanCategoryForm({}));
            yield put(fetchCategoryRequested({}));
        }
    } catch (err) {
        yield put(setSystemMessage(ERROR));
        throw Error(err);
    } finally {
        yield put(setRequestFlag({flag: false}));
    }
}

function* fetchCategoryRequestedSagas({id}) {
    try {
        yield put(setRequestFlag({flag: true}));
        if (id) {
            const response = yield Api.get(`${CATEGORIES}/${id}`);
            const category = get(response, 'data.data');
            return yield put(fetchCategorySucceeded({category}));
        }
        const categories = yield Api.get(`${CATEGORIES}`);
        const documents = get(categories, 'data.data');
        return yield put(fetchCategoriesSucceeded({documents}));
    } catch (err) {
        yield put(setSystemMessage(ERROR));
        throw Error(err);
    } finally {
        yield put(setRequestFlag({flag: false}));
    }
}

function* deleteCategoryRequestedSagas({id}) {
    try {
        yield put(setRequestFlag({flag: true}));
        yield Api.delete(`${CATEGORIES}/${id}`);
        yield put(fetchCategoryRequested());
        return yield put(setSystemMessage(SUCCESS));
    } catch (err) {
        yield put(setSystemMessage(ERROR));
        throw Error(err);
    } finally {
        yield put(setRequestFlag({flag: false}));
    }
}

export default function* categorySagas() {
    yield all([
        takeLatest(SUBMIT_CATEGORY_REQUESTED, submitCategoryRequestedSagas),
        takeLatest(FETCH_CATEGORY_REQUESTED, fetchCategoryRequestedSagas),
        takeLatest(DELETE_CATEGORY_REQUESTED, deleteCategoryRequestedSagas)
    ]);
}
