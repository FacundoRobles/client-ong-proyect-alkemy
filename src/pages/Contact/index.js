/* eslint-disable no-unused-vars */
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import fromState from '@core/selectors';
import {Contact} from '@core/actions';
import Component from './Component';

export default connect(
    state => ({
        fields: fromState.Contact.getFields(state)
    }),
    dispatch => bindActionCreators({
        createContact: obj => dispatch(Contact.createContactRequested(obj))
    }, dispatch)
)(Component);
