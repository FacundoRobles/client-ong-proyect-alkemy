import {routerMiddleware} from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';

import history from './history';
import {sagaMonitor} from './devTools';

const isProduction = process.env.NODE_ENV === 'production';
const sagaMiddleware = isProduction ? createSagaMiddleware() : createSagaMiddleware({
    sagaMonitor
});

const middleware = [
    sagaMiddleware,
    routerMiddleware(history),
    ...(() => {
        if (process.env.NODE_ENV === 'development') { return []; }
        return [];
    })()
];
export default middleware;
