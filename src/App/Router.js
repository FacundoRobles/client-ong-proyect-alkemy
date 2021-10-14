import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {Container} from 'reactstrap';
import {useSelector} from 'react-redux';
import {getRoutes} from '@utils';
import Home from '@pages/Home';
import Organization from '@pages/Organization';
import Activity from '@pages/Activity';
import News from '@pages/News';
import Testimonial from '@pages/Testimonial';
import Contact from '@pages/Contact';
import Contribute from '@pages/Contribute';
import Login from '@pages/Login';
import Register from '@pages/Register';
import Session from '@selectors';
import isEmpty from 'lodash/isEmpty';
import Header from './header';
import Footer from './footer';

const mainRoutes = getRoutes('mainRoutes');

const Router = () => {
    const isAuthenticate = useSelector(() => Session.isAuthenticate());
    const userAgent = useSelector(() => Session.getUserAgent());
    const roleId = isEmpty(userAgent) ? null : userAgent.roleId;
    if (!isAuthenticate) {
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
        return (
            <>
                <Switch>
                    <Route exact path={mainRoutes.home} key="activePerson" component={Home}/>
                </Switch>
            </>
        );
    }
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
};
export default Router;
