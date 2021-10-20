import {all} from 'redux-saga/effects';
import session from './state/Session/sagas';
import user from './state/User/sagas';
import news from './state/News/sagas';

export default function* rootSagas() {
    yield all([
        session(),
        user(),
        news()
    ]);
}
