import {
    SUBMIT_CATEGORY_REQUESTED,
    FETCH_CATEGORY_REQUESTED,
    FETCH_CATEGORIES_SUCCEEDED,
    DELETE_CATEGORY_REQUESTED,
    CLEAN_CATEGORY_FORM,
    FETCH_CATEGORY_SUCCEEDED
} from './types';

export const submitCategoryRequested = props => ({
    type: SUBMIT_CATEGORY_REQUESTED,
    ...props
});

export const fetchCategoryRequested = id => ({
    type: FETCH_CATEGORY_REQUESTED,
    id
});

export const fetchCategorySucceeded = props => ({
    type: FETCH_CATEGORY_SUCCEEDED,
    ...props
});

export const fetchCategoriesSucceeded = props => ({
    type: FETCH_CATEGORIES_SUCCEEDED,
    ...props
});

export const deleteCategoryRequested = id => ({
    type: DELETE_CATEGORY_REQUESTED,
    id
});

export const cleanCategoryForm = props => ({
    type: CLEAN_CATEGORY_FORM,
    props
});
