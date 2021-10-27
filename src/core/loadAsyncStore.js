import {fetchOrganizationRequested} from './state/Organization/actions';
import {fetchSessionRequested} from './state/Session/actions';

export default store => {
    store.dispatch(fetchOrganizationRequested(1));
    store.dispatch(fetchSessionRequested());
    return store;
};
