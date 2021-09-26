import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {Container} from 'reactstrap';
import {getRoutes} from '@utils';
import Home from '@pages/Home';
import Header from './header';
import Footer from './footer';

const mainRoutes = getRoutes('mainRoutes');

const Router = () => {
    const isAuthenticate = useSelector(state => state.session.isAuthenticate);
    if (!isAuthenticate) {
        return (
            <>
                <Header/>
                <Container className="background">
                    <Switch>
                        <Route exact path={mainRoutes.home} component={Home}/>
                    </Switch>
                </Container>
                <Footer/>
            </>
        );
    }

    return (
        <>
            <Switch>
                <Route exact path={mainRoutes.home} key="activePerson" component={Home}/>
            </Switch>
        </>
    );
};
export default Router;
