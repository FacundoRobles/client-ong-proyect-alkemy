import get from 'lodash/get';

const path = 'activity';

export const getActivities = state => get(state, `${path}.list.documents`);
export const getForm = state => get(state, `${path}.form`);
export const getFields = state => get(state, `${path}.fields`);
