import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import fromState from '@core/selectors';
import {submitUserRequested, fetchUserRequested} from '@core/state/User/actions';
import Component from './Component';

export default connect(
    state => ({
        form: fromState.User.getRegisterForm(state),
        fields: fromState.User.getRegisterFieldsEdit(state)
    }),
    dispatch => bindActionCreators({
        submitUserRequested,
        fetchUserRequested
    }, dispatch)
)(Component);
