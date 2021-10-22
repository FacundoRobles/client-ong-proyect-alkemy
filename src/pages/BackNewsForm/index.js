import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import fromState from '@core/selectors';
import {submitNewsRequested, fetchNewsRequested} from '@core/state/News/actions';
import Component from './Component';

export default connect(
    state => ({
        form: fromState.News.getNewsForm(state),
        fields: fromState.News.getNewsFields(state)
    }),
    dispatch => bindActionCreators({
        submitNewsRequested,
        fetchNewsRequested
    }, dispatch)
)(Component);
