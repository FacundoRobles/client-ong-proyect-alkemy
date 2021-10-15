/* eslint-disable import/no-named-default, import/prefer-default-export */
import {SET_SYSTEM_MSG} from './types';

export const setSystemMessage = props => ({
    type: SET_SYSTEM_MSG,
    ...props
});
