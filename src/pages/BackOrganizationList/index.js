/* eslint-disable no-unused-vars */
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import fromState from '@core/selectors';
import {Organization} from '@core/actions';
import Component from './Component';

export default connect(
    state => ({
        organizations: fromState.Organization.fetchOrganizations(state)
    }),
    dispatch => bindActionCreators({
        fetchOrganizationRequested: id => dispatch(Organization.fetchOrganizationRequested(id)),
        deleteOrganizationRequested: id => dispatch(Organization.deleteOrganizationRequested(id))
    }, dispatch)
)(Component);
