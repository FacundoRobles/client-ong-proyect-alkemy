import React from 'react';
import {HashRouter} from 'react-router-dom';
import {useSelector} from 'react-redux';

import Router from './Router';
import ErrorBoundary from './ErrorBoundary';

const App = () => {
    // eslint-disable-next-line no-unused-vars
    const requestingSession = useSelector(state => state.session.requestingSession);

    // eslint-disable-next-line no-constant-condition
    if (false) {
        return (
            <HashRouter>
                <h4 className="text-center my-auto">
                    Cargando datos básicos de la aplicación
                </h4>
            </HashRouter>
        );
    }

    return (
        <HashRouter>
            <ErrorBoundary>
                <Router/>
            </ErrorBoundary>
        </HashRouter>
    );
};

export default App;
