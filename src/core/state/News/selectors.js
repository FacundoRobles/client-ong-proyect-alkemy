import get from 'lodash/get';

const path = 'news';

export const getNewsForm = state => get(state, `${path}.newsForm`);
export const getNewsFields = state => get(state, `${path}.newsFields`);
