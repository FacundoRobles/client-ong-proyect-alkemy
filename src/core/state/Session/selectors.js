import get from 'lodash/get';

// eslint-disable-next-line import/prefer-default-export
export const isAuthenticate = state => get(state, 'session.isAuthenticate');
