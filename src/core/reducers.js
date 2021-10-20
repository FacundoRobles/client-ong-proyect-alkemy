import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router';

import session from './state/Session/reducers';
import user from './state/User/reducers';
import contact from './state/Contact/reducers';

export default history => combineReducers({
    router: connectRouter(history),
    session,
    user,
    contact
});
