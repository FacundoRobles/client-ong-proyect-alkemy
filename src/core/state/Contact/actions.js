import constant from 'lodash/constant';
import {
    SUBMIT_CONTACT_REQUESTED,
    FETCH_CONTACT_SUCCEEDED,
    FETCH_CONTACTS_REQUESTED,
    FETCH_CONTACTS_SUCCEEDED,
    DELETE_CONTACT_REQUESTED,
    CLEAN_REGISTER_FORM
} from './types';

export const submitContactRequested = props => ({
    type: SUBMIT_CONTACT_REQUESTED,
    ...props
});

export const fetchContactsRequested = props => ({
    type: FETCH_CONTACTS_REQUESTED,
    props
});

export const fetchContactsSucceeded = props => ({
    type: FETCH_CONTACTS_SUCCEEDED,
    ...props
});

export const fetchContactSucceeded = props => ({
    type: FETCH_CONTACT_SUCCEEDED,
    ...props
});

export const deleteContactRequested = idContact => ({
    type: DELETE_CONTACT_REQUESTED,
    idContact
});

export const cleanRegisterForm = constant({
    type: CLEAN_REGISTER_FORM
});
