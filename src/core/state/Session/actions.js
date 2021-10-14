import constant from 'lodash/constant';
import {
    SET_REQUEST_FLAG,
    FETCH_SESSION_REQUESTED,
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

export const fetchSessionRequested = constant({
    type: FETCH_SESSION_REQUESTED
});

export const setRequestFlag = props => ({
    type: SET_REQUEST_FLAG,
    ...props
});
