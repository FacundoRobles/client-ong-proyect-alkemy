/* eslint-disable import/prefer-default-export */
import get from 'lodash/get';

export const testimonials = state => get(state, 'testimonial.list.testimonials');
