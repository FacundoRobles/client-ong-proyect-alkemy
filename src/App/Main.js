import React from 'react';
import {HashRouter} from 'react-router-dom';
import {AnimatePresence} from 'framer-motion';
import Router from './Router';
import ErrorBoundary from './ErrorBoundary';
import LoaderComponent from '../components/LoaderComponent';
import 'animate.css';

const App = () => (
    <HashRouter>
        <ErrorBoundary>
            <LoaderComponent/>
            <AnimatePresence exitBeforeEnter>
                <Router/>
            </AnimatePresence>
        </ErrorBoundary>
    </HashRouter>
);

export default App;
