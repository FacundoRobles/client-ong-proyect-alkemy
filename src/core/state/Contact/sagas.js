/* eslint-disable no-console */
import {
    all,
    put,
    takeLatest
} from 'redux-saga/effects';
import get from 'lodash/get';
import Api from '@Api/Api';
import {
    CONTACT
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
    fetchContactsSucceeded,
    fetchContactSucceeded,
    cleanRegisterForm
} from './actions';
import {
    FETCH_CONTACTS_REQUESTED,
    SUBMIT_CONTACT_REQUESTED,
    DELETE_CONTACT_REQUESTED
} from './types';

function* requestContactSagas({idContact}) {
    try {
        if (idContact) {
            yield put(setRequestFlag({flag: true}));
            const getContact = yield Api.get(`${CONTACT}/${idContact}`);
            const success = get(getContact, 'data.success');
            if (success) {
                const contact = get(getContact, 'data.data');
                yield put(fetchContactSucceeded({contact}));
                return;
            }
        }
        yield put(setRequestFlag({flag: true}));
        const getContacts = yield Api.get(CONTACT);
        const success = get(getContacts, 'data.success');
        if (success) {
            const contact = get(getContacts, 'data.data');
            yield put(fetchContactsSucceeded({contact}));
            return;
        }
    } catch (err) {
        yield put(setSystemMessage(ERROR));
    } finally {
        yield put(setRequestFlag({flag: false}));
    }
}

function* submitContactSagas({
    payload, id
}) {
    const obj = {
        name: payload.name,
        email: payload.email,
        message: payload.message
    };
    const idContact = id.id;
    try {
        if (idContact) {
            yield put(setRequestFlag({flag: true}));
            const editContact = yield Api.put(`${CONTACT}/${idContact}`, obj);
            const success = get(editContact, 'data.success');
            if (success) {
                const contact = get(editContact, 'data.data');
                yield put(fetchContactSucceeded({contact}));
                yield put(cleanRegisterForm());
                yield put(setSystemMessage(SUCCESS));
                return;
            }
        }
        yield put(setRequestFlag({flag: true}));
        const createContact = yield Api.post(`${CONTACT}`, obj);
        const success = get(createContact, 'data.success');
        if (success) {
            yield put(cleanRegisterForm());
            yield put(setSystemMessage(SUCCESS));
            yield requestContactSagas({idContact: null});
            return;
        }
    } catch (err) {
        yield put(setSystemMessage(ERROR));
    } finally {
        yield put(setRequestFlag({flag: false}));
    }
}

function* deleteContactSagas(values) {
    try {
        yield put(setRequestFlag({flag: true}));
        const deleteContact = yield Api.delete(`${CONTACT}/${values.idContact}`);
        const success = get(deleteContact, 'data.success');
        if (success) {
            yield put(cleanRegisterForm());
            yield put(setSystemMessage(SUCCESS));
            yield requestContactSagas({idContact: null});
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
        takeLatest(FETCH_CONTACTS_REQUESTED, requestContactSagas),
        takeLatest(SUBMIT_CONTACT_REQUESTED, submitContactSagas),
        takeLatest(DELETE_CONTACT_REQUESTED, deleteContactSagas)
    ]);
}
