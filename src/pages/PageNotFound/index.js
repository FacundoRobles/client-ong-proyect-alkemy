import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
// import fromState from '@core/selectors';
import Component from './Component';

export default connect(
    () => ({
        // selectors
    }),
    dispatch => bindActionCreators({
        // actions
    }, dispatch)
)(Component);
