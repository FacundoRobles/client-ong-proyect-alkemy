import {
    FETCH_NEWS_SUCCEEDED
} from './types';

const initialState = {
    list: {
        news: []
    }
};

const News = (state = initialState, {type, ...props}) => {
    switch (type) {
        case FETCH_NEWS_SUCCEEDED: {
            return {
                ...state,
                list: {
                    news: props
                }
            };
        }
        default:
            return state;
    }
};

export default News;
