import React from 'react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {render} from '@testing-library/react';
import {Provider} from 'react-redux';
import '@testing-library/jest-dom';

import createStore from '@core/store';

function customRender(
    component,
    {
        store = createStore,
        route = '/',
        history = createMemoryHistory({initialEntries: [route]})
    } = {}
) {
    return {
        ...render(
            <Provider store={store}>
                <Router history={history}>{component}</Router>
            </Provider>
        ),
        store,
        history
    };
}

export * from '@testing-library/react';
export {customRender as render};
