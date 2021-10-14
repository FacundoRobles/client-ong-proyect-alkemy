import {
    SET_REQUEST_FLAG,
    FETCH_LOGIN_REQUESTED,
    FETCH_LOGIN_SUCCEEDED
} from './types';

export const fetchLoginRequested = values => ({
    type: FETCH_LOGIN_REQUESTED,
    payload: values
});

export const fetchLoginSucceeded = props => ({
    type: FETCH_LOGIN_SUCCEEDED,
    ...props
});

export const setRequestFlag = props => ({
    type: SET_REQUEST_FLAG,
    ...props
});
