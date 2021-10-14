import {
    FETCH_LOGIN_REQUESTED,
    FETCH_LOGIN_SUCCEEDED,
    FETCH_SESSION_REQUESTED
} from './types';

const initialState = {
    requestingSession: false,
    user: {
        userAgent: {}
    },
    isAuthenticate: false,
    reCaptcha: {}
};

// eslint-disable-next-line no-unused-vars
const Session = (state = initialState, {type, ...props}) => {
    switch (type) {
        case FETCH_LOGIN_REQUESTED:
            return {
                ...state,
                requestingSession: true
            };
        case FETCH_LOGIN_SUCCEEDED:
            return {
                ...state,
                requestingSession: false,
                user: {
                    userAgent: props
                },
                isAuthenticate: true
            };
        case FETCH_SESSION_REQUESTED:
            return {
                ...state,
                requestingSession: true
            };
        default:
            return state;
    }
};

export default Session;
