import constant from 'lodash/constant';
import {
    SUBMIT_ACTIVITY_REQUESTED,
    FETCH_ACTIVITY_SUCCEEDED,
    FETCH_ACTIVITIES_REQUESTED,
    FETCH_ACTIVITIES_SUCCEEDED,
    DELETE_ACTIVITY_REQUESTED,
    CLEAN_REGISTER_FORM
} from './types';

export const submitActivityRequested = props => ({
    type: SUBMIT_ACTIVITY_REQUESTED,
    ...props
});

export const fetchActivitiesRequested = props => ({
    type: FETCH_ACTIVITIES_REQUESTED,
    ...props
});

export const fetchActivitiesSucceeded = props => ({
    type: FETCH_ACTIVITIES_SUCCEEDED,
    ...props
});

export const fetchActivitySucceeded = props => ({
    type: FETCH_ACTIVITY_SUCCEEDED,
    ...props
});


export const deleteActivityRequested = idActivity => ({
    type: DELETE_ACTIVITY_REQUESTED,
    idActivity
});

export const cleanRegisterForm = constant({
    type: CLEAN_REGISTER_FORM
});