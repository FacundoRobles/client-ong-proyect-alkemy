import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router';

import session from './state/Session/reducers';

export default history => combineReducers({
    router: connectRouter(history),
    session
});
