import constant from 'lodash/constant';
import {
    FETCH_LOGIN_REQUESTED,
    FETCH_LOGIN_SUCCEEDED,
    FETCH_SESSION_REQUESTED
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
