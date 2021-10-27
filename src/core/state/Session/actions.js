import constant from 'lodash/constant';
import {
    SET_REQUEST_FLAG,
    SET_SYSTEM_MSG,
    FETCH_SESSION_REQUESTED,
    FETCH_LOGIN_REQUESTED,
    FETCH_LOGIN_SUCCEEDED,
    SUBMIT_SLIDES_SUCCEEDED,
    SUBMIT_SLIDES_REQUESTED,
    FETCH_SLIDES_SUCCEEDED,
    LOGOUT
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

export const fetchSessionLogout = props => ({
    type: LOGOUT,
    ...props
});

export const setSystemMessage = props => ({
    type: SET_SYSTEM_MSG,
    ...props
});

export const submitSlideSucceeded = props => ({
    type: SUBMIT_SLIDES_SUCCEEDED,
    ...props
});

export const submitSlideRequested = props => ({
    type: SUBMIT_SLIDES_REQUESTED,
    ...props
});

export const fetchSlidesSucceeded = props => ({
    type: FETCH_SLIDES_SUCCEEDED,
    ...props
});
