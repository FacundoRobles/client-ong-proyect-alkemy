/* eslint-disable no-unused-vars */
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import fromState from '@core/selectors';
import {Session, News, Testimonial} from '@core/actions';
import Component from './Component';

export default connect(
    state => ({
        form: fromState.Session.getFormWelcomeText(state),
        fields: fromState.Session.getFieldsWelcomeText(state),
        userAgent: fromState.Session.getUserAgent(state),
        items: fromState.Session.getSliderItems(state),
        testimonials: fromState.Testimonial.getTestimonials(state),
        news: fromState.News.getNews(state),
        organization: fromState.Organization.fetchOrganization(state)
    }),
    dispatch => bindActionCreators({
        submitSlideRequested: obj => dispatch(Session.submitSlideRequested(obj)),
        fetchNewsRequested: id => dispatch(News.fetchNewsRequested(id)),
        fetchTestimonialRequested: id => dispatch(Testimonial.fetchTestimonialRequested(id))
    }, dispatch)
)(Component);
