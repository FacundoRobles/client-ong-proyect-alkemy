/* eslint-disable no-unused-vars */
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import fromState from '@core/selectors';
import {Organization} from '@core/actions';
import Component from './Component';

export default connect(
    state => ({
        organizations: fromState.Organization.fetchOrganizations(state),
        fields: fromState.Organization.fetchFields(state),
        form: fromState.Organization.fetchForm(state)
    }),
    dispatch => bindActionCreators({
        submitOrganizationRequested: obj => dispatch(Organization.submitOrganizationRequested(obj)),
        fetchOrganizationRequested: id => dispatch(Organization.fetchOrganizationRequested(id))
    }, dispatch)
)(Component);
