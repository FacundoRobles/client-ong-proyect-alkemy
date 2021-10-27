import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import fromState from '@core/selectors';
import {fetchUserRequested, deleteUserRequested} from '@core/state/User/actions';
import Component from './Component';

const mapStateToProps = state => ({
    list: fromState.User.getList(state),
    table: fromState.User.getTableProps(state)
});

export default connect(
    mapStateToProps,
    dispatch => bindActionCreators({
        fetchUserRequested,
        deleteUserRequested
    }, dispatch)
)(Component);
