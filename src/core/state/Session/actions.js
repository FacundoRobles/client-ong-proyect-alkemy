import constant from 'lodash/constant';

import {
    FETCH_SESSION_REQUESTED,
    FETCH_SESSION_SUCCEEDED,
    SET_REQUEST_FLAG
} from './types';

export const fetchSessionRequested = constant({
    type: FETCH_SESSION_REQUESTED
});

export const fetchSessionSucceeded = props => ({
    type: FETCH_SESSION_SUCCEEDED,
    ...props
});

export const setRequestFlag = props => ({
    type: SET_REQUEST_FLAG,
    ...props
});
