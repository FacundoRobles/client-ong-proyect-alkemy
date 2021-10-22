import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import fromState from '@core/selectors';
import {fetchNewsRequested, deleteNewsRequested} from '@core/state/News/actions';
import Component from './Component';

const mapStateToProps = state => ({
    list: fromState.News.getList(state),
    table: fromState.News.getTableProps(state)
});

export default connect(
    mapStateToProps,
    dispatch => bindActionCreators({
        fetchNewsRequested,
        deleteNewsRequested
    }, dispatch)
)(Component);
