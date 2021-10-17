import React, {useState, useEffect} from 'react';
import {useSelector, connect, useDispatch} from 'react-redux';
import PropTypes from 'prop-types';
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
import {getNavigationHeader, getLoginInit} from '@core/state/Session/selectors';
import {fetchLoginRequested} from '@core/state/Session/actions';
import {submitUserRequested} from '@core/state/User/actions';
import ModalLogin from '@components/ModalLogin';
import FormLogin from '@components/FormLogin';
import fromState from '@core/selectors';
import logo from '../images/LOGO-HEADER.png';
import {HOME} from '../utils/constants';
import RegisterForm from '../components/RegisterForm';

const mainRoutes = getRoutes('mainRoutes');

const Header = ({
    registerForm, registerFields
}) => {
    const btnLogin = 'btn-login my-1 my-md-0 px-sm-4 px-md-2 px-lg-4 ml-0 ml-md-1 ml-lg-5 mr-2 mr-lg-4';
    const btnRegister = 'btn-register my-2 px-sm-3 px-md-1 px-lg-3 my-md-0 mr-3';
    const [modalLogin, setModalLogin] = useState(false);
    const [modalRegister, setModalRegister] = useState(false);
    const dispatch = useDispatch();
    const [isOpen, setIsOpen] = useState(false);
    const [routes, setRoutes] = useState(null);
    const [activeTab, setActiveTab] = useState(null);
    const toggle = () => setIsOpen(!isOpen);
    const navigationRoutes = useSelector(() => getNavigationHeader());
    const loginInit = useSelector(() => getLoginInit());
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
    },[location.hash]);
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
                                        <NavItem>
                                            <Button outline color="primary" onClick={() => setModalLogin(!modalLogin)} className={btnLogin}>
                                                Log In
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
                                            <Button color="danger" onClick={() => setModalRegister(!modalRegister)} className={btnRegister}>
                                                Registrate
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
                                </Col>
                            </Collapse>
                        </Navbar>
                    </Col>
                </Row>
            </Container>
        </header>
    );
};

const mapStateToProps = state => ({
    registerForm: fromState.User.getRegisterForm(state),
    registerFields: fromState.User.getRegisterFields(state),
});

export default connect(
    mapStateToProps
)(Header);

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
    ).isRequired
};
