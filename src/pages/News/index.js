/* eslint-disable no-unused-vars */
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import fromState from '@core/selectors';
import {fetchNewsRequested} from '@core/state/News/actions';
import Component from './Component';

export default connect(
    state => ({
        list: fromState.News.getNewsSlick(state),
        settings: fromState.Session.getSlickSettings(state)
    }),
    dispatch => bindActionCreators({
        fetchNewsRequested
    }, dispatch)
)(Component);
