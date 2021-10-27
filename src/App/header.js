import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router';
import {useSelector, connect, useDispatch} from 'react-redux';
import PropTypes from 'prop-types';
import {NavLink as RRNavLink} from 'react-router-dom';
import map from 'lodash/map';
import isEmpty from 'lodash/isEmpty';
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
import {getNavigationHeader, getLoginInit} from '@core/state/Session/selectors';
import {fetchLoginRequested, fetchSessionLogout} from '@core/state/Session/actions';
import {submitUserRequested} from '@core/state/User/actions';
import ModalLogin from '@components/ModalLogin';
import FormLogin from '@components/FormLogin';
import fromState from '@core/selectors';
import logo from '../images/LOGO-HEADER.png';
import {HOME} from '../utils/constants';
import RegisterForm from '../components/RegisterForm';

const mainRoutes = getRoutes('mainRoutes');

const Header = ({
    registerForm,
    registerFields,
    isAuthenticate,
    userAgent,
    buttonLogin,
    buttonRegister,
    buttonAdminBackoffice,
    buttonAdminLogout,
    buttonStandardLogout
}) => {
    const roleId = isEmpty(userAgent) ? null : userAgent.roleId;
    const [modalLogin, setModalLogin] = useState(false);
    const [modalRegister, setModalRegister] = useState(false);
    const dispatch = useDispatch();
    const [isOpen, setIsOpen] = useState(false);
    const [routes, setRoutes] = useState(null);
    const [activeTab, setActiveTab] = useState(null);
    const toggle = () => setIsOpen(!isOpen);
    const navigationRoutes = useSelector(() => getNavigationHeader());
    const loginInit = useSelector(() => getLoginInit());
    const history = useHistory();
    const logout = () => {
        dispatch(fetchSessionLogout());
    };
    const validateLoginForm = values => {
        const errors = {};
        if (!values.email || !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            errors.email = 'Direccion de Email invalido';
        }
        if (!values.password || !/^[\s\S]{6,25}$/i.test(values.password)) {
            errors.password = 'Deberia de tener al menos 6 caracteres';
        }
        return errors;
    };

    const validateRegisterForm = values => {
        const errors = {};
        if (!values.firstName || !values.lastName) {
            errors.firstName = 'Campo requerido';
            errors.lastName = 'Campo requerido';
        }
        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            errors.email = 'Direccion de Email invalido';
        }
        if (!/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{6,25}$/.test(values.password)) {
            errors.password = 'Debe contener al menos 6 caracteres, un número, una letra mayúscula y una letra minúscula';
        }
        return errors;
    };

    const FormikLogin = useFormik({
        initialValues: {
            ...loginInit.form
        },
        validate: validateLoginForm,
        onSubmit: values => {
            dispatch(fetchLoginRequested(values));
            setModalLogin(!modalLogin);
        }
    });
    const FormikRegister = useFormik({
        initialValues: {
            ...registerForm
        },
        validate: validateRegisterForm,
        onSubmit: values => {
            dispatch(submitUserRequested(values));
            setModalRegister(!modalRegister);
        }
    });

    useEffect(() => {
        if (navigationRoutes) {
            setRoutes(navigationRoutes);
        }
        // eslint-disable-next-line
        setActiveTab(location.hash.slice(2) === '' ? HOME : location.hash.slice(2));
        // eslint-disable-next-line
    }, [location.hash]);
    return (
        <header className="bg mb-2">
            <Container fluid className="p-0 m-0">
                <Row className="p-0 m-0 ">
                    <Col className="p-0 m-0">
                        <Navbar light expand="md" className="my-1 px-3 pl-md-0 mr-md-3 px-lg-2 p-0">
                            <Col sm="2" className="p-0 m-0 w-50 justify-content-md-center d-md-flex">
                                <NavbarBrand to={mainRoutes.home} tag={RRNavLink} className="m-0">
                                    <img
                                        width="120"
                                        height="50"
                                        src={logo}
                                        alt="Somos Mas Logo"
                                    />
                                </NavbarBrand>
                            </Col>
                            <NavbarToggler onClick={toggle}/>
                            <Collapse className="d-md-flex justify-content-lg-between" isOpen={isOpen} navbar>
                                <Col
                                    sm="8"
                                    md="auto"
                                    className="justify-content-start p-0 "
                                >
                                    <Nav className="" navbar>
                                        {routes && routes.length > 0
                                            && map(routes, (route, i) => (
                                                <NavItem key={i}>
                                                    <NavLink
                                                        className={
                                                            activeTab
                                                                  === route.name
                                                                ? 'active links p-1 ml-md-1 ml-lg-4 ml-xl-5 '
                                                                : 'links p-1 ml-md-1 ml-lg-4 ml-xl-5'
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
                                <Col md="auto" xl="3" className="px-0">
                                    <Nav className="d-block d-md-flex align-items-center justify-content-md-end p-0">
                                        {!isAuthenticate && (
                                            <>
                                                <NavItem>
                                                    <Button
                                                        outline
                                                        color="primary"
                                                        onClick={() => setModalLogin(!modalLogin)}
                                                        className="btn-login my-1 my-md-0 px-sm-4 px-md-2 px-lg-4 ml-0 ml-md-1 mr-2 mx-lg-4"
                                                    >
                                                        {buttonLogin}
                                                    </Button>
                                                    <ModalLogin
                                                        isOpen={modalLogin}
                                                        toggle={() => setModalLogin(!modalLogin)}
                                                        proceed={FormikLogin.handleSubmit}
                                                        title="Iniciar sesion"
                                                        buttonConfirm="Entrar"
                                                        buttonCancel="Cancelar"
                                                    >
                                                        <FormLogin key="LoginForm" fields={loginInit.fields} Formik={FormikLogin}/>
                                                    </ModalLogin>
                                                </NavItem>
                                                <NavItem>
                                                    <Button
                                                        color="danger"
                                                        onClick={() => setModalRegister(!modalRegister)}
                                                        className="btn-register my-2 px-sm-3 px-md-1 px-lg-3 my-md-0 mr-3"
                                                    >
                                                        {buttonRegister}
                                                    </Button>
                                                    <ModalLogin
                                                        isOpen={modalRegister}
                                                        toggle={() => setModalRegister(!modalRegister)}
                                                        proceed={FormikRegister.handleSubmit}
                                                        title="Registrate"
                                                        buttonConfirm="Registrar"
                                                        buttonCancel="Cancelar"
                                                    >
                                                        <RegisterForm key="RegisterForm" fields={registerFields} Formik={FormikRegister}/>
                                                    </ModalLogin>
                                                </NavItem>
                                            </>
                                        )}
                                        {roleId === 1 && (
                                            <NavItem>
                                                <Button className="ml-md-3" color="info" onClick={() => history.push(mainRoutes.backOffice)}>
                                                    {buttonAdminBackoffice}
                                                </Button>
                                                <Button className="ml-md-3" color="info" onClick={logout}>
                                                    {buttonAdminLogout}
                                                </Button>
                                            </NavItem>
                                        )}
                                        {isAuthenticate && roleId !== 1 && (
                                            <NavItem>
                                                <Button className="ml-md-3" color="info" onClick={logout}>
                                                    {buttonStandardLogout}
                                                </Button>
                                            </NavItem>
                                        )}
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

Header.propTypes = {
    registerForm: PropTypes.shape({
        firstName: PropTypes.string.isRequired,
        lastName: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        password: PropTypes.string.isRequired
    }).isRequired,
    registerFields: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            placeholder: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
    userAgent: PropTypes.shape({
        roleId: PropTypes.number
    }).isRequired,
    isAuthenticate: PropTypes.bool.isRequired,
    buttonAdminBackoffice: PropTypes.string,
    buttonAdminLogout: PropTypes.string,
    buttonStandardLogout: PropTypes.string,
    buttonLogin: PropTypes.string,
    buttonRegister: PropTypes.string
};

Header.defaultProps = {
    buttonAdminBackoffice: 'Administracion',
    buttonAdminLogout: 'Salir',
    buttonStandardLogout: 'Salir',
    buttonLogin: 'Ingresar',
    buttonRegister: 'Registrate'
};

const mapStateToProps = state => ({
    registerForm: fromState.User.getRegisterForm(state),
    registerFields: fromState.User.getRegisterFields(state),
    isAuthenticate: fromState.Session.isAuthenticate(state),
    userAgent: fromState.Session.getUserAgent(state)
});

export default connect(
    mapStateToProps
)(Header);
