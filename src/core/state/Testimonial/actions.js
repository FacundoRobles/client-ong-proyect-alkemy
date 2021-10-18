import {
    FETCH_TESTIMONIALS_REQUESTED,
    FETCH_TESTIMONIALS_SUCCEEDED
} from './types';

export const fetchTestimonialsRequested = props => ({
    type: FETCH_TESTIMONIALS_REQUESTED,
    ...props
});

export const fetchTestimonialsSucceeded = props => ({
    type: FETCH_TESTIMONIALS_SUCCEEDED,
    ...props
});
