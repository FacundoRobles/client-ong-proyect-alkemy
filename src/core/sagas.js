import {all} from 'redux-saga/effects';
import session from './state/Session/sagas';
import testimonial from './state/Testimonial/sagas';
import news from './state/News/sagas';
import user from './state/User/sagas';
import contact from './state/Contact/sagas';
import activity from './state/Activity/sagas';
import organization from './state/Organization/sagas';
import category from './state/Category/sagas';
import member from './state/Member/sagas';

export default function* rootSagas() {
    yield all([
        session(),
        user(),
        contact(),
        organization(),
        testimonial(),
        news(),
        activity(),
        category(),
        member()
    ]);
}
