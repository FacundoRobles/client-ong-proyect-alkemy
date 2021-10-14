import {fetchSessionRequested} from './state/Session/actions';

export default store => {
    store.dispatch(fetchSessionRequested());
    return store;
};
