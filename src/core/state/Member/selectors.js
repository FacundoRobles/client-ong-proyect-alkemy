import get from 'lodash/get';

const path = 'member';

export const getMemberForm = state => get(state, `${path}.memberForm`);
export const getMemberFields = state => get(state, `${path}.memberFields`);
export const getList = state => get(state, `${path}.list.documents`);
