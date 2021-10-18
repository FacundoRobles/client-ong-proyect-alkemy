import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router';

import session from './state/Session/reducers';
import testimonial from './state/Testimonial/reducers';
import news from './state/News/reducers';

export default history => combineReducers({
    router: connectRouter(history),
    session,
    testimonial,
    news
});
