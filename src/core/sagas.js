import {all} from 'redux-saga/effects';
import session from './state/Session/sagas';
import testimonial from './state/Testimonial/sagas';
import news from './state/News/sagas';

export default function* rootSagas() {
    yield all([
        session(),
        testimonial(),
        news()
    ]);
}
