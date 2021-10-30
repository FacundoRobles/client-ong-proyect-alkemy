/* eslint-disable no-unused-vars */
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import fromState from '@core/selectors';
import {Testimonial} from '@core/actions';
import Component from './Component';

export default connect(
    state => ({
        testimonial: fromState.Testimonial.getTestimonials(state)
    }),
    dispatch => bindActionCreators({
        fetchTestimonialRequested: id => dispatch(Testimonial.fetchTestimonialRequested(id))
    }, dispatch)
)(Component);
