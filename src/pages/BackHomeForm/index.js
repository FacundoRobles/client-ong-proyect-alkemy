/* eslint-disable no-unused-vars */
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import fromState from '@core/selectors';
import {Session} from '@core/actions';
import Component from './Component';

export default connect(
    state => ({
        form: fromState.Session.getFormWelcomeText(state),
        fields: fromState.Session.getFieldsWelcomeText(state),
        userAgent: fromState.Session.getUserAgent(state),
        items: fromState.Session.getSliderItems(state)
    }),
    dispatch => bindActionCreators({
        submitSlideRequested: obj => dispatch(Session.submitSlideRequested(obj))
    }, dispatch)
)(Component);
