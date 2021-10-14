import React from 'react';
import {HashRouter} from 'react-router-dom';

import Router from './Router';
import ErrorBoundary from './ErrorBoundary';
import LoaderComponent from '../components/LoaderComponent';

const App = () => (
    <HashRouter>
        <ErrorBoundary>
            <LoaderComponent/>
            <Router/>
        </ErrorBoundary>
    </HashRouter>
);

export default App;
