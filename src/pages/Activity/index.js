/* eslint-disable no-unused-vars */
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import fromState from '@core/selectors';
import {Activity} from '@core/actions';
import Component from './Component';

export default connect(
    state => ({
        fields: fromState.Activity.getFields(state),
        form: fromState.Activity.getForm(state)
    }),
    dispatch => bindActionCreators({
        submitActivityRequested: obj => dispatch(Activity.submitActivityRequested(obj)),
        fetchActivitiesRequested: obj => dispatch(Activity.fetchActivitiesRequested(obj))
    }, dispatch)
)(Component);
