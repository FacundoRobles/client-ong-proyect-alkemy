import {
    FETCH_ORGANIZATION_SUCCEEDED
} from './types';

const initialState = {
    organizations: []
};
// eslint-disable-next-line no-unused-vars
const Organization = (state = initialState, {type, ...props}) => {
    switch (type) {
        case FETCH_ORGANIZATION_SUCCEEDED:
            return {
                ...state,
                organizations: props
            };
        default:
            return state;
    }
};

export default Organization;
