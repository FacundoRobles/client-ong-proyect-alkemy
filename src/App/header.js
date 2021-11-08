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
    Button,
    CardImg
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
import {HOME, MY_PROFILE} from '../utils/constants';
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
        onSubmit: payload => {
            dispatch(submitUserRequested({payload}));
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
        <header>
            <Navbar light expand="md" container="fluid" className="header-nav">
                <NavbarBrand className="me-auto" to={mainRoutes.home} tag={RRNavLink}>
                    <CardImg
                        width="100px"
                        height="40px"
                        src={logo}
                        alt="Somos Mas Logo"
                        style={{
                            minWidth: '100px',
                            maxWidth: '100px'
                        }}
                    />
                </NavbarBrand>
                <NavbarToggler onClick={toggle}/>
                <Collapse isOpen={isOpen} navbar className="text-center bg-white">
                    <Nav navbar className="links-responsive">
                        {routes && routes.length > 0
                            && map(routes, (route, i) => (
                                <NavItem key={i}>
                                    <NavLink
                                        className={
                                            activeTab
                                                    === route.name
                                                ? 'active links'
                                                : 'links'
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
                    {!isAuthenticate && (
                        <Nav className="btn-responsive">
                            <NavItem>
                                <Button
                                    outline
                                    color="primary"
                                    onClick={() => setModalLogin(!modalLogin)}
                                    className="btn-login m-1"
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
                                    className="btn-register m-1"
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
                        </Nav>
                    )}
                    {roleId === 1 && (
                        <Nav className="btn-responsive">
                            <NavItem>
                                <Button className="btn-backoffice m-1" color="info" onClick={() => history.push(mainRoutes.backOffice)}>
                                    {buttonAdminBackoffice}
                                </Button>
                            </NavItem>
                            <NavItem>
                                <Button className="btn-logout m-1" color="info" onClick={logout}>
                                    {buttonAdminLogout}
                                </Button>
                            </NavItem>
                        </Nav>
                    )}
                    {isAuthenticate && roleId !== 1 && (
                        <Nav className="btn-responsive">
                            <NavItem>
                                <Button
                                    className="btn-profile m-1"
                                    color="info"
                                    onClick={() => history.push(`${mainRoutes.myProfile}/${userAgent.id}`)}
                                >
                                    {MY_PROFILE}
                                </Button>
                            </NavItem>
                            <NavItem>
                                <Button className="btn-logout" color="info" onClick={logout}>
                                    {buttonStandardLogout}
                                </Button>
                            </NavItem>
                        </Nav>
                    )}
                </Collapse>
            </Navbar>
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
        roleId: PropTypes.number,
        id: PropTypes.number
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
