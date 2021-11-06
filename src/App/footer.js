/* eslint-disable lodash/collection-method-value */
import React from 'react';
import {
    Row,
    Col,
    Container,
    CardImg
} from 'reactstrap';
import {useSelector} from 'react-redux';
import {getRoutes} from '@utils';
import {Link} from 'react-router-dom';
import '../scss/footer.scss';
import fromState from '@core/selectors';
import map from 'lodash/map';
import isEmpty from 'lodash/isEmpty';
import logo from '../images/LOGO.png';
import facebook from '../images/facebook.png';
import instagram from '../images/instagram.png';
import linkedin from '../images/linkedin.png';

const mainRoutes = getRoutes('mainRoutes');

const Footer = () => {
    const selector = useSelector(fromState.Organization.isOrganization);
    const goPage = val => {
        const network = val;
        window.open(`http://${network}`, '_blank');
    };
    const getNetwork = (val => {
        if (val === 'facebook') {
            return facebook;
        } if (val === 'linkedin') {
            return linkedin;
        }
        return instagram;
    });
    return (
        <footer className="footer">
            <Container fluid>
                <Row>
                    <Col xs="12">
                        <hr/>
                    </Col>
                    <Col md="5">
                        <Row>
                            <Col className="text-center">
                                <Link
                                    to={mainRoutes.news}
                                >
                                    Noticias
                                </Link>
                            </Col>
                            <Col className="text-center">
                                <Link
                                    to={mainRoutes.activity}
                                >
                                    Actividades
                                </Link>
                            </Col>
                            <Col className="text-center">
                                <Link
                                    to={mainRoutes.news}
                                >
                                    Novedades
                                </Link>
                            </Col>
                        </Row>
                    </Col>
                    <Col md="2" className="text-center logo-footer">
                        <CardImg
                            src={logo}
                            alt="logo"
                        />
                    </Col>
                    <Col md="5">
                        <Row>
                            <Col className="text-center">
                                <Link
                                    to={mainRoutes.testimonial}
                                >
                                    Testimonios
                                </Link>
                            </Col>
                            <Col className="text-center">
                                <Link
                                    to={mainRoutes.us}
                                >
                                    Nosotros
                                </Link>
                            </Col>
                            <Col className="text-center">
                                <Link
                                    to={mainRoutes.contact}
                                >
                                    Contacto
                                </Link>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs="12">
                        <hr/>
                    </Col>
                    <Col xs="12" className="social-network-items">
                        {!isEmpty(selector) && (
                            map(selector, (value, key) => (
                                <CardImg
                                    key={key}
                                    src={getNetwork(key)}
                                    alt="icon network"
                                    onClick={() => goPage(value)}
                                />
                            ))
                        )}
                    </Col>
                    <Col sm="12" className="text-center text-span">
                        <span>2021 by Alkemy. All Rights Reserved.</span>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
