import {
    FETCH_TESTIMONIALS_SUCCEEDED
} from './types';

const initialState = {
    list: {
        testimonials: []
    }
};

const Testimonial = (state = initialState, {type, ...props}) => {
    switch (type) {
        case FETCH_TESTIMONIALS_SUCCEEDED: {
            return {
                ...state,
                list: {
                    testimonials: props
                }
            };
        }
        default:
            return state;
    }
};

export default Testimonial;
