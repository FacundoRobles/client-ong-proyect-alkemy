import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {Container} from 'reactstrap';
import {getRoutes} from '@utils';
import Home from '@pages/Home';
import Header from './header';
import Footer from './footer';

const mainRoutes = getRoutes('mainRoutes');

const Router = () => {
    const inAuthenticate = false;
    if (!inAuthenticate) {
        return (
            <>
                <Header/>
                <Container className="background">
                    <Switch>
                        <Route exact path={mainRoutes.home} component={Home}/>
                        <Route exact path={mainRoutes.testimonial} component={Home}/>
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
