/* eslint-disable no-unused-vars */
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import fromState from '@core/selectors';
import {fetchActivitiesRequested} from '@core/state/Activity/actions';
import Component from './Component';

export default connect(
    state => ({
        list: fromState.Activity.getActivitiesSlick(state),
        settings: fromState.Session.getSlickSettings(state)
    }),
    dispatch => bindActionCreators({
        fetchActivitiesRequested
    }, dispatch)
)(Component);
