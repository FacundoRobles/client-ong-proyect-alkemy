import React from 'react';
import {
    Media,
    Navbar,
    NavLink,
    Container,
    Row,
    Col
} from 'reactstrap';
import {Link, useLocation} from 'react-router-dom';

const Header = () => {
    const location = useLocation();
    return (
        <>
            {location.pathname !== '/login' && (
                <header className="bg mb-2">
                    <Container fluid className="p-0 m-0  ml-auto mr-auto">
                        <Row className="p-0 m-0">
                            <Col sm="12" className="p-0 m-0">
                                <Navbar expand="md" className="p-0 m-0">
                                    <NavLink
                                        tag={Link}
                                        className="logo"
                                        to="/"
                                    >
                                        <Media
                                            className="logo-app"
                                            alt="logo"
                                            src="/"
                                        />
                                    </NavLink>
                                </Navbar>
                            </Col>
                        </Row>

                    </Container>
                </header>
            )}
        </>
    );
};

export default Header;
