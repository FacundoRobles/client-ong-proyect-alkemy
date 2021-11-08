import React, {useEffect} from 'react';
import {Route, Switch, useLocation} from 'react-router-dom';
import {Container} from 'reactstrap';
import {getRoutes} from '@utils';
import {motion} from 'framer-motion';
import {useSelector} from 'react-redux';
import fromState from '@selectors';
import Home from '@pages/Home';
import Organization from '@pages/Organization';
import Activity from '@pages/Activity';
import ActivityDetail from '@pages/ActivityDetail';
import News from '@pages/News';
import NewsDetail from '@pages/NewsDetail';
import Testimonial from '@pages/Testimonial';
import Contact from '@pages/Contact';
import Contribute from '@pages/Contribute';
import MyProfile from '@pages/MyProfile';
import MyProfileEdit from '@pages/MyProfileEdit';
import Us from '@pages/Us';
import BackOffice from '@pages/BackOffice';
import BackActivityForm from '@pages/BackActivityForm';
import BackActivityList from '@pages/BackActivityList';
import BackCategoriesForm from '@pages/BackCategoriesForm';
import BackCategoriesList from '@pages/BackCategoriesList';
import BackNewsForm from '@pages/BackNewsForm';
import BackNewsList from '@pages/BackNewsList';
import BackTestimonial from '@pages/BackTestimonial';
import BackTestimonialList from '@pages/BackTestimonialList';
import BackOrganizationForm from '@pages/BackOrganizationForm';
import BackOrganizationList from '@pages/BackOrganizationList';
import BackHomeForm from '@pages/BackHomeForm';
import BackUsersList from '@pages/BackUsersList';
import BackUserForm from '@pages/BackUserForm';
import BackMembersList from '@pages/BackMembersList';
import BackContactList from '@pages/BackContactList';
import TestimonialDetail from '@pages/TestimonialDetail';
import PageNotFound from '@pages/PageNotFound';
import isEmpty from 'lodash/isEmpty';
import Header from './header';
import Footer from './footer';

const mainRoutes = getRoutes('mainRoutes');
const backOfficeRoutes = getRoutes('backOffice');

