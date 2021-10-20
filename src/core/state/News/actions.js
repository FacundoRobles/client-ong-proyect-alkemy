import {
    SUBMIT_NEWS_REQUESTED,
    FETCH_NEWS_REQUESTED,
    FETCH_ONE_NEWS_SUCCEEDED,
    FETCH_NEWS_SUCCEEDED,
    DELETE_NEWS_REQUESTED,
    CLEAN_NEWS_FORM
} from './types';

export const submitNewsRequested = values => ({
    type: SUBMIT_NEWS_REQUESTED,
    values
});

export const fetchNewsRequested = props => ({
    type: FETCH_NEWS_REQUESTED,
    ...props
});

export const fetchOneNewsSucceeded = props => ({
    type: FETCH_ONE_NEWS_SUCCEEDED,
    ...props
});

export const fetchNewsSucceeded = props => ({
    type: FETCH_NEWS_SUCCEEDED,
    ...props
});

export const deleteNewsRequested = id => ({
    type: DELETE_NEWS_REQUESTED,
    id
});

export const cleanNewsForm = props => ({
    type: CLEAN_NEWS_FORM,
    props
});
