import constant from 'lodash/constant';
import {
    CLEAN_REGISTER_FORM,
    DELETE_TESTIMONIAL_REQUESTED,
    FETCH_TESTIMONIAL_REQUESTED,
    FETCH_TESTIMONIAL_SUCCEEDED,
    FETCH_TESTIMONIALS_REQUESTED,
    FETCH_TESTIMONIALS_SUCCEEDED,
    SUBMIT_TESTIMONIAL_REQUESTED
} from './types';

export const deleteTestimonialRequested = id => ({
    type: DELETE_TESTIMONIAL_REQUESTED,
    id
});

export const fetchTestimonialRequested = props => ({
    type: FETCH_TESTIMONIAL_REQUESTED,
    ...props
});

export const fetchTestimonialSucceeded = props => ({
    type: FETCH_TESTIMONIAL_SUCCEEDED,
    ...props
});

export const fetchTestimonialsRequested = props => ({
    type: FETCH_TESTIMONIALS_REQUESTED,
    ...props
});

export const fetchTestimonialsSucceeded = props => ({
    type: FETCH_TESTIMONIALS_SUCCEEDED,
    ...props
});

export const submitTestimonialRequested = props => ({
    type: SUBMIT_TESTIMONIAL_REQUESTED,
    ...props
});
export const cleanRegisterForm = constant({
    type: CLEAN_REGISTER_FORM
});
