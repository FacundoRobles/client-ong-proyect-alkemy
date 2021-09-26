import {
    createStore,
    applyMiddleware,
    compose
} from 'redux';
import middleware from '@core/middlewares';
import rootSaga from '@core/sagas';
import Reducers from '@core/reducers';

const composeEnhancers = compose;

const configureStore = () => createStore(
    Reducers({}),
    composeEnhancers(
        applyMiddleware(
            ...middleware
        )
    )
);

const store = configureStore();
const [sagaMiddleware] = middleware;
sagaMiddleware.run(rootSaga);

export default store;
