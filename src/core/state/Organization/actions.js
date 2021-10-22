import {
    FETCH_ORGANIZATIONS_REQUESTED,
    FETCH_ORGANIZATION_SUCCEEDED
} from './types';

export const fetchOrganizationsRequested = idOrganization => ({
    type: FETCH_ORGANIZATIONS_REQUESTED,
    idOrganization
});

export const fetchOrganizationSucceeded = props => ({
    type: FETCH_ORGANIZATION_SUCCEEDED,
    ...props
});
