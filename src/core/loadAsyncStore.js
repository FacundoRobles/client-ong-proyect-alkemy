import {fetchLoginRequested} from './state/Session/actions';

export default store => {
    store.dispatch(fetchLoginRequested());
    return store;
};
