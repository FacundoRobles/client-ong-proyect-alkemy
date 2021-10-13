/* eslint-disable no-console  */
import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import {NavLink as RRNavLink} from 'react-router-dom';
import map from 'lodash/map';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container,
    Row,
    Col,
    Button
} from 'reactstrap';
import {getRoutes} from '@utils';
import {useFormik} from 'formik';
import ModalLogin from '@components/ModalLogin';
import FormLogin from '@components/FormLogin';
import logo from '../images/LOGO-HEADER.png';
import {getNavigationHeader} from '../core/state/Session/selectors';
import {HOME} from '../utils/constants';

const mainRoutes = getRoutes('mainRoutes');

const Header = () => {
    const [modal, setModal] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [routes, setRoutes] = useState(null);
    const [activeTab, setActiveTab] = useState(null);
    const toggle = () => setIsOpen(!isOpen);
    const state = useSelector(() => getNavigationHeader());
    const validation = values => {
        const errors = {};
        if (!values.email || !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
        }
        if (!values.password || !/^[\s\S]{6,25}$/i.test(values.password)) {
            errors.password = 'Must contain at least 6 characters';
        }
        return errors;
    };
    const Formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validate: validation,
        onSubmit: values => console.log(values)
    });

    useEffect(() => {
        if (state) {
            setRoutes(state);
        }
        // eslint-disable-next-line
        setActiveTab(location.hash.slice(2) === '' ? HOME : location.hash.slice(2));
        // eslint-disable-next-line
    },[location.hash]);
    return (
        <header className="bg mb-2">
            <Container fluid className="p-0 m-0">
                <Row className="p-0 m-0 ">
                    <Col className="p-0 m-0">
                        <Navbar light expand="md" className="pr-3 pr-lg-0 ml-0 pt-1">
                            <Col sm="6" md="2" className="p-0 m-0">
                                <NavbarBrand to={mainRoutes.home} tag={RRNavLink} className="mb-md-1 mx-lg-5">
                                    <img
                                        width="120"
                                        height="50"
                                        src={logo}
                                        alt="Somos Mas Logo"
                                    />
                                </NavbarBrand>
                            </Col>
                            <NavbarToggler onClick={toggle}/>
                            <Collapse isOpen={isOpen} navbar>
                                <Col
                                    sm="7"
                                    md="8"
                                    className="justify-content-center ml-lg-5 d-md-flex"
                                >
                                    <Nav className="" navbar>
                                        {routes && routes.length > 0
                                            && map(routes, (route, i) => (
                                                <NavItem key={i}>
                                                    <NavLink
                                                        className={
                                                            activeTab
                                                                  === route.name
                                                                ? 'active links pl-md-4 pl-lg-5 '
                                                                : 'links pl-md-3 pl-lg-5'
                                                        }
                                                        onClick={() => setActiveTab(route.name)}
                                                        to={route.uri}
                                                        tag={RRNavLink}
                                                    >
                                                        {route.label}
                                                    </NavLink>
                                                </NavItem>
                                            ))}
                                    </Nav>
                                </Col>
                                <Col md="4" xl="3">
                                    <Nav className="justify-content-xl-end p-0">
                                        <div className="d-md-flex align-items-center">
                                            <NavItem>
                                                <NavLink
                                                    to={mainRoutes.login}
                                                    className="pr-lg-0 ml-md-2 ml-lg-5 pl-0 pl-md-2"
                                                    tag={RRNavLink}
                                                >
                                                    <Button outline color="primary" onClick={() => setModal(!modal)} className="btn-login">
                                                        Log In
                                                    </Button>
                                                    <ModalLogin
                                                        isOpen={modal}
                                                        toggle={() => setModal(!modal)}
                                                        proceed={Formik.handleSubmit}
                                                        title="Iniciar sesion"
                                                        buttonConfirm="Entrar"
                                                        buttonCancel="Cancelar"
                                                    >
                                                        <FormLogin Formik={Formik}/>
                                                    </ModalLogin>
                                                </NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink
                                                    to={mainRoutes.register}
                                                    className="pl-0 pl-lg-4"
                                                    tag={RRNavLink}
                                                >
                                                    <Button color="primary" className="btn-register">
                                                        Registrate
                                                    </Button>
                                                    {' '}
                                                </NavLink>
                                            </NavItem>
                                        </div>
                                    </Nav>
                                </Col>
                            </Collapse>
                        </Navbar>
                    </Col>
                </Row>
            </Container>
        </header>
    );
};

export default Header;
