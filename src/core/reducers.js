import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router';

import common from './state/common/reducers';
import session from './state/Session/reducers';

export default history => combineReducers({
    common,
    router: connectRouter(history),
    session
});
