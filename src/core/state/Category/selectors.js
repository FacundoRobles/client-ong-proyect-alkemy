import get from 'lodash/get';

const path = 'category';

export const getCategoryForm = state => get(state, `${path}.categoryForm`);
export const getCategoryFields = state => get(state, `${path}.categoryFields`);
export const getCategories = state => get(state, `${path}.list.documents`);
