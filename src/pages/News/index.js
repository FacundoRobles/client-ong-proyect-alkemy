/* eslint-disable no-unused-vars */
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import fromState from '@core/selectors';
import {News} from '@core/actions';
import Component from './Component';

export default connect(
    state => ({
        news: fromState.News.getNews(state)
    }),
    dispatch => bindActionCreators({
        fetchNewsRequested: id => dispatch(News.fetchNewsRequested(id))
    }, dispatch)
)(Component);
