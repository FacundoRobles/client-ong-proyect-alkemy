import React from 'react';
import {Route, Switch, useLocation} from 'react-router-dom';
import {Container} from 'reactstrap';
import {getRoutes} from '@utils';
import {motion} from 'framer-motion';
import Home from '@pages/Home';
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
    const location = useLocation();
    const currentKey = location.pathname;
    const variants = {
        visible: {opacity: 1},
        hidden: {opacity: 0}
    };
    const inAuthenticate = false;
    if (!inAuthenticate) {
        return (
            <>
                <Header/>
                <Container className="background">
                    <motion.div
                        key={currentKey}
                        initial="hidden"
                        animate="visible"
                        variants={variants}
                    >
                        <Switch location={location}>
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
                    </motion.div>
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
