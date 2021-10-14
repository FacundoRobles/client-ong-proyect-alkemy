import get from 'lodash/get';

export const isAuthenticate = state => get(state, 'session.isAuthenticate');
export const getRequestFlag = state => get(state, 'session.flagRequest');
