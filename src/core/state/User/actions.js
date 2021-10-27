import {
    SUBMIT_USER_REQUESTED,
    FETCH_USER_REQUESTED,
    FETCH_USER_SUCCEEDED,
    FETCH_USERS_SUCCEEDED,
    DELETE_USER_REQUESTED,
    CLEAN_REGISTER_FORM
} from './types';

export const submitUserRequested = props => ({
    type: SUBMIT_USER_REQUESTED,
    ...props
});

export const fetchUserRequested = props => ({
    type: FETCH_USER_REQUESTED,
    ...props
});

export const fetchUserSucceeded = props => ({
    type: FETCH_USER_SUCCEEDED,
    ...props
});

export const fetchUsersSucceeded = props => ({
    type: FETCH_USERS_SUCCEEDED,
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
