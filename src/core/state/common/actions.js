/* eslint-disable import/prefer-default-export */
import {SET_I18N} from './types';

export const setI18N = i18n => ({
    type: SET_I18N, i18n
});
