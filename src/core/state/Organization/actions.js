import {
    FETCH_ORGANIZATIONS_REQUESTED,
    FETCH_ORGANIZATION_SUCCEEDED
} from './types';

export const fetchOrganizationsRequested = id => ({
    type: FETCH_ORGANIZATIONS_REQUESTED,
    payload: id
});

export const fetchOrganizationSucceeded = props => ({
    type: FETCH_ORGANIZATION_SUCCEEDED,
    ...props
});
