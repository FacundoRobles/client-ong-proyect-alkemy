import constant from 'lodash/constant';

import {
    FETCH_SESSION_REQUESTED,
    FETCH_SESSION_SUCCEEDED
} from './types';

export const fetchSessionRequested = constant({
    type: FETCH_SESSION_REQUESTED
});

export const fetchSessionSucceeded = props => ({
    type: FETCH_SESSION_SUCCEEDED,
    ...props
});
