/* eslint-disable no-unused-vars */
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import fromState from '@core/selectors';
import {Activity} from '@core/actions';
import Component from './Component';

export default connect(
    state => ({
        activity: fromState.Activity.getActivities(state)
    }),
    dispatch => bindActionCreators({
        fetchActivitiesRequested: id => dispatch(Activity.fetchActivitiesRequested(id)),
        deleteActivityRequested: id => dispatch(Activity.deleteActivityRequested(id))
    }, dispatch)
)(Component);
