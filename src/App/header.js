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
import logo from '../images/LOGO-HEADER.png';
import {getNavigationHeader} from '../core/state/Session/selectors';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [routes, setRoutes] = useState(null);
    const [activeTab, setActiveTab] = useState(null);
    const toggle = () => setIsOpen(!isOpen);
    const state = useSelector(() => getNavigationHeader());

    useEffect(() => {
        if (state) {
            setRoutes(state);
        }
        // eslint-disable-next-line
        setActiveTab(location.hash.slice(2) === '' ? 'home' : location.hash.slice(2));
        // eslint-disable-next-line
    },[location.hash]);
    return (
        <header className="bg mb-2">
            <Container fluid className="p-0 m-0">
                <Row className="p-0 m-0 ">
                    <Col className="p-0 m-0">
                        <Navbar light expand="md" className="pr-3 pr-lg-0 ml-0 pt-1">
                            <Col sm="6" md="2" className="p-0 m-0">
                                <NavbarBrand href="/" className="mb-md-1 mx-lg-5">
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
                                    sm="6"
                                    md="8"
                                    className="justify-content-md-start ml-lg-5 d-lg-flex"
                                >
                                    <Nav className="" navbar>
                                        {routes && routes.length > 0
                                            ? map(routes, (route, i) => (
                                                <NavItem key={i}>
                                                    <NavLink
                                                        className={
                                                            activeTab
                                                                  === route.name
                                                                ? 'active links pl-lg-5 '
                                                                : 'links pl-lg-5'
                                                        }
                                                        onClick={() => setActiveTab(route.name)}
                                                        to={route.uri}
                                                        tag={RRNavLink}
                                                    >
                                                        {route.label}
                                                    </NavLink>
                                                </NavItem>
                                            ))
                                            : ''}
                                    </Nav>
                                </Col>
                                <Col sm="2" md="4">
                                    <Nav className="ml-lg-5">
                                        <div className="d-md-flex align-items-center justify-content-start justify-content-lg-end ml-lg-5">
                                            <NavItem>
                                                <NavLink
                                                    to="/login"
                                                    className="pr-lg-0 ml-lg-5 pl-0"
                                                    tag={RRNavLink}
                                                >
                                                    <Button className="btn-login">
                                                        Log In
                                                    </Button>
                                                    {' '}
                                                </NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink
                                                    to="/register"
                                                    className="pr-md-0 pl-0 pl-md-3"
                                                    tag={RRNavLink}
                                                >
                                                    <Button className="btn-register">
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
