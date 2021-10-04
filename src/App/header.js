import React from 'react';
import {
    Container,
    Row,
    Col
} from 'reactstrap';
import {useLocation} from 'react-router-dom';

const Header = () => {
    const location = useLocation();
    return (
        <>
            {location.pathname !== '/login' && (
                <header className="bg mb-2">
                    <Container fluid className="p-0 m-0  ml-auto mr-auto">
                        <Row className="p-0 m-0">
                            <Col sm="12" className="p-0 m-0"/>
                        </Row>

                    </Container>
                </header>
            )}
        </>
    );
};

export default Header;
