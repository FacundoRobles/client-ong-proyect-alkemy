import {
    SUBMIT_USER_REQUESTED,
    FETCH_USER_REQUESTED,
    FETCH_USER_SUCCEEDED,
    DELETE_USER_REQUESTED,
    CLEAN_REGISTER_FORM
} from './types';

export const submitUserRequested = values => ({
    type: SUBMIT_USER_REQUESTED,
    payload: values
});

export const fetchUserRequested = props => ({
    type: FETCH_USER_REQUESTED,
    props
});

export const fetchUserSucceeded = props => ({
    type: FETCH_USER_SUCCEEDED,
    ...props
});

export const deleteUserRequested = id => ({
    type: DELETE_USER_REQUESTED,
    id
});

export const cleanRegisterForm = props => ({
    type: CLEAN_REGISTER_FORM,
    props
});
