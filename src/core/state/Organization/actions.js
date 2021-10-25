import constant from 'lodash/constant';
import {
    CLEAN_ORGANIZATION_FORM,
    DELETE_ORGANIZATION_REQUESTED,
    FETCH_ORGANIZATION_REQUESTED,
    FETCH_ORGANIZATION_SUCCEEDED,
    FETCH_ORGANIZATIONS_REQUESTED,
    FETCH_ORGANIZATIONS_SUCCEEDED,
    FETCH_ORGANIZATIONFORM_SUCCEEDED,
    SUBMIT_ORGANIZATION_REQUESTED
} from './types';

export const deleteOrganizationRequested = id => ({
    type: DELETE_ORGANIZATION_REQUESTED,
    id
});

export const fetchOrganizationFormSucceeded = props => ({
    type: FETCH_ORGANIZATIONFORM_SUCCEEDED,
    ...props
});

export const fetchOrganizationRequested = id => ({
    type: FETCH_ORGANIZATION_REQUESTED,
    id
});

export const fetchOrganizationSucceeded = props => ({
    type: FETCH_ORGANIZATION_SUCCEEDED,
    ...props
});

export const fetchOrganizationsRequested = props => ({
    type: FETCH_ORGANIZATIONS_REQUESTED,
    ...props
});

export const fetchOrganizationsSucceeded = props => ({
    type: FETCH_ORGANIZATIONS_SUCCEEDED,
    ...props
});

export const submitOrganizationRequested = props => ({
    type: SUBMIT_ORGANIZATION_REQUESTED,
    ...props
});

export const cleanOrganizationForm = constant({
    type: CLEAN_ORGANIZATION_FORM
});
