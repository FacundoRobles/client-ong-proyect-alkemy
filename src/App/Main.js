import React from 'react';
import {HashRouter} from 'react-router-dom';

import Router from './Router';
import ErrorBoundary from './ErrorBoundary';

const App = () => (
    <HashRouter>
        <ErrorBoundary>
            <Router/>
        </ErrorBoundary>
    </HashRouter>
);

export default App;
