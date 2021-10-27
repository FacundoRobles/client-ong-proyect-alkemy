import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import fromState from '@core/selectors';
import {Contact} from '@core/actions';
import Component from './Component';

const mapStateToProps = state => ({
    list: fromState.Contact.getList(state),
    table: fromState.Contact.getTableProps(state)
});

export default connect(
    mapStateToProps,
    dispatch => bindActionCreators({
        fetchContactsRequested: id => dispatch(Contact.fetchContactsRequested(id))
    }, dispatch)
)(Component);
