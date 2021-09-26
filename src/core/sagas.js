import {all} from 'redux-saga/effects';
import session from './state/Session/sagas';

export default function* rootSagas() {
    yield all([
        session()
    ]);
}
