import React from 'react';
import {Route, Switch, useLocation} from 'react-router-dom';
import {Container} from 'reactstrap';
import {getRoutes} from '@utils';
import {motion} from 'framer-motion';
import {useSelector} from 'react-redux';
import fromState from '@selectors';
import Home from '@pages/Home';
import Organization from '@pages/Organization';
import Activity from '@pages/Activity';
import News from '@pages/News';
import Testimonial from '@pages/Testimonial';
import Contact from '@pages/Contact';
import Contribute from '@pages/Contribute';
import BackOffice from '@pages/BackOffice';
import BackNewsForm from '@pages/BackNewsForm';
import BackNewsList from '@pages/BackNewsList';
import isEmpty from 'lodash/isEmpty';
import Header from './header';
import Footer from './footer';

const mainRoutes = getRoutes('mainRoutes');
const backOfficeRoutes = getRoutes('backOffice');

const Router = () => {
    const location = useLocation();
    const currentKey = location.pathname;
    const variants = {
        visible: {opacity: 1},
        hidden: {opacity: 0}
    };
    const isAuthenticate = useSelector(fromState.Session.isAuthenticate);
    const userAgent = useSelector(fromState.Session.getUserAgent);
    const roleId = isEmpty(userAgent) ? null : userAgent.roleId;
    if (!isAuthenticate) {
        return (
            <>
                <Header/>
                {/* Aca estaba el container */}
                <motion.div
                    key={currentKey}
                    initial="hidden"
                    animate="visible"
                    variants={variants}
                >
                    <Switch location={location}>
                        <Container fluid>
                            <Route exact path={mainRoutes.home} component={Home}/>
                        </Container>
                        <Container className="background">
                            <Route exact path={mainRoutes.organization} component={Organization}/>
                            <Route exact path={mainRoutes.activity} component={Activity}/>
                            <Route exact path={mainRoutes.news} component={News}/>
                            <Route exact path={mainRoutes.testimonial} component={Testimonial}/>
                            <Route exact path={mainRoutes.contact} component={Contact}/>
                            <Route exact path={mainRoutes.contribute} component={Contribute}/>
                        </Container>
                    </Switch>
                </motion.div>
                <Footer/>
            </>
        );
    }
    if (roleId === 1) {
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
                            <Route exact path={mainRoutes.backOffice} component={BackOffice}/>
                            <Route exact path={backOfficeRoutes.news.form} component={BackNewsForm}/>
                            <Route exact path={backOfficeRoutes.news.edit} component={BackNewsForm}/>
                            <Route exact path={backOfficeRoutes.news.list} component={BackNewsList}/>
                        </Switch>
                    </motion.div>
                </Container>
                <Footer/>
            </>
        );
    }

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
                    </Switch>
                </motion.div>
            </Container>
            <Footer/>
        </>
    );
};
export default Router;
