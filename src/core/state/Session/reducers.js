import {SET_REQUEST_FLAG} from './types';

const initialState = {
    requestingSession: true,
    user: {
        userAgent: {}
    },
    isAuthenticate: false,
    flagRequest: false
};

const Session = (state = initialState, {type, ...props}) => {
    switch (type) {
        case SET_REQUEST_FLAG: {
            return {
                ...state,
                flagRequest: props.flag
            };
        }
        default:
            return state;
    }
};

export default Session;
