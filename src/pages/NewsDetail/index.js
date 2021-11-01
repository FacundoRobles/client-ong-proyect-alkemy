import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import fromState from '@core/selectors';
import {fetchNewsRequested} from '@core/state/News/actions';
import Component from './Component';

export default connect(
    state => ({
        form: fromState.News.getNewsForm(state),
        userAgent: fromState.Session.getUserAgent(state)
    }),
    dispatch => bindActionCreators({
        fetchNewsRequested
    }, dispatch)
)(Component);
