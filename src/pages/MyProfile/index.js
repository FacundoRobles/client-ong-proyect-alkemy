/* eslint-disable no-unused-vars */
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import fromState from '@core/selectors';
import {deleteUserRequested} from '@core/state/User/actions';
import {fetchSessionLogout} from '@core/state/Session/actions';
import Component from './Component';

export default connect(
    state => ({
        form: fromState.Session.getSessionForm(state)
    }),
    dispatch => bindActionCreators({
        deleteUserRequested,
        fetchSessionLogout
    }, dispatch)
)(Component);
