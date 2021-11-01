import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import fromState from '@core/selectors';
import {fetchTestimonialRequested} from '@core/state/Testimonial/actions';
import Component from './Component';

export default connect(
    state => ({
        list: fromState.Testimonial.getTestimonialsSlick(state),
        settings: fromState.Session.getSlickSettings(state)
    }),
    dispatch => bindActionCreators({
        fetchTestimonialRequested
    }, dispatch)
)(Component);
