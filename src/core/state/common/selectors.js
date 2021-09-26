import get from 'lodash/get';

export const getRouter = state => get(state, 'router.location');

export const getState = state => state;
