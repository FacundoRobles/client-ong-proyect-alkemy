/* eslint-disable import/no-named-default, import/prefer-default-export */
import get from 'lodash/get';

const path = 'organization';

export const isOrganization = state => get(state, `${path}.organization.socialNetworks`);
export const fetchOrganization = state => get(state, `${path}.organization`);
export const fetchOrganizations = state => get(state, `${path}.organizations`);
export const fetchForm = state => get(state, `${path}.form`);
export const fetchFields = state => get(state, `${path}.fields`);
