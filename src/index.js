import 'react-hot-loader/patch';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {ConnectedRouter} from 'connected-react-router';

import App from 'App';
import store from '@core/store';
import history from '@core/middlewares/history';
import './scss/app.scss';

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App/>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('app')
);
