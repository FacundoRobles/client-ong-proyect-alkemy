import constant from 'lodash/constant';
import {
    SUBMIT_ACTIVITY_REQUESTED,
    FETCH_ACTIVITY_SUCCEEDED,
    FETCH_ACTIVITIES_REQUESTED,
    FETCH_ACTIVITIES_SUCCEEDED,
    DELETE_ACTIVITY_REQUESTED,
    CLEAN_ACTIVITY_FORM
} from './types';

export const submitActivityRequested = props => ({
    type: SUBMIT_ACTIVITY_REQUESTED,
    ...props
});

export const fetchActivitiesRequested = id => ({
    type: FETCH_ACTIVITIES_REQUESTED,
    id
});

export const fetchActivitiesSucceeded = props => ({
    type: FETCH_ACTIVITIES_SUCCEEDED,
    ...props
});

export const fetchActivitySucceeded = props => ({
    type: FETCH_ACTIVITY_SUCCEEDED,
    ...props
});

export const deleteActivityRequested = id => ({
    type: DELETE_ACTIVITY_REQUESTED,
    id
});

export const cleanActivityForm = constant({
    type: CLEAN_ACTIVITY_FORM
});
