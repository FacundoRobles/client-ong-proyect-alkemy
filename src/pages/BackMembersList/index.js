/* eslint-disable no-unused-vars */
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import fromState from '@core/selectors';
import {Member} from '@core/actions';
import Component from './Component';

export default connect(
    state => ({
        members: fromState.Member.getList(state)
    }),
    dispatch => bindActionCreators({
        fetchMembersRequested: () => dispatch(Member.fetchMembersRequested())
    }, dispatch)
)(Component);
