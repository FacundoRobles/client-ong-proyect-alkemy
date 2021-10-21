/* eslint-disable import/no-named-default, import/prefer-default-export */
import get from 'lodash/get';

export const isOrganization = state => get(state, 'organization.organizations.socialNetworks');
