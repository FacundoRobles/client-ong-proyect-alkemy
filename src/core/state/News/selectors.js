/* eslint-disable import/prefer-default-export */
import get from 'lodash/get';

export const news = state => get(state, 'news.list.news');
