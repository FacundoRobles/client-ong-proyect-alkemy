import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {
    Col,
    Row,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';

import map from 'lodash/map';

const Component = ({
    topNavbar
}) => {
    useEffect(() => {
        // eslint-disable-next-line no-console
        console.log(topNavbar);
    });

    return (
        <>
            <h1>Hola home</h1>
            <Row style={{backgroundColor: '#f5f5f5'}}>
                <Col md="3" className="mr-2">
                    <Row>
                        <Col key="topNavbarContainer">
                            <Nav vertical className="vertical-navbar pt-2" key="topNavbar">
                                {map(topNavbar, navbar => (
                                    <NavItem key={navbar.label}>
                                        <NavLink tag={Link} to={navbar.to} style={{fontSize: '15px', padding: '10px 0'}}>
                                            {navbar.icon && <navbar.icon className="mr-2"/>}
                                            {navbar.label}
                                        </NavLink>
                                    </NavItem>
                                ))}
                            </Nav>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>
    );
};

Component.propTypes = {
    topNavbar: PropTypes.shape({}).isRequired
};

export default Component;
