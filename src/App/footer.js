import React from 'react';
import {Row, Col, Container} from 'reactstrap';

const Footer = () => (
    <footer className="top-more">
        <Container fluid>
            <Row className="my-4">
                <Col sm={{
                    offset: 4, size: 4
                }}
                >
                    <p className="text-white text-center mt-1">
                        el footer
                    </p>
                </Col>
            </Row>
        </Container>
    </footer>
);
export default Footer;
