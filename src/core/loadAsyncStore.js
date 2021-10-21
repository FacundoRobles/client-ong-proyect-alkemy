import {fetchOrganizationsRequested} from './state/Organization/actions';
import {fetchSessionRequested} from './state/Session/actions';

export default store => {
    store.dispatch(fetchSessionRequested());
    store.dispatch(fetchOrganizationsRequested({id: 1}));
    return store;
};
