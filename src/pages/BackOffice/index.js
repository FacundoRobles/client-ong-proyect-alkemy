/* eslint-disable no-unused-vars */
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import fromState from '@core/selectors';
import Component from './Component';

export default connect(
    state => ({

    }),
    dispatch => bindActionCreators({

    }, dispatch)
)(Component);
