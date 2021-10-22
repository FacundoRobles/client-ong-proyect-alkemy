import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import fromState from '@core/selectors';
import {submitCategoryRequested, fetchCategoryRequested} from '@core/state/Category/actions';
import Component from './Component';

export default connect(
    state => ({
        form: fromState.Category.getCategoryForm(state),
        fields: fromState.Category.getCategoryFields(state)
    }),
    dispatch => bindActionCreators({
        submitCategoryRequested,
        fetchCategoryRequested
    }, dispatch)
)(Component);
