import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import fromState from '@core/selectors';
import {fetchActivitiesRequested} from '@core/state/Activity/actions';
import Component from './Component';

export default connect(
    state => ({
        form: fromState.Activity.getForm(state),
        userAgent: fromState.Session.getUserAgent(state)
    }),
    dispatch => bindActionCreators({
        fetchActivitiesRequested
    }, dispatch)
)(Component);
