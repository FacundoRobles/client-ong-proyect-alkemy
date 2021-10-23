/* eslint-disable no-unused-vars */
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import fromState from '@core/selectors';
import {Testimonial} from '@core/actions';
import Component from './Component';

export default connect(
    state => ({
        testimonial: fromState.Testimonial.getTestimonials(state),
        fields: fromState.Testimonial.getFields(state),
        form: fromState.Testimonial.getForm(state)
    }),
    dispatch => bindActionCreators({
        submitTestimonialRequested: obj => dispatch(Testimonial.submitTestimonialRequested(obj)),
        fetchTestimonialRequested: id => dispatch(Testimonial.fetchTestimonialRequested(id)),
        deleteTestimonialRequested: id => dispatch(Testimonial.deleteTestimonialRequested(id))
    }, dispatch)
)(Component);
