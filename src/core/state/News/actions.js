import {
    FETCH_NEWS_REQUESTED,
    FETCH_NEWS_SUCCEEDED
} from './types';

export const fetchNewsRequested = props => ({
    type: FETCH_NEWS_REQUESTED,
    ...props
});

export const fetchNewsSucceeded = props => ({
    type: FETCH_NEWS_SUCCEEDED,
    ...props
});
