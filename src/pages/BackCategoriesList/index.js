/* eslint-disable no-unused-vars */
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import fromState from '@core/selectors';
import {Category} from '@core/actions';
import Component from './Component';

export default connect(
    state => ({
        categories: fromState.Category.getCategories(state)
    }),
    dispatch => bindActionCreators({
        fetchCategoriesRequested: id => dispatch(Category.fetchCategoryRequested(id)),
        deleteCategoryRequested: id => dispatch(Category.deleteCategoryRequested(id))
    }, dispatch)
)(Component);
