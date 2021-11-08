import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchTestimonialRequested} from '@core/state/Testimonial/actions';
import fromState from '@core/selectors';
import Component from './Component';

export default connect(
    state => ({
        form: fromState.Testimonial.getForm(state),
        userAgent: fromState.Session.getUserAgent(state)
    }),
    dispatch => bindActionCreators({
        fetchTestimonialRequested
    }, dispatch)
)(Component);
