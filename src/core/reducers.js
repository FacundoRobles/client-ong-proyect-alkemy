import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router';

import session from './state/Session/reducers';
import testimonial from './state/Testimonial/reducers';
import news from './state/News/reducers';
import user from './state/User/reducers';
import contact from './state/Contact/reducers';
import activity from './state/Activity/reducers';
import organization from './state/Organization/reducers';
import category from './state/Category/reducers';
import member from './state/Member/reducers';

export default history => combineReducers({
    router: connectRouter(history),
    session,
    user,
    contact,
    organization,
    testimonial,
    news,
    activity,
    category,
    member
});
