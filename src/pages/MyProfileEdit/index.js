/* eslint-disable no-unused-vars */
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import fromState from '@core/selectors';
import {submitUserRequested} from '@core/state/User/actions';
import Component from './Component';

export default connect(
    state => ({
        user: fromState.Session.getUserAgent(state),
        form: fromState.Session.getSessionForm(state),
        fields: fromState.Session.getSessionFields(state)
    }),
    dispatch => bindActionCreators({
        submitUserRequested
    }, dispatch)
)(Component);
