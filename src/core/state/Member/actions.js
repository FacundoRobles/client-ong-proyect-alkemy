import {
    FETCH_MEMBER_SUCCEEDED,
    FETCH_MEMBERS_REQUESTED,
    FETCH_MEMBERS_SUCCEEDED,
    SUBMIT_MEMBER_REQUESTED,
    DELETE_MEMBER_REQUESTED,
    CLEAN_MEMBER_FORM
} from './types';

export const fetchMemberSucceeded = props => ({
    type: FETCH_MEMBER_SUCCEEDED,
    ...props
});

export const fetchMembersRequested = props => ({
    type: FETCH_MEMBERS_REQUESTED,
    ...props
});

export const fetchMembersSucceeded = props => ({
    type: FETCH_MEMBERS_SUCCEEDED,
    ...props
});

export const submitMemberRequested = props => ({
    type: SUBMIT_MEMBER_REQUESTED,
    ...props
});

export const deleteMemberRequested = id => ({
    type: DELETE_MEMBER_REQUESTED,
    id
});

export const cleanMemberForm = props => ({
    type: CLEAN_MEMBER_FORM,
    props
});
