import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import {Container} from 'reactstrap';
import {getRoutes} from '@utils';
import Home from '@pages/Home';
import {useSelector} from 'react-redux';
import Header from './header';
import Footer from './footer';

const mainRoutes = getRoutes('mainRoutes');

const Router = () => {
    const sessionState = useSelector(state => state.session);
    const {isAuthenticate} = sessionState;
    if (!isAuthenticate) {
        return (
            <>
                <Header/>
                <Container className="background">
                    <Switch>
                        <Route exact path={mainRoutes.home} component={Home}/>
                        <Route exact path={mainRoutes.testimonial} component={Home}/>
                        <Route exact path="/editProfile">
                            {/* Aca reemplazar path con el que esta definido en mainRoutes */}
                            <Redirect to={mainRoutes.home}/>
                        </Route>
                        <Route exact path="/backOffice">
                            <Redirect to={mainRoutes.home}/>
                        </Route>
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