const Router = () => {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }, [location]);

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
                <motion.div
                    key={currentKey}
                    initial="hidden"
                    animate="visible"
                    variants={variants}
                >
                    <Container fluid>
                        <Switch location={location}>
                            <Route exact path={mainRoutes.home} component={Home}/>
                            <Route exact path={mainRoutes.activity} component={Activity}/>
                            <Route exact path={mainRoutes.news} component={News}/>
                            <Route exact path={mainRoutes.testimonial} component={Testimonial}/>
                            <Route exact path={`${mainRoutes.testimonial}/:id`} component={TestimonialDetail}/>
                            <Route exact path={mainRoutes.organization} component={Organization}/>
                            <Route exact path={`${mainRoutes.activity}/:id`} component={ActivityDetail}/>
                            <Route exact path={`${mainRoutes.news}/:id`} component={NewsDetail}/>
                            <Route exact path={mainRoutes.contact} component={Contact}/>
                            <Route exact path={mainRoutes.contribute} component={Contribute}/>
                            <Route exact path={mainRoutes.us} component={Us}/>
                            <Route component={PageNotFound}/>
                        </Switch>
                    </Container>
                </motion.div>
                <Footer/>
            </>
        );
    }
    if (roleId === 1) {
        return (
            <>
                <Header/>
                <motion.div
                    key={currentKey}
                    initial="hidden"
                    animate="visible"
                    variants={variants}
                >
                    <Container fluid>
                        <Switch location={location}>
                            <Route exact path={mainRoutes.home} component={Home}/>
                            <Route exact path={mainRoutes.activity} component={Activity}/>
                            <Route exact path={mainRoutes.news} component={News}/>
                            <Route exact path={mainRoutes.testimonial} component={Testimonial}/>
                            <Route exact path={`${mainRoutes.testimonial}/:id`} component={TestimonialDetail}/>
                            <Route exact path={mainRoutes.organization} component={Organization}/>
                            <Route exact path={`${mainRoutes.activity}/:id`} component={ActivityDetail}/>
                            <Route exact path={`${mainRoutes.news}/:id`} component={NewsDetail}/>
                            <Route exact path={mainRoutes.contact} component={Contact}/>
                            <Route exact path={mainRoutes.contribute} component={Contribute}/>
                            <Route exact path={`${mainRoutes.myProfile}/:id`} component={MyProfile}/>
                            <Route exact path={mainRoutes.us} component={Us}/>
                            <Route exact path={mainRoutes.backOffice} component={BackOffice}/>
                            <Route exact path={backOfficeRoutes.user.edit} component={BackUserForm}/>
                            <Route exact path={backOfficeRoutes.user.list} component={BackUsersList}/>
                            <Route exact path={backOfficeRoutes.activity.list} component={BackActivityList}/>
                            <Route exact path={backOfficeRoutes.activity.form} component={BackActivityForm}/>
                            <Route exact path={backOfficeRoutes.activity.show} component={BackActivityForm}/>
                            <Route exact path={backOfficeRoutes.category.list} component={BackCategoriesList}/>
                            <Route exact path={backOfficeRoutes.category.form} component={BackCategoriesForm}/>
                            <Route exact path={backOfficeRoutes.category.show} component={BackCategoriesForm}/>
                            <Route exact path={backOfficeRoutes.news.form} component={BackNewsForm}/>
                            <Route exact path={backOfficeRoutes.news.edit} component={BackNewsForm}/>
                            <Route exact path={backOfficeRoutes.news.list} component={BackNewsList}/>
                            <Route exact path={backOfficeRoutes.testimonial.edit} component={BackTestimonial}/>
                            <Route exact path={backOfficeRoutes.testimonial.form} component={BackTestimonial}/>
                            <Route exact path={backOfficeRoutes.testimonial.list} component={BackTestimonialList}/>
                            <Route exact path={backOfficeRoutes.organization.edit} component={BackHomeForm}/>
                            <Route exact path={backOfficeRoutes.organization.form} component={BackOrganizationForm}/>
                            <Route exact path={backOfficeRoutes.organization.list} component={BackOrganizationList}/>
                            <Route exact path={backOfficeRoutes.contact.list} component={BackContactList}/>
                            <Route exact path={backOfficeRoutes.slides.edit} component={BackHomeForm}/>
                            <Route exact path={backOfficeRoutes.member.list} component={BackMembersList}/>
                            <Route component={PageNotFound}/>
                        </Switch>
                    </Container>
                </motion.div>
                <Footer/>
            </>
        );
    }

    return (
        <>
            <Header/>
            <motion.div
                key={currentKey}
                initial="hidden"
                animate="visible"
                variants={variants}
            >
                <Container fluid>
                    <Switch location={location}>
                        <Route exact path={mainRoutes.home} component={Home}/>
                        <Route exact path={mainRoutes.activity} component={Activity}/>
                        <Route exact path={mainRoutes.news} component={News}/>
                        <Route exact path={mainRoutes.testimonial} component={Testimonial}/>
                        <Route exact path={`${mainRoutes.testimonial}/:id`} component={TestimonialDetail}/>
                        <Route exact path={`${mainRoutes.activity}/:id`} component={ActivityDetail}/>
                        <Route exact path={`${mainRoutes.news}/:id`} component={NewsDetail}/>
                        <Route exact path={mainRoutes.organization} component={Organization}/>
                        <Route exact path={mainRoutes.contact} component={Contact}/>
                        <Route exact path={mainRoutes.contribute} component={Contribute}/>
                        <Route exact path={`${mainRoutes.myProfile}/:id`} component={MyProfile}/>
                        <Route exact path={`${mainRoutes.myProfile}/:id/edit`} component={MyProfileEdit}/>
                        <Route exact path={mainRoutes.us} component={Us}/>
                        <Route component={PageNotFound}/>
                    </Switch>
                </Container>
            </motion.div>
            <Footer/>
        </>
    );
};
export default Router;
