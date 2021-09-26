import {
    createStore,
    applyMiddleware,
    compose
} from 'redux';

import includes from 'lodash/includes';

import history from './middlewares/history';
import middleware from './middlewares';
import rootSaga from './sagas';
import Reducers from './reducers';

import {reactotronEnhancer} from './middlewares/devTools';

import LoadAsyncStore from './loadAsyncStore';

const composeEnhancers = compose;

const isProduction = includes(['production', 'test'], process.env.NODE_ENV);

const configureStore = preloadedState => {
    const store = createStore(
        Reducers(history),
        preloadedState,
        isProduction ? composeEnhancers(
            applyMiddleware(
                ...middleware
            )
        ) : composeEnhancers(
            applyMiddleware(
                ...middleware
            ),
            reactotronEnhancer
        )
    );

    return store;
};

const store = configureStore();
const [sagaMiddleware] = middleware;
let sagaTask = sagaMiddleware.run(rootSaga);

if (module.hot && !isProduction) {
    module.hot.accept('./reducers', () => { window.location.reload(); });
    module.hot.accept('./sagas', () => {
        sagaTask.cancel();
        sagaTask = sagaMiddleware.run(rootSaga);
    });
}

export default LoadAsyncStore(store);
