import get from 'lodash/get';

const path = 'contact';

export const getContacts = state => get(state, `${path}.list.documents.contact`);
export const getForm = state => get(state, `${path}.form`);
export const getFields = state => get(state, `${path}.fields`);
