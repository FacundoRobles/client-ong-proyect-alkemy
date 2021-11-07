import React from 'react';
import Loader from 'react-loader-spinner';
import {useSelector} from 'react-redux';
import fromState from '@selectors';

const LoaderComponent = () => {
    const requestFlag = useSelector(fromState.Session.getRequestFlag);
    if (requestFlag) {
        return (
            <div className="overlay">
                <div className="loader">
                    <Loader
                        type="Puff"
                        color="#00BFFF"
                        height={70}
                        width={70}
                        timeout={5000}
                        text="Loading"
                    />
                    <h4 className="loader-text text-center">Cargando...</h4>
                </div>
            </div>
        );
    }
    return false;
};

export default LoaderComponent;
