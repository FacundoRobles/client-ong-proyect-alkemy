import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {Container} from 'reactstrap';
import {getRoutes} from '@utils';
import Home from '@pages/Home';
import jwt from 'jwt-decode';
import Organization from '@pages/Organization';
import Activity from '@pages/Activity';
import News from '@pages/News';
import Testimonial from '@pages/Testimonial';
import Contact from '@pages/Contact';
import Contribute from '@pages/Contribute';
import Login from '@pages/Login';
import Register from '@pages/Register';
import Header from './header';
import Footer from './footer';

const mainRoutes = getRoutes('mainRoutes');

const Router = () => {
    const token = localStorage.getItem('token_agent');
    const roleId = token ? jwt(token).roleId : null;
    if (!token) {
        // Las rutas publicas
        return (
            <>
                <Header/>
                <Container className="background">
                    <Switch>
                        <Route exact path={mainRoutes.home} component={Home}/>
                        <Route exact path={mainRoutes.organization} component={Organization}/>
                        <Route exact path={mainRoutes.activity} component={Activity}/>
                        <Route exact path={mainRoutes.news} component={News}/>
                        <Route exact path={mainRoutes.testimonial} component={Testimonial}/>
                        <Route exact path={mainRoutes.contact} component={Contact}/>
                        <Route exact path={mainRoutes.contribute} component={Contribute}/>
                        <Route exact path={mainRoutes.login} component={Login}/>
                        <Route exact path={mainRoutes.register} component={Register}/>
                    </Switch>
                </Container>
                <Footer/>
            </>
        );
    }
    if (roleId === 1) {
        // Rutas admin
        return (
            <>
                <Switch>
                    <Route exact path={mainRoutes.home} key="activePerson" component={Home}/>
                </Switch>
            </>
        );
    }
    return (
        // Rutas para usuario privado
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
};
export default Router;
